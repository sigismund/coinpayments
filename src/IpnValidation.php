<?php

namespace Sigismund\CoinPayments;

use Sigismund\CoinPayments\Exceptions\OrderException;
use Sigismund\CoinPayments\Exceptions\ValidationException;

class IpnValidation
{
    protected $postData;
    protected $serverData;
    protected $credentials;

    public function __construct(array $postData, array $serverData, Credentials $credentials)
    {
        $this->postData = $postData;
        $this->serverData = $serverData;
        $this->credentials = $credentials;
    }

    /**
     * Checks $_POST data for required statuses
     * https://www.coinpayments.net/merchant-tools-ipn
     *
     * @throws \Sigismund\CoinPayments\Exceptions\ValidationException
     */
    public function checkRequiredData()
    {
        $requiredKeys = ['ipn_mode', 'merchant', 'status', 'status_text', 'ipn_id'];

        foreach ($requiredKeys as $requiredKey) {
            if ($this->getPostData($requiredKey) === null) {
                throw new ValidationException("Insufficient POST data provided.");
            }
        }
    }

    /**
     * If $order_status is >100 or is 2, return true
     *
     * @return bool
     * @throws \Sigismund\CoinPayments\Exceptions\OrderException
     */
    public function checkOrderSuccess()
    {
        $status = $this->getPostData('status');
        if ($status < 0) {
            throw new OrderException("{$status}: {$this->getPostData('status_text')}");
        } elseif ($status >= 0 && $status < 100 && $status != 2) {
            return false;
        }
        return true;
    }

    /**
     * Validate the IPN request and payment.
     *
     * @return bool
     * @throws \Exception
     */
    public function validate()
    {
        $this->checkRequiredData();

        if ($this->getPostData('ipn_mode') == 'httpauth') {
            if ($this->getServerData('PHP_AUTH_USER') !== $this->credentials->getMerchantID()) {
                throw new ValidationException("Invalid merchant ID provided.");
            }

            if ($this->getServerData('PHP_AUTH_PW') !== $this->credentials->getIpnSecret()) {
                throw new ValidationException("Invalid IPN secret provided.");
            }
        } elseif ($this->getPostData('ipn_mode') == 'hmac') {
            $hmacHash = hash_hmac("sha512", file_get_contents('php://input'), $this->credentials->getIpnSecret());

            if ($hmacHash !== $this->getServerData('HTTP_HMAC')) {
                throw new ValidationException("Invalid HMAC provided.");
            }
            if ($this->getPostData('merchant') !== $this->credentials->getMerchantID()) {
                throw new ValidationException("Invalid merchant ID provided.");
            }
        } else {
            throw new ValidationException("Invalid IPN mode provided.");
        }
        return $this->checkOrderSuccess();
    }

    /**
     * @param null $key
     *
     * @return array|mixed|null
     */
    public function getPostData($key = null)
    {
        if ($key) {
            return isset($this->postData[$key]) ? $this->postData[$key] : null;
        }
        return $this->postData;
    }

    /**
     * @param null $key
     *
     * @return array|mixed|null
     */
    public function getServerData($key = null)
    {
        if ($key) {
            return isset($this->serverData[$key]) ? $this->serverData[$key] : null;
        }
        return $this->serverData;
    }

    /**
     * @param array $postData
     */
    public function setPostData(array $postData): void
    {
        $this->postData = $postData;
    }

    /**
     * @param array $serverData
     */
    public function setServerData(array $serverData): void
    {
        $this->serverData = $serverData;
    }

    /**
     * @param \Sigismund\CoinPayments\Credentials $credentials
     */
    public function setCredentials(\Sigismund\CoinPayments\Credentials $credentials): void
    {
        $this->credentials = $credentials;
    }
}