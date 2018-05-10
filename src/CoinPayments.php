<?php

namespace Sigismund\CoinPayments;


use Sigismund\CoinPayments\Agents\Curl;

class CoinPayments
{

    /**
     * @var \Sigismund\CoinPayments\Credentials
     */
    protected $credentials;

    /**
     * @var \Sigismund\CoinPayments\Agents\RequestAgent
     */
    protected $requestAgent;

    /**
     * Optional URL for your IPN callbacks.
     * If not set it will use the IPN URL in your Edit Settings page if you have one set.
     *
     * @var string|null
     */
    protected $ipnUrl;


    /**
     * CoinPayments constructor.
     *
     * @param string $merchantID
     * @param string $publicKey
     * @param string $privateKey
     * @param string $ipnSecret
     */
    public function __construct($merchantID, $publicKey, $privateKey, $ipnSecret)
    {
        $this->setCredentials($merchantID, $publicKey, $privateKey, $ipnSecret);
    }

    /**
     * @param string $command
     * @param array $parameters
     *
     * @return \Sigismund\CoinPayments\ApiCall
     * @throws \Sigismund\CoinPayments\Exceptions\RequestException
     */
    protected function apiCall(string $command, array $parameters)
    {
        $apiCall = new ApiCall($command, $parameters, $this->getCredentials());
        $apiCall->setAgent($this->getRequestAgent());
        $apiCall->execute();

        return $apiCall;
    }

    /**
     * Get current exchange rates
     *
     * @param bool $short The output won't include the currency names and confirms needed to save bandwidth.
     * @param bool $accepted The response will include coin acceptance on your Coin Acceptance Settings page.
     *
     * @return \Sigismund\CoinPayments\ApiCall
     * @throws \Sigismund\CoinPayments\Exceptions\RequestException
     */
    public function getRates(bool $short = true, bool $accepted = true)
    {
        return $this->apiCall(Commands::RATES, ['short' => (int)$short, 'accepted' => (int)$accepted]);
    }

    /**
     * Get basic account info
     *
     * @return \Sigismund\CoinPayments\ApiCall
     * @throws \Sigismund\CoinPayments\Exceptions\RequestException
     */
    public function getBasicInfo()
    {
        return $this->apiCall(Commands::BASIC_INFO, []);
    }

    /**
     * Addresses returned by this API are for personal use deposits and reuse the same personal address(es)
     * in your wallet. There is no fee for these deposits but they don't send IPNs.
     * For commercial-use addresses see 'get_callback_address'.
     *
     * @param string $currency The currency the buyer will be sending.
     *
     * @return \Sigismund\CoinPayments\ApiCall
     * @throws \Sigismund\CoinPayments\Exceptions\RequestException
     */
    public function getDepositAddress(string $currency)
    {
        return $this->apiCall(Commands::GET_DEPOSIT_ADDRESS, ['currency' => $currency]);
    }

    /**
     * Gets your current coin balances (only includes coins with a balance unless all = true).
     *
     * @param bool $all If true it will return all coins, even those with a 0 balance.
     *
     * @return \Sigismund\CoinPayments\ApiCall
     * @throws \Sigismund\CoinPayments\Exceptions\RequestException
     */
    public function getBalances($all = false)
    {
        return $this->apiCall(Commands::BALANCES, ['all' => $all ? 1 : 0]);
    }

    /**
     * Create a transaction
     *
     * @param float $amount The amount of the transaction (floating point to 8 decimals).
     * @param string $currencyIn The source currency (ie. USD), this is used to calculate the exchange rate.
     * @param string $currencyOut The cryptocurrency of the transaction.
     * @param array $additional Optionally set additional fields
     *
     * @return \Sigismund\CoinPayments\ApiCall
     * @throws \Sigismund\CoinPayments\Exceptions\RequestException
     */
    public function createTransaction(float $amount, string $currencyIn, string $currencyOut, $additional = [])
    {
        $acceptableFields = ['address', 'buyer_email', 'buyer_name',
            'item_name', 'item_number', 'invoice', 'custom'];


        $parameters = [
            'amount' => $amount,
            'currency1' => $currencyIn,
            'currency2' => $currencyOut
        ];

        foreach ($acceptableFields as $field) {
            if (isset($additional[$field])) {
                $parameters[$field] = $additional[$field];
            }
        }

        if ($this->getIpnUrl()) {
            $parameters['ipn_url'] = $this->getIpnUrl();
        }

        return $this->apiCall(Commands::CREATE_TRANSACTION, $parameters);
    }

    /**
     * Get transaction information via transaction ID
     *
     * @param string $txID
     * @param bool $all
     *
     * @return \Sigismund\CoinPayments\ApiCall
     * @throws \Sigismund\CoinPayments\Exceptions\RequestException
     */
    public function getTransactionInfo($txID, $all = true)
    {
        $parameters = [
            'txid' => $txID,
            'full' => (int)$all
        ];

        return $this->apiCall(Commands::GET_TX_INFO, $parameters);
    }

    /**
     * @param int|null $limit
     * @param int|null $start
     * @param int|null $newer
     * @param bool|null $all
     *
     * @return \Sigismund\CoinPayments\ApiCall
     * @throws \Sigismund\CoinPayments\Exceptions\RequestException
     */
    public function getTransactionsList($limit = null, $start = null, $newer = null, $all = null)
    {
        $parameters = [
            'limit' => $limit,
            'start' => $start,
            'newer' => $newer,
            'all' => $all
        ];

        return $this->apiCall(Commands::GET_TX_IDS, $parameters);
    }

    /**
     * Creates an address for receiving payments into your CoinPayments Wallet.
     *
     * @param float $currency The cryptocurrency to create a receiving address for.
     *
     * @return \Sigismund\CoinPayments\ApiCall
     * @throws \Sigismund\CoinPayments\Exceptions\RequestException
     */
    public function getCallbackAddress(float $currency)
    {
        $parameters = [
            'currency' => $currency,
            'ipn_url' => $this->getIpnUrl(),
        ];

        return $this->apiCall(Commands::GET_CALLBACK_ADDRESS, $parameters);
    }

    /**
     * Creates a withdrawal from your account to a specified address.
     *
     * @param float $amount The amount of the transaction (floating point to 8 decimals).
     * @param string $currency The cryptocurrency to withdraw.
     * @param string $address The address to send the coins to.
     * @param bool $autoConfirm If true, then the withdrawal will be performed without an email confirmation.
     *
     * @return \Sigismund\CoinPayments\ApiCall
     * @throws \Sigismund\CoinPayments\Exceptions\RequestException
     */
    public function createWithdrawal(float $amount, string $currency, string $address, bool $autoConfirm = false)
    {
        $parameters = [
            'amount' => $amount,
            'currency' => $currency,
            'address' => $address,
            'auto_confirm' => $autoConfirm ? 1 : 0,
            'ipn_url' => $this->getIpnUrl()
        ];

        return $this->apiCall(Commands::CREATE_WITHDRAWAL, $parameters);
    }

    /**
     * Creates a transfer from your account to a specified $PayByName tag.
     *
     * @param float $amount The amount of the transaction (floating point to 8 decimals).
     * @param string $currency The cryptocurrency to withdraw.
     * @param string $pbnTag The $PayByName tag to send funds to.
     * @param bool $autoConfirm If true, then the transfer will be performed without an email confirmation.
     *
     * @return \Sigismund\CoinPayments\ApiCall
     * @throws \Sigismund\CoinPayments\Exceptions\RequestException
     */
    public function sendToPayByName(float $amount, string $currency, string $pbnTag, $autoConfirm = false)
    {
        $parameters = [
            'amount' => $amount,
            'currency' => $currency,
            'pbntag' => $pbnTag,
            'auto_confirm' => $autoConfirm ? 1 : 0
        ];

        return $this->apiCall(Commands::CREATE_TRANSFER, $parameters);
    }

    /**
     * Creates a transfer from your account to a specified merchant.
     *
     * @param float $amount The amount of the transaction (floating point to 8 decimals).
     * @param string $currency The cryptocurrency to withdraw.
     * @param string $merchant The merchant ID to send the coins to.
     * @param bool $autoConfirm If true, then the transfer will be performed without an email confirmation.
     *
     * @return \Sigismund\CoinPayments\ApiCall
     * @throws \Sigismund\CoinPayments\Exceptions\RequestException
     */
    public function createTransfer(float $amount, string $currency, string $merchant, $autoConfirm = false)
    {
        $parameters = [
            'amount' => $amount,
            'currency' => $currency,
            'merchant' => $merchant,
            'auto_confirm' => $autoConfirm ? 1 : 0
        ];

        return $this->apiCall(Commands::CREATE_TRANSFER, $parameters);
    }

    /**
     * Makes a query to API
     * Not recommended
     *
     * @param string $command
     * @param array $parameters
     *
     * @return \Sigismund\CoinPayments\ApiCall
     * @throws \Sigismund\CoinPayments\Exceptions\RequestException
     */
    public function queryAPI(string $command, array $parameters)
    {
        return $this->apiCall($command, $parameters);
    }

    /**
     * @return \Sigismund\CoinPayments\Credentials
     */
    public function getCredentials()
    {
        return $this->credentials;
    }

    /**
     * @return mixed
     */
    public function getIpnUrl()
    {
        return $this->ipnUrl;
    }

    /**
     * @param mixed $ipnUrl
     */
    public function setIpnUrl($ipnUrl): void
    {
        $this->ipnUrl = $ipnUrl;
    }

    /**
     * @param string $merchantID
     * @param string $publicKey
     * @param string $privateKey
     * @param string $ipnSecret
     */
    public function setCredentials($merchantID, $publicKey, $privateKey, $ipnSecret): void
    {
        $this->credentials = new Credentials($merchantID, $publicKey, $privateKey, $ipnSecret);
    }

    /**
     * @return mixed
     */
    public function getRequestAgent()
    {
        if (!$this->requestAgent) {
            $this->setRequestAgent(Curl::class);
        }

        return $this->requestAgent;
    }

    /**
     * @param mixed $requestAgent
     */
    public function setRequestAgent($requestAgent): void
    {
        $this->requestAgent = $requestAgent;
    }
}