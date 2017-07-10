<?php
namespace Sigismund\CoinPayments;

class CoinPaymentsAPI
{
    private $private_key = '';
    private $public_key = '';
    private $ch = null;

    public function setup($private_key, $public_key) {
        $this->private_key = $private_key;
        $this->public_key = $public_key;
        $this->ch = null;
    }

    /**
     * Gets the current CoinPayments.net exchange rate. Output includes both crypto and fiat currencies.
     * @param short If short == true (the default), the output won't include the currency names and confirms needed to save bandwidth.
     */
    public function getRates($short = true, $accepted = true)
    {
        $short = $short ? 1:0;
        $accepted = $accepted ? 1:0;
        return $this->apiCall('rates', [(int) 'short' => $short, (int) 'accepted' => $accepted ]);
    }

    /**
     * Gets your current coin balances (only includes coins with a balance unless all = true).<br />
     * @param all If all = true then it will return all coins, even those with a 0 balance.
     */
    public function getBalances($all = false)
    {
        return $this->apiCall('balances', array('all' => $all ? 1:0));
    }

    /**
     * Creates a basic transaction with minimal parameters.<br />
     * See CreateTransaction for more advanced features.
     * @param amount The amount of the transaction (floating point to 8 decimals).
     * @param currency1 The source currency (ie. USD), this is used to calculate the exchange rate for you.
     * @param currency2 The cryptocurrency of the transaction. currency1 and currency2 can be the same if you don't want any exchange rate conversion.
     * @param address Optionally set the payout address of the transaction. If address is empty then it will follow your payout settings for that coin.
     * @param ipn_url Optionally set an IPN handler to receive notices about this transaction. If ipn_url is empty then it will use the default IPN URL in your account.
     * @param buyer_email Optionally (recommended) set the buyer's email so they can automatically claim refunds if there is an issue with their payment.
     */
    public function createTransactionSimple($amount, $currency1, $currency2, $address='', $ipnUrl='', $buyerEmail='')
    {
        $req = array(
            'amount' => $amount,
            'currency1' => $currency1,
            'currency2' => $currency2,
            'address' => $address,
            'ipn_url' => $ipnUrl,
            'buyer_email' => $buyerEmail,
        );
        return $this->apiCall('create_transaction', $req);
    }

    public function createTransaction($req)
    {
        // See https://www.coinpayments.net/apidoc-create-transaction for parameters
        return $this->apiCall('create_transaction', $req);
    }

    /**
     * Creates an address for receiving payments into your CoinPayments Wallet.<br />
     * @param currency The cryptocurrency to create a receiving address for.
     * @param ipn_url Optionally set an IPN handler to receive notices about this transaction. If ipn_url is empty then it will use the default IPN URL in your account.
     */
    public function getCallbackAddress($currency, $ipnUrl = '')
    {
        $req = array(
            'currency' => $currency,
            'ipn_url' => $ipnUrl,
        );
        return $this->apiCall('get_callback_address', $req);
    }

    /**
     * Creates a withdrawal from your account to a specified address.<br />
     * @param amount The amount of the transaction (floating point to 8 decimals).
     * @param currency The cryptocurrency to withdraw.
     * @param address The address to send the coins to.
     * @param auto_confirm If auto_confirm is true, then the withdrawal will be performed without an email confirmation.
     * @param ipn_url Optionally set an IPN handler to receive notices about this transaction. If ipn_url is empty then it will use the default IPN URL in your account.
     */
    public function createWithdrawal($amount, $currency, $address, $auto_confirm = false, $ipnUrl = '')
    {
        $req = array(
            'amount' => $amount,
            'currency' => $currency,
            'address' => $address,
            'auto_confirm' => $auto_confirm ? 1:0,
            'ipn_url' => $ipnUrl,
        );
        return $this->apiCall('create_withdrawal', $req);
    }

    /**
     * Creates a transfer from your account to a specified merchant.<br />
     * @param amount The amount of the transaction (floating point to 8 decimals).
     * @param currency The cryptocurrency to withdraw.
     * @param merchant The merchant ID to send the coins to.
     * @param auto_confirm If auto_confirm is true, then the transfer will be performed without an email confirmation.
     */
    public function createTransfer($amount, $currency, $merchant, $auto_confirm = false)
    {
        $req = array(
            'amount' => $amount,
            'currency' => $currency,
            'merchant' => $merchant,
            'auto_confirm' => $auto_confirm ? 1:0,
        );
        return $this->apiCall('create_transfer', $req);
    }

    /**
     * Creates a transfer from your account to a specified $PayByName tag.<br />
     * @param amount The amount of the transaction (floating point to 8 decimals).
     * @param currency The cryptocurrency to withdraw.
     * @param pbntag The $PayByName tag to send funds to.
     * @param auto_confirm If auto_confirm is true, then the transfer will be performed without an email confirmation.
     */
    public function sendToPayByName($amount, $currency, $pbntag, $auto_confirm = false)
    {
        $req = array(
            'amount' => $amount,
            'currency' => $currency,
            'pbntag' => $pbntag,
            'auto_confirm' => $auto_confirm ? 1:0,
        );
        return $this->apiCall('create_transfer', $req);
    }

    private function isSetup()
    {
        return (!empty($this->private_key) && !empty($this->public_key));
    }

    private function apiCall($cmd, $req = array())
    {
        if (!$this->isSetup()) {
            return array('error' => 'You have not called the Setup function with your private and public keys!');
        }

        // Set the API command and required fields
        $req['version'] = 1;
        $req['cmd'] = $cmd;
        $req['key'] = $this->public_key;
        $req['format'] = 'json'; //supported values are json and xml

        // Generate the query string
        $post_data = http_build_query($req, '', '&');

        // Calculate the HMAC signature on the POST data
        $hmac = hash_hmac('sha512', $post_data, $this->private_key);

        // Create cURL handle and initialize (if needed)
        if ($this->ch === null) {
            $this->ch = curl_init('https://www.coinpayments.net/api.php');
            curl_setopt($this->ch, CURLOPT_FAILONERROR, true);
            curl_setopt($this->ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($this->ch, CURLOPT_SSL_VERIFYPEER, 0);
        }
        curl_setopt($this->ch, CURLOPT_HTTPHEADER, array('HMAC: '.$hmac));
        curl_setopt($this->ch, CURLOPT_POSTFIELDS, $post_data);

        $data = curl_exec($this->ch);
        if ($data !== false) {
            if (PHP_INT_SIZE < 8 && version_compare(PHP_VERSION, '5.4.0') >= 0) {
                // We are on 32-bit PHP, so use the bigint as string option. If you are using any API calls with Satoshis it is highly NOT recommended to use 32-bit PHP
                $dec = json_decode($data, true, 512, JSON_BIGINT_AS_STRING);
            } else {
                $dec = json_decode($data, true);
            }
            if ($dec !== null && count($dec)) {
                return $dec;
            } else {
                // If you are using PHP 5.5.0 or higher you can use json_last_error_msg() for a better error message
                return array('error' => 'Unable to parse JSON result ('.json_last_error().')');
            }
        } else {
            return array('error' => 'cURL error: '.curl_error($this->ch));
        }
    }
}
