var express = require("express");
var request = require('request');
var router = express.Router();
var mysql = require('mysql');
var jwt = require('jsonwebtoken');

//var client = require('cheerio-httpcli');

var connection = mysql.createConnection({
  port : "3306",
  host     : 'localhost',
  user     : 'root',
  password : 'thdus3281',
  database : 'fintech'
});

app = express();

var port = process.env.PORT || 3000;

connection.connect();

router.get('/viewQR', function(req,res){
  var payData = {
    userId : '손준우',//req.body.userId,
    cost : '1000'//req.body.cost
  }
  res.render('qr', {pay : payData});
})

router.get("/withdraw/:userId/:cost", function(req,res){
  
  var name = req.params.userId;
  var cost = req.params.cost;
  console.log(name);
  console.log(cost);
  //var qs = "?fintech_use_num=199005196057726021204355&inquiry_type=A&from_date=20161001&to_date=20161001&sort_order=D&page_index=1&tran_dtime=20190712145111&befor_inquiry_trace_info=123&list_tran_seqno=0";
  var getTokenUrl = "https://testapi.open-platform.or.kr/v1.0/transfer/withdraw";
  var option = {
      method : "POST",
      url : getTokenUrl,
      headers : {
          "Authorization" : "Bearer b0d814a6-dfd8-4f99-8432-2e9ab9326357",
          "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"
      },
      json : {
          dps_print_content : "손준우", //name
          fintech_use_num : "199005196057726021204355",
          tran_amt : "1000",    //cost
          tran_dtime : "20190605010101"
      }
  }

  request(option, function(err, response, body){
      if(err) throw err;
      else {
          console.log(body);
          res.json(body);
      }
   });
})

module.exports = router;