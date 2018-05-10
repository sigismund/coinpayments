<?php

namespace Sigismund\CoinPayments;

use PHPUnit\Framework\TestCase;
use Sigismund\CoinPayments\Exceptions\OrderException;
use Sigismund\CoinPayments\Exceptions\ValidationException;

class IpnValidationTest extends TestCase
{
    protected $ipnValidation;
    protected $credentials;

    protected function initCredentials()
    {
        $this->credentials = new Credentials("test", "test", "test", "test");
    }

    public function testCheckRequiredData()
    {
        $postData = [
            'ipn_id' => '4G34GQ44340I',
            'ipn_mode' => 'hmac',
            //'merchant' => 'FG453GH5H5H',
            'status' => 0,
            'status_text' => 'Successful payment'
        ];

        $this->initCredentials();
        $this->ipnValidation = new IpnValidation($postData, [12], $this->credentials);
        $this->expectException(ValidationException::class);

        $this->ipnValidation->checkRequiredData();
    }

    //public function testValidate(){}

    public function testCheckOrderSuccess()
    {
        $postData = [
            'ipn_id' => '4G34GQ44340I',
            'ipn_mode' => 'hmac',
            'merchant' => 'FG453GH5H5H',
            'status' => 0,
            'status_text' => 'Successful payment'
        ];

        $this->initCredentials();
        $this->ipnValidation = new IpnValidation($postData, [12], $this->credentials);
        $orderStatus = $this->ipnValidation->checkOrderSuccess();
        $this->assertEquals(false, $orderStatus);

        $postData['status'] = 100;
        $this->ipnValidation->setPostData($postData);
        $orderStatus = $this->ipnValidation->checkOrderSuccess();
        $this->assertEquals(true, $orderStatus);

        $postData['status'] = -1;
        $this->ipnValidation->setPostData($postData);
        $this->expectException(OrderException::class);
        $this->ipnValidation->checkOrderSuccess();
    }

}
