<?php

namespace Sigismund\CoinPayments\Agents;

use Sigismund\CoinPayments\Exceptions\RequestException;

abstract class RequestAgent
{
    const API_URL = 'https://www.coinpayments.net/api.php';

    /**
     * @var string
     */
    protected $querySignature;

    /**
     * @var string
     */
    protected $queryString;

    /**
     * Raw response received from API
     *
     * @var mixed
     */
    protected $rawResponse;

    /**
     * Trimmed/Decoded/Smth response
     * @var string|array|null
     */
    protected $response;

    /**
     * @return mixed
     * @throws \Sigismund\CoinPayments\Exceptions\RequestException
     */
    public function execute()
    {
        $this->query();
        return $this->handleResponse();
    }

    /**
     * @return mixed
     * @throws \Sigismund\CoinPayments\Exceptions\RequestException
     */
    protected function query()
    {
        if (1 == 1) {
            throw new RequestException('Set Agent');
        }

        return $this->response;
    }

    protected function handleResponse()
    {
        if (PHP_INT_SIZE < 8) {
            // We are on 32-bit PHP, so use the bigint as string option.
            // If you are using any API calls with Satoshis it is highly NOT recommended to use 32-bit PHP
            $this->response = json_decode($this->getRawResponse(), true, 512, JSON_BIGINT_AS_STRING);
        } else {
            $this->response = json_decode($this->getRawResponse(), true);
        }
        if ($this->response !== null && count($this->response)) {
            return $this->response;
        } else {
            throw new JsonException('Unable to parse JSON result. JSON error: '.json_last_error());
        }
    }

    /**
     * @return string
     */
    public function getQuerySignature(): string
    {
        return $this->querySignature;
    }

    /**
     * @param string $querySignature
     */
    public function setQuerySignature(string $querySignature): void
    {
        $this->querySignature = $querySignature;
    }

    /**
     * @return string
     */
    public function getQueryString(): string
    {
        return $this->queryString;
    }

    /**
     * @param string $queryString
     */
    public function setQueryString(string $queryString): void
    {
        $this->queryString = $queryString;
    }

    /**
     * @return mixed
     */
    public function getRawResponse()
    {
        return $this->rawResponse;
    }


    /**
     * @return mixed
     */
    public function getResponse()
    {
        return $this->response;
    }
}