var express = require("express");
var mysql = require('mysql');
var router = express.Router();

//var client = require('cheerio-httpcli');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'gotjr2828',
  database : 'fintech'
});


connection.connect();

router.get('/viewChart',function(req,res){
    res.render('chart');
});

router.post('/mychart',function(req,res){
    var sql = "SELECT * FROM fintech.dayrate WHERE ratecode = ? ORDER BY date";
    var code = req.body.code;
    connection.query(sql,[code], function (error, results, fields) {
        if(error){
            console.error(error);
        }
        else {
            res.json(results);           
        }
    });
});

module.exports = router;