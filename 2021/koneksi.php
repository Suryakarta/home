<?php
	error_reporting(E_ALL ^ (E_NOTICE | E_WARNING));
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Credentials: true');
	//header('Content-Type: text/plan; charset=utf-8');
	header('Access-Control-Allow-Headers: *');
	header('Access-Control-Allow-Methods: *');
	clearstatcache();
?>