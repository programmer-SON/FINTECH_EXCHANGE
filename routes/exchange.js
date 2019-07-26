var express = require("express");
var mysql = require('mysql');
var router = express.Router();
let cnt = 20;

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
    if(req.session.user === undefined || req.session.user.logined === false){
        res.writeHead(200, { "Content-Type": "text/html;characterset=utf8" });
        res.write('<script>');
        res.write('alert("please Logined");');
        res.write(' location.href = "http://localhost:3000/user/viewLogin";');
        res.write('</script>');
        res.end();
        return;
    }
    res.render('exchange')
});

router.post('/exchange', function(req, res){
    if(req.session.user === undefined || req.session.user.logined === false){
        res.writeHead(200, { "Content-Type": "text/html;characterset=utf8" });
        res.write('<script>');
        res.write('alert("please Logined");');
        res.write(' location.href = "http://localhost:3000/user/viewLogin";');
        res.write('</script>');
        res.end();
        return;
    }

    var myid = req.session.user.id;
    var code = req.body.currencyCode;
    var total = req.body.total;
    var endDate = req.body.endDate;
    var targetRate = req.body.targetRate;

    var sql = "  INSERT INTO fintech.e_rate (id, code, E_rate, E_money, E_date, E_check) " + 
              "  VALUES ( ?,?,?,?,?,?) ";
   
    connection.query(sql, [myid, code, targetRate, total, endDate, 0], function(error, result){
        if(error){
            console.error(error);
            throw error;
        }else{
            
            res.writeHead(200, { "Content-Type": "text/html;characterset=utf8" });
            res.write('<script>');
            res.write('alert("complete");');
            res.write(' location.href = "http://localhost:3000/exchange/viewExchange";');
            res.write('</script>');
            res.end();  
        }
    })
});

module.exports = router;