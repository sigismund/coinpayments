<?php

namespace Sigismund\CoinPayments;


class Credentials
{
    /**
     * @var string
     */
    protected $merchantID;

    /**
     * @var string
     */
    protected $ipnSecret;

    /**
     * @var string
     */
    protected $privateKey;

    /**
     * @var string
     */
    protected $publicKey;


    /**
     * Credentials constructor.
     *
     * @param string $merchantID
     * @param string $publicKey
     * @param string $privateKey
     * @param string $ipnSecret
     */
    public function __construct($merchantID, $publicKey, $privateKey, $ipnSecret)
    {
        $this->setMerchantID($merchantID);
        $this->setPublicKey($publicKey);
        $this->setPrivateKey($privateKey);
        $this->setIpnSecret($ipnSecret);
    }

    /**
     * @return string
     */
    public function getMerchantID()
    {
        return $this->merchantID;
    }

    /**
     * @param string $merchantID
     */
    public function setMerchantID($merchantID): void
    {
        $this->merchantID = $merchantID;
    }

    /**
     * @return string
     */
    public function getIpnSecret()
    {
        return $this->ipnSecret;
    }

    /**
     * @param string $ipnSecret
     */
    public function setIpnSecret($ipnSecret): void
    {
        $this->ipnSecret = $ipnSecret;
    }

    /**
     * @return string
     */
    public function getPrivateKey()
    {
        return $this->privateKey;
    }

    /**
     * @param string $privateKey
     */
    public function setPrivateKey($privateKey): void
    {
        $this->privateKey = $privateKey;
    }

    /**
     * @return string
     */
    public function getPublicKey()
    {
        return $this->publicKey;
    }

    /**
     * @param string $publicKey
     */
    public function setPublicKey($publicKey): void
    {
        $this->publicKey = $publicKey;
    }
}