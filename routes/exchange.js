var express = require("express");
var mysql = require('mysql');
var router = express.Router();


var connection = mysql.createConnection({
    port : "3306",
    host     : 'localhost',
    user     : 'root',
    password : 'thdus3281',
    database : 'fintech'
  });

  connection.connect();

  router.use(express.static('public')); 
  
router.get('/viewExchange',function(req,res){
    res.render('exchange')
});

router.post('/exchange', function(req, res){
    var type = req.body.type;
    var rate = req.body.rate;
    var krw = req.body.krw;
    var startDate = req.body.startDate;
    var endDate = req.body.endDate;
    var targetMoney = req.body.targetMoney;
    var sql = "INSERT INTO fintech.tb_exchange VALUES(?,?,?,?,?,?);"

    connection.query(sql, [type, rate, krw, startDate, endDate, targetMoney], function(error, result){
        if(error)
        {
            console.error(error);
        }
        else
        {
            //res.join(1);
        }
    })
});

module.exports = router;