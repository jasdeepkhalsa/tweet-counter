<?php
/**
 * @requires PHP >= 5.3.0, PHP cURL Extension
 */
require_once("./vendor/mynetx/codebird-php/src/codebird.php");
$config = json_decode(file_get_contents('./config.json'));
\Codebird\Codebird::setConsumerKey($config->consumer_key, $config->consumer_secret);
$cb = \Codebird\Codebird::getInstance();
$cb->setToken($config->access_token, $config->access_token_secret);
$cb->setReturnFormat(CODEBIRD_RETURNFORMAT_JSON);
$data = $cb->search_tweets($config->search_query, true);
echo $data;