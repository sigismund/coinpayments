<?php

namespace Sigismund\CoinPayments;

class Commands
{
    const CREATE_TRANSACTION = 'create_transaction';
    const CREATE_TRANSFER = 'create_transfer';
    const CREATE_WITHDRAWAL = 'create_withdrawal';
    const GET_TX_INFO = 'get_tx_info';
    const BALANCES = 'balances';
    const RATES = 'rates';
    const GET_CALLBACK_ADDRESS = 'get_callback_address';
    const BASIC_INFO = 'get_basic_info';
    const GET_DEPOSIT_ADDRESS = 'get_deposit_address';
    const GET_TX_IDS = 'get_tx_ids';
}