var express = require("express");
var request = require('request');
var mysql = require('mysql');
var jwt = require('jsonwebtoken');
const session = require('express-session');

//var client = require('cheerio-httpcli');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'gotjr2828',
  database : 'fintech'
});

app = express();

var port = process.env.PORT || 3000;

connection.connect();

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(session({  // 2
  secret: 'keyboard cat',  // 암호화
  resave: false,
  saveUninitialized: true,
}));

let user = {      //회원 정보
    user_id: "kim",
    user_pwd: "1111"
  };
  
  app.get('/', (req, res) => {      // 1
    if(req.session.logined) {
      res.render('logout', { id: req.session.user_id });
    } else {
      res.render('login');
    }
  });
  
  
  app.post('/', (req, res, next) => {  // 3
    
    var sql = " SELECT * FROM fintech.user " +
              " WHERE email = ? AND password = ? ";

      connection.query(sql,[req.body.id, req.body.pwd], function (error, results, fields) {
        if(error){
        console.error(error);
        }
        else {
            console.log(results);
            if(req.body.id === results[0].email && req.body.pwd === results[0].password){
                req.session.logined = true;
                req.session.user_id = req.body.id;
                res.render('logout', { id: req.session });
            }else{
                res.send(`
                <h1>Who are you?</h1>
                <a href="/">Back </a>
              `);
            }
        }
    }); 
  
  });
  
  app.post('/logout', (req, res) => {      // 3
    req.session.destroy();
    //res.write('<script> alert("다음에 봐요") </script>');
    //res.end();
    res.redirect('/');
  });

  app.listen(port);

  console.log("Listening on port ", port);
