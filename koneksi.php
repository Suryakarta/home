<?php
	error_reporting(E_ALL ^ (E_NOTICE | E_WARNING));
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Credentials: true');
	//header('Content-Type: text/plan; charset=utf-8');
	header('Access-Control-Allow-Headers: X-Requested-With, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding,');
	header('Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE');
	clearstatcache();
	class server{
		private $host;
		private $database;
		private $username;
		private $password;
		public function getMysql(){
			$host = $_SERVER['HTTP_HOST'];
			($host=='localhost') ? $this->local() : $this->remote() ;
			return $this->setMysql();
		}
		private function local(){
			$this->host = 'localhost';
			$this->database = 'waring';
			$this->username = 'root';
			$this->password = '';
		}
		private function remote(){
			$this->host = 'localhost';
			$this->database = 'u8361745_chat';
			$this->username = 'u8361745_vmus';
			$this->password = 'trahpandu';
		}
		private function setMysql(){
			return mysqli_connect($this->host,$this->username,$this->password,$this->database);
		}
	}
?>