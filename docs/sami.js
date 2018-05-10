
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:Sigismund" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Sigismund.html">Sigismund</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Sigismund_CoinPayments" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Sigismund/CoinPayments.html">CoinPayments</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Sigismund_CoinPayments_Agents" class="opened">                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Sigismund/CoinPayments/Agents.html">Agents</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Sigismund_CoinPayments_Agents_Curl" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Sigismund/CoinPayments/Agents/Curl.html">Curl</a>                    </div>                </li>                            <li data-name="class:Sigismund_CoinPayments_Agents_PersistentCurl" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Sigismund/CoinPayments/Agents/PersistentCurl.html">PersistentCurl</a>                    </div>                </li>                            <li data-name="class:Sigismund_CoinPayments_Agents_RequestAgent" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Sigismund/CoinPayments/Agents/RequestAgent.html">RequestAgent</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Sigismund_CoinPayments_Exceptions" class="opened">                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Sigismund/CoinPayments/Exceptions.html">Exceptions</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Sigismund_CoinPayments_Exceptions_GeneralException" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Sigismund/CoinPayments/Exceptions/GeneralException.html">GeneralException</a>                    </div>                </li>                            <li data-name="class:Sigismund_CoinPayments_Exceptions_JsonException" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Sigismund/CoinPayments/Exceptions/JsonException.html">JsonException</a>                    </div>                </li>                            <li data-name="class:Sigismund_CoinPayments_Exceptions_OrderException" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Sigismund/CoinPayments/Exceptions/OrderException.html">OrderException</a>                    </div>                </li>                            <li data-name="class:Sigismund_CoinPayments_Exceptions_RequestException" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Sigismund/CoinPayments/Exceptions/RequestException.html">RequestException</a>                    </div>                </li>                            <li data-name="class:Sigismund_CoinPayments_Exceptions_ValidationException" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Sigismund/CoinPayments/Exceptions/ValidationException.html">ValidationException</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Sigismund_CoinPayments_ApiCall" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Sigismund/CoinPayments/ApiCall.html">ApiCall</a>                    </div>                </li>                            <li data-name="class:Sigismund_CoinPayments_CoinPayments" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Sigismund/CoinPayments/CoinPayments.html">CoinPayments</a>                    </div>                </li>                            <li data-name="class:Sigismund_CoinPayments_Commands" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Sigismund/CoinPayments/Commands.html">Commands</a>                    </div>                </li>                            <li data-name="class:Sigismund_CoinPayments_Credentials" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Sigismund/CoinPayments/Credentials.html">Credentials</a>                    </div>                </li>                            <li data-name="class:Sigismund_CoinPayments_IpnValidation" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Sigismund/CoinPayments/IpnValidation.html">IpnValidation</a>                    </div>                </li>                            <li data-name="class:Sigismund_CoinPayments_IpnValidationTest" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Sigismund/CoinPayments/IpnValidationTest.html">IpnValidationTest</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Sigismund.html", "name": "Sigismund", "doc": "Namespace Sigismund"},{"type": "Namespace", "link": "Sigismund/CoinPayments.html", "name": "Sigismund\\CoinPayments", "doc": "Namespace Sigismund\\CoinPayments"},{"type": "Namespace", "link": "Sigismund/CoinPayments/Agents.html", "name": "Sigismund\\CoinPayments\\Agents", "doc": "Namespace Sigismund\\CoinPayments\\Agents"},{"type": "Namespace", "link": "Sigismund/CoinPayments/Exceptions.html", "name": "Sigismund\\CoinPayments\\Exceptions", "doc": "Namespace Sigismund\\CoinPayments\\Exceptions"},
            
            {"type": "Class", "fromName": "Sigismund\\CoinPayments\\Agents", "fromLink": "Sigismund/CoinPayments/Agents.html", "link": "Sigismund/CoinPayments/Agents/Curl.html", "name": "Sigismund\\CoinPayments\\Agents\\Curl", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Sigismund\\CoinPayments\\Agents\\Curl", "fromLink": "Sigismund/CoinPayments/Agents/Curl.html", "link": "Sigismund/CoinPayments/Agents/Curl.html#method_query", "name": "Sigismund\\CoinPayments\\Agents\\Curl::query", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Sigismund\\CoinPayments\\Agents", "fromLink": "Sigismund/CoinPayments/Agents.html", "link": "Sigismund/CoinPayments/Agents/PersistentCurl.html", "name": "Sigismund\\CoinPayments\\Agents\\PersistentCurl", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Sigismund\\CoinPayments\\Agents\\PersistentCurl", "fromLink": "Sigismund/CoinPayments/Agents/PersistentCurl.html", "link": "Sigismund/CoinPayments/Agents/PersistentCurl.html#method_query", "name": "Sigismund\\CoinPayments\\Agents\\PersistentCurl::query", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Sigismund\\CoinPayments\\Agents", "fromLink": "Sigismund/CoinPayments/Agents.html", "link": "Sigismund/CoinPayments/Agents/RequestAgent.html", "name": "Sigismund\\CoinPayments\\Agents\\RequestAgent", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Sigismund\\CoinPayments\\Agents\\RequestAgent", "fromLink": "Sigismund/CoinPayments/Agents/RequestAgent.html", "link": "Sigismund/CoinPayments/Agents/RequestAgent.html#method_execute", "name": "Sigismund\\CoinPayments\\Agents\\RequestAgent::execute", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\Agents\\RequestAgent", "fromLink": "Sigismund/CoinPayments/Agents/RequestAgent.html", "link": "Sigismund/CoinPayments/Agents/RequestAgent.html#method_query", "name": "Sigismund\\CoinPayments\\Agents\\RequestAgent::query", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\Agents\\RequestAgent", "fromLink": "Sigismund/CoinPayments/Agents/RequestAgent.html", "link": "Sigismund/CoinPayments/Agents/RequestAgent.html#method_handleResponse", "name": "Sigismund\\CoinPayments\\Agents\\RequestAgent::handleResponse", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\Agents\\RequestAgent", "fromLink": "Sigismund/CoinPayments/Agents/RequestAgent.html", "link": "Sigismund/CoinPayments/Agents/RequestAgent.html#method_getQuerySignature", "name": "Sigismund\\CoinPayments\\Agents\\RequestAgent::getQuerySignature", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\Agents\\RequestAgent", "fromLink": "Sigismund/CoinPayments/Agents/RequestAgent.html", "link": "Sigismund/CoinPayments/Agents/RequestAgent.html#method_setQuerySignature", "name": "Sigismund\\CoinPayments\\Agents\\RequestAgent::setQuerySignature", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\Agents\\RequestAgent", "fromLink": "Sigismund/CoinPayments/Agents/RequestAgent.html", "link": "Sigismund/CoinPayments/Agents/RequestAgent.html#method_getQueryString", "name": "Sigismund\\CoinPayments\\Agents\\RequestAgent::getQueryString", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\Agents\\RequestAgent", "fromLink": "Sigismund/CoinPayments/Agents/RequestAgent.html", "link": "Sigismund/CoinPayments/Agents/RequestAgent.html#method_setQueryString", "name": "Sigismund\\CoinPayments\\Agents\\RequestAgent::setQueryString", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\Agents\\RequestAgent", "fromLink": "Sigismund/CoinPayments/Agents/RequestAgent.html", "link": "Sigismund/CoinPayments/Agents/RequestAgent.html#method_getRawResponse", "name": "Sigismund\\CoinPayments\\Agents\\RequestAgent::getRawResponse", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\Agents\\RequestAgent", "fromLink": "Sigismund/CoinPayments/Agents/RequestAgent.html", "link": "Sigismund/CoinPayments/Agents/RequestAgent.html#method_getResponse", "name": "Sigismund\\CoinPayments\\Agents\\RequestAgent::getResponse", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Sigismund\\CoinPayments", "fromLink": "Sigismund/CoinPayments.html", "link": "Sigismund/CoinPayments/ApiCall.html", "name": "Sigismund\\CoinPayments\\ApiCall", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Sigismund\\CoinPayments\\ApiCall", "fromLink": "Sigismund/CoinPayments/ApiCall.html", "link": "Sigismund/CoinPayments/ApiCall.html#method___construct", "name": "Sigismund\\CoinPayments\\ApiCall::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\ApiCall", "fromLink": "Sigismund/CoinPayments/ApiCall.html", "link": "Sigismund/CoinPayments/ApiCall.html#method_execute", "name": "Sigismund\\CoinPayments\\ApiCall::execute", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\ApiCall", "fromLink": "Sigismund/CoinPayments/ApiCall.html", "link": "Sigismund/CoinPayments/ApiCall.html#method_getCommand", "name": "Sigismund\\CoinPayments\\ApiCall::getCommand", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\ApiCall", "fromLink": "Sigismund/CoinPayments/ApiCall.html", "link": "Sigismund/CoinPayments/ApiCall.html#method_getParameters", "name": "Sigismund\\CoinPayments\\ApiCall::getParameters", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\ApiCall", "fromLink": "Sigismund/CoinPayments/ApiCall.html", "link": "Sigismund/CoinPayments/ApiCall.html#method_getResponse", "name": "Sigismund\\CoinPayments\\ApiCall::getResponse", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\ApiCall", "fromLink": "Sigismund/CoinPayments/ApiCall.html", "link": "Sigismund/CoinPayments/ApiCall.html#method_getCredentials", "name": "Sigismund\\CoinPayments\\ApiCall::getCredentials", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\ApiCall", "fromLink": "Sigismund/CoinPayments/ApiCall.html", "link": "Sigismund/CoinPayments/ApiCall.html#method_getQueryString", "name": "Sigismund\\CoinPayments\\ApiCall::getQueryString", "doc": "&quot;Set-up post request and generate query string&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\ApiCall", "fromLink": "Sigismund/CoinPayments/ApiCall.html", "link": "Sigismund/CoinPayments/ApiCall.html#method_generateQuerySignature", "name": "Sigismund\\CoinPayments\\ApiCall::generateQuerySignature", "doc": "&quot;Calculate the HMAC signature off the POST data&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\ApiCall", "fromLink": "Sigismund/CoinPayments/ApiCall.html", "link": "Sigismund/CoinPayments/ApiCall.html#method_getAgent", "name": "Sigismund\\CoinPayments\\ApiCall::getAgent", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\ApiCall", "fromLink": "Sigismund/CoinPayments/ApiCall.html", "link": "Sigismund/CoinPayments/ApiCall.html#method_setAgent", "name": "Sigismund\\CoinPayments\\ApiCall::setAgent", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Sigismund\\CoinPayments", "fromLink": "Sigismund/CoinPayments.html", "link": "Sigismund/CoinPayments/CoinPayments.html", "name": "Sigismund\\CoinPayments\\CoinPayments", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Sigismund\\CoinPayments\\CoinPayments", "fromLink": "Sigismund/CoinPayments/CoinPayments.html", "link": "Sigismund/CoinPayments/CoinPayments.html#method___construct", "name": "Sigismund\\CoinPayments\\CoinPayments::__construct", "doc": "&quot;CoinPayments constructor.&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\CoinPayments", "fromLink": "Sigismund/CoinPayments/CoinPayments.html", "link": "Sigismund/CoinPayments/CoinPayments.html#method_apiCall", "name": "Sigismund\\CoinPayments\\CoinPayments::apiCall", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\CoinPayments", "fromLink": "Sigismund/CoinPayments/CoinPayments.html", "link": "Sigismund/CoinPayments/CoinPayments.html#method_getRates", "name": "Sigismund\\CoinPayments\\CoinPayments::getRates", "doc": "&quot;Get current exchange rates&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\CoinPayments", "fromLink": "Sigismund/CoinPayments/CoinPayments.html", "link": "Sigismund/CoinPayments/CoinPayments.html#method_getBasicInfo", "name": "Sigismund\\CoinPayments\\CoinPayments::getBasicInfo", "doc": "&quot;Get basic account info&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\CoinPayments", "fromLink": "Sigismund/CoinPayments/CoinPayments.html", "link": "Sigismund/CoinPayments/CoinPayments.html#method_getDepositAddress", "name": "Sigismund\\CoinPayments\\CoinPayments::getDepositAddress", "doc": "&quot;Addresses returned by this API are for personal use deposits and reuse the same personal address(es)\nin your wallet. There is no fee for these deposits but they don&#039;t send IPNs.&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\CoinPayments", "fromLink": "Sigismund/CoinPayments/CoinPayments.html", "link": "Sigismund/CoinPayments/CoinPayments.html#method_getBalances", "name": "Sigismund\\CoinPayments\\CoinPayments::getBalances", "doc": "&quot;Gets your current coin balances (only includes coins with a balance unless all = true).&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\CoinPayments", "fromLink": "Sigismund/CoinPayments/CoinPayments.html", "link": "Sigismund/CoinPayments/CoinPayments.html#method_createTransaction", "name": "Sigismund\\CoinPayments\\CoinPayments::createTransaction", "doc": "&quot;Create a transaction&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\CoinPayments", "fromLink": "Sigismund/CoinPayments/CoinPayments.html", "link": "Sigismund/CoinPayments/CoinPayments.html#method_getTransactionInfo", "name": "Sigismund\\CoinPayments\\CoinPayments::getTransactionInfo", "doc": "&quot;Get transaction information via transaction ID&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\CoinPayments", "fromLink": "Sigismund/CoinPayments/CoinPayments.html", "link": "Sigismund/CoinPayments/CoinPayments.html#method_getTransactionsList", "name": "Sigismund\\CoinPayments\\CoinPayments::getTransactionsList", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\CoinPayments", "fromLink": "Sigismund/CoinPayments/CoinPayments.html", "link": "Sigismund/CoinPayments/CoinPayments.html#method_getCallbackAddress", "name": "Sigismund\\CoinPayments\\CoinPayments::getCallbackAddress", "doc": "&quot;Creates an address for receiving payments into your CoinPayments Wallet.&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\CoinPayments", "fromLink": "Sigismund/CoinPayments/CoinPayments.html", "link": "Sigismund/CoinPayments/CoinPayments.html#method_createWithdrawal", "name": "Sigismund\\CoinPayments\\CoinPayments::createWithdrawal", "doc": "&quot;Creates a withdrawal from your account to a specified address.&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\CoinPayments", "fromLink": "Sigismund/CoinPayments/CoinPayments.html", "link": "Sigismund/CoinPayments/CoinPayments.html#method_sendToPayByName", "name": "Sigismund\\CoinPayments\\CoinPayments::sendToPayByName", "doc": "&quot;Creates a transfer from your account to a specified $PayByName tag.&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\CoinPayments", "fromLink": "Sigismund/CoinPayments/CoinPayments.html", "link": "Sigismund/CoinPayments/CoinPayments.html#method_createTransfer", "name": "Sigismund\\CoinPayments\\CoinPayments::createTransfer", "doc": "&quot;Creates a transfer from your account to a specified merchant.&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\CoinPayments", "fromLink": "Sigismund/CoinPayments/CoinPayments.html", "link": "Sigismund/CoinPayments/CoinPayments.html#method_queryAPI", "name": "Sigismund\\CoinPayments\\CoinPayments::queryAPI", "doc": "&quot;Makes a query to API\nNot recommended&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\CoinPayments", "fromLink": "Sigismund/CoinPayments/CoinPayments.html", "link": "Sigismund/CoinPayments/CoinPayments.html#method_getCredentials", "name": "Sigismund\\CoinPayments\\CoinPayments::getCredentials", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\CoinPayments", "fromLink": "Sigismund/CoinPayments/CoinPayments.html", "link": "Sigismund/CoinPayments/CoinPayments.html#method_getIpnUrl", "name": "Sigismund\\CoinPayments\\CoinPayments::getIpnUrl", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\CoinPayments", "fromLink": "Sigismund/CoinPayments/CoinPayments.html", "link": "Sigismund/CoinPayments/CoinPayments.html#method_setIpnUrl", "name": "Sigismund\\CoinPayments\\CoinPayments::setIpnUrl", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\CoinPayments", "fromLink": "Sigismund/CoinPayments/CoinPayments.html", "link": "Sigismund/CoinPayments/CoinPayments.html#method_setCredentials", "name": "Sigismund\\CoinPayments\\CoinPayments::setCredentials", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\CoinPayments", "fromLink": "Sigismund/CoinPayments/CoinPayments.html", "link": "Sigismund/CoinPayments/CoinPayments.html#method_getRequestAgent", "name": "Sigismund\\CoinPayments\\CoinPayments::getRequestAgent", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\CoinPayments", "fromLink": "Sigismund/CoinPayments/CoinPayments.html", "link": "Sigismund/CoinPayments/CoinPayments.html#method_setRequestAgent", "name": "Sigismund\\CoinPayments\\CoinPayments::setRequestAgent", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Sigismund\\CoinPayments", "fromLink": "Sigismund/CoinPayments.html", "link": "Sigismund/CoinPayments/Commands.html", "name": "Sigismund\\CoinPayments\\Commands", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Sigismund\\CoinPayments", "fromLink": "Sigismund/CoinPayments.html", "link": "Sigismund/CoinPayments/Credentials.html", "name": "Sigismund\\CoinPayments\\Credentials", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Sigismund\\CoinPayments\\Credentials", "fromLink": "Sigismund/CoinPayments/Credentials.html", "link": "Sigismund/CoinPayments/Credentials.html#method___construct", "name": "Sigismund\\CoinPayments\\Credentials::__construct", "doc": "&quot;Credentials constructor.&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\Credentials", "fromLink": "Sigismund/CoinPayments/Credentials.html", "link": "Sigismund/CoinPayments/Credentials.html#method_getMerchantID", "name": "Sigismund\\CoinPayments\\Credentials::getMerchantID", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\Credentials", "fromLink": "Sigismund/CoinPayments/Credentials.html", "link": "Sigismund/CoinPayments/Credentials.html#method_setMerchantID", "name": "Sigismund\\CoinPayments\\Credentials::setMerchantID", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\Credentials", "fromLink": "Sigismund/CoinPayments/Credentials.html", "link": "Sigismund/CoinPayments/Credentials.html#method_getIpnSecret", "name": "Sigismund\\CoinPayments\\Credentials::getIpnSecret", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\Credentials", "fromLink": "Sigismund/CoinPayments/Credentials.html", "link": "Sigismund/CoinPayments/Credentials.html#method_setIpnSecret", "name": "Sigismund\\CoinPayments\\Credentials::setIpnSecret", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\Credentials", "fromLink": "Sigismund/CoinPayments/Credentials.html", "link": "Sigismund/CoinPayments/Credentials.html#method_getPrivateKey", "name": "Sigismund\\CoinPayments\\Credentials::getPrivateKey", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\Credentials", "fromLink": "Sigismund/CoinPayments/Credentials.html", "link": "Sigismund/CoinPayments/Credentials.html#method_setPrivateKey", "name": "Sigismund\\CoinPayments\\Credentials::setPrivateKey", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\Credentials", "fromLink": "Sigismund/CoinPayments/Credentials.html", "link": "Sigismund/CoinPayments/Credentials.html#method_getPublicKey", "name": "Sigismund\\CoinPayments\\Credentials::getPublicKey", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\Credentials", "fromLink": "Sigismund/CoinPayments/Credentials.html", "link": "Sigismund/CoinPayments/Credentials.html#method_setPublicKey", "name": "Sigismund\\CoinPayments\\Credentials::setPublicKey", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Sigismund\\CoinPayments\\Exceptions", "fromLink": "Sigismund/CoinPayments/Exceptions.html", "link": "Sigismund/CoinPayments/Exceptions/GeneralException.html", "name": "Sigismund\\CoinPayments\\Exceptions\\GeneralException", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Sigismund\\CoinPayments\\Exceptions", "fromLink": "Sigismund/CoinPayments/Exceptions.html", "link": "Sigismund/CoinPayments/Exceptions/JsonException.html", "name": "Sigismund\\CoinPayments\\Exceptions\\JsonException", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Sigismund\\CoinPayments\\Exceptions", "fromLink": "Sigismund/CoinPayments/Exceptions.html", "link": "Sigismund/CoinPayments/Exceptions/OrderException.html", "name": "Sigismund\\CoinPayments\\Exceptions\\OrderException", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Sigismund\\CoinPayments\\Exceptions", "fromLink": "Sigismund/CoinPayments/Exceptions.html", "link": "Sigismund/CoinPayments/Exceptions/RequestException.html", "name": "Sigismund\\CoinPayments\\Exceptions\\RequestException", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Sigismund\\CoinPayments\\Exceptions", "fromLink": "Sigismund/CoinPayments/Exceptions.html", "link": "Sigismund/CoinPayments/Exceptions/ValidationException.html", "name": "Sigismund\\CoinPayments\\Exceptions\\ValidationException", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Sigismund\\CoinPayments", "fromLink": "Sigismund/CoinPayments.html", "link": "Sigismund/CoinPayments/IpnValidation.html", "name": "Sigismund\\CoinPayments\\IpnValidation", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Sigismund\\CoinPayments\\IpnValidation", "fromLink": "Sigismund/CoinPayments/IpnValidation.html", "link": "Sigismund/CoinPayments/IpnValidation.html#method___construct", "name": "Sigismund\\CoinPayments\\IpnValidation::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\IpnValidation", "fromLink": "Sigismund/CoinPayments/IpnValidation.html", "link": "Sigismund/CoinPayments/IpnValidation.html#method_checkRequiredData", "name": "Sigismund\\CoinPayments\\IpnValidation::checkRequiredData", "doc": "&quot;Checks $_POST data for required statuses\nhttps:\/\/www.coinpayments.net\/merchant-tools-ipn&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\IpnValidation", "fromLink": "Sigismund/CoinPayments/IpnValidation.html", "link": "Sigismund/CoinPayments/IpnValidation.html#method_checkOrderSuccess", "name": "Sigismund\\CoinPayments\\IpnValidation::checkOrderSuccess", "doc": "&quot;If $order_status is &gt;100 or is 2, return true&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\IpnValidation", "fromLink": "Sigismund/CoinPayments/IpnValidation.html", "link": "Sigismund/CoinPayments/IpnValidation.html#method_validate", "name": "Sigismund\\CoinPayments\\IpnValidation::validate", "doc": "&quot;Validate the IPN request and payment.&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\IpnValidation", "fromLink": "Sigismund/CoinPayments/IpnValidation.html", "link": "Sigismund/CoinPayments/IpnValidation.html#method_getPostData", "name": "Sigismund\\CoinPayments\\IpnValidation::getPostData", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\IpnValidation", "fromLink": "Sigismund/CoinPayments/IpnValidation.html", "link": "Sigismund/CoinPayments/IpnValidation.html#method_getServerData", "name": "Sigismund\\CoinPayments\\IpnValidation::getServerData", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\IpnValidation", "fromLink": "Sigismund/CoinPayments/IpnValidation.html", "link": "Sigismund/CoinPayments/IpnValidation.html#method_setPostData", "name": "Sigismund\\CoinPayments\\IpnValidation::setPostData", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\IpnValidation", "fromLink": "Sigismund/CoinPayments/IpnValidation.html", "link": "Sigismund/CoinPayments/IpnValidation.html#method_setServerData", "name": "Sigismund\\CoinPayments\\IpnValidation::setServerData", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\IpnValidation", "fromLink": "Sigismund/CoinPayments/IpnValidation.html", "link": "Sigismund/CoinPayments/IpnValidation.html#method_setCredentials", "name": "Sigismund\\CoinPayments\\IpnValidation::setCredentials", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Sigismund\\CoinPayments", "fromLink": "Sigismund/CoinPayments.html", "link": "Sigismund/CoinPayments/IpnValidationTest.html", "name": "Sigismund\\CoinPayments\\IpnValidationTest", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Sigismund\\CoinPayments\\IpnValidationTest", "fromLink": "Sigismund/CoinPayments/IpnValidationTest.html", "link": "Sigismund/CoinPayments/IpnValidationTest.html#method_initCredentials", "name": "Sigismund\\CoinPayments\\IpnValidationTest::initCredentials", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\IpnValidationTest", "fromLink": "Sigismund/CoinPayments/IpnValidationTest.html", "link": "Sigismund/CoinPayments/IpnValidationTest.html#method_testCheckRequiredData", "name": "Sigismund\\CoinPayments\\IpnValidationTest::testCheckRequiredData", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Sigismund\\CoinPayments\\IpnValidationTest", "fromLink": "Sigismund/CoinPayments/IpnValidationTest.html", "link": "Sigismund/CoinPayments/IpnValidationTest.html#method_testCheckOrderSuccess", "name": "Sigismund\\CoinPayments\\IpnValidationTest::testCheckOrderSuccess", "doc": "&quot;&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


