var express = require("express");
var request = require('request');
var router = express.Router();
var mysql = require('mysql');


var connection = mysql.createConnection({
    port : "3306",
    host     : 'localhost',
    user     : 'root',
    password : 'thdus3281',
    database : 'fintech'
  });
  connection.connect();  