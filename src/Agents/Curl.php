<?php

namespace Sigismund\CoinPayments\Agents;

use Sigismund\CoinPayments\Exceptions\RequestException;

class Curl extends RequestAgent
{
    /**
     * @return mixed
     * @throws \Sigismund\CoinPayments\Exceptions\RequestException
     */
    public function query()
    {
        $curlHandler = curl_init(self::API_URL);
        curl_setopt($curlHandler, CURLOPT_FAILONERROR, true);
        curl_setopt($curlHandler, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curlHandler, CURLOPT_SSL_VERIFYPEER, 0);

        curl_setopt($curlHandler, CURLOPT_HTTPHEADER, array('HMAC: '. $this->getQuerySignature()));
        curl_setopt($curlHandler, CURLOPT_POSTFIELDS, $this->getQueryString());

        $this->response = curl_exec($curlHandler);
        curl_close($curlHandler);

        if ($this->response === false) {
            throw new RequestException('cURL error: '.curl_error($curlHandler));
        }

        return $this->response;
    }
}