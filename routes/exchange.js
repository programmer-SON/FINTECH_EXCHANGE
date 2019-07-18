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
    var email = req.session.user.email;
    var myid = req.session.user.id;
    var code = req.body.code;
    var total = req.body.total;
    var endDate = req.body.endDate;
    var targetRate = req.body.targetRate;
//    var sql = "INSERT INTO e_rate (id, code, e_rate, e_money, e_date, check) VALUES (?,?,?,?,?,?)"
    var sql = "INSERT INTO fintech.e_rate (E_id, id, code, E_rate, E_money, E_date, E_check) VALUES (?,?,?,?,?,?,?)";

    //connection.query(sql, [112233, code, targetRate, total, endDate, 0], function(error, result){
        connection.query(sql, [11234,myid, code, targetRate, total, endDate, 0], function(error, result){
        if(error)
        {
            console.error(error);
            throw error;
        }
        else
        {
            console.log("data input is done")
            res.json(1);
        }
    })
});

module.exports = router;