var express = require("express");
var request = require('request');
var mysql = require('mysql');
var jwt = require('jsonwebtoken');
const session = require('express-session');
var rate = require('./rateOther');
var APIRouter = require('./routes/API');
var qrRouter = require('./routes/qr');
var chartRouter = require('./routes/chart');
var exchangeRouter = require('./routes/exchange');
var userRouter = require('./routes/user');
var schedule = require('node-schedule'); 
//var client = require('cheerio-httpcli');

var connection = mysql.createConnection({
    port : "3306",
    host     : 'localhost',
    user     : 'root',
    password : 'thdus3281',
    database : 'fintech'
});

var user = {
    email : '',
    name : '',
    password:'',
    logined : false
}

app = express();

var port = process.env.PORT || 3000;

connection.connect();

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(session({  // 2
    secret: 'keyboard cat',  // 암호화
    resave: false,
    saveUninitialized: true,
}));

////////////////// ROUTER ///////////////////////////////

app.use('/user',userRouter);
app.use('/API',APIRouter);
app.use('/qr',qrRouter);
app.use('/chart',chartRouter);
app.use('/exchange',exchangeRouter);

////////////////////////////////////////////////////////

app.get('/',function(req,res){
    
    if(!req.session.user)  req.session.user = user;
    res.render('main', {session : req.session.user});        
})

var scheduler = schedule.scheduleJob('*/5 * * * * *', function(){
    rate.RateTable(function(data){
        var sp = Object.keys(data).split(' ');
        var code = sp[1];
        var currency = Object.values(data);
        var user_id = request.session.user.id;
        var sql = "SELECT * FROM fintech.e_rate " +
                  "WHERE E_rate = ? AND E_code = ? AND E_check = 0";
            // connection.query(sql, [,myid, code, targetRate, total, endDate, 0], function(error, result){
            //     if(error){
            //         console.error(error);
            //         throw error;
            //     }else{

            //         console.log("data input is done")
            //         res.json(1);
            //     }
            // })
    })
});

/////////////////////////////////////////////
app.get('/nowRate', function(req, res){
    rate.RateTable(function(data){
        res.json(data);
    })
});

app.get('/exchange2',function(req,res){
    res.render('exchang2');
});

app.get('/alarm',function(req,res){
    res.render('alarm');
})

app.listen(port);

console.log("Listening on port ", port);

// const authMiddleware = (req, res, next) => {
//     const token = req.headers['x-access-token'] || req.query.token;
//     console.error(token)
//     if(!token) {
//         return res.status(403).json({
//             success: false,
//             message: 'not logged in'
//         })
//     }

//     const p = new Promise(
//         (resolve, reject) => {
//             jwt.verify(token, tokenKey, (err, decoded) => {
//                 if(err) reject(err)
//                 resolve(decoded)
//             })
//         }
//     )

//     const onError = (error) => {
//         console.log(error);
//         res.status(403).json({
//             success: false,
//             message: error.message
//         })
//     }

//     p.then((decoded)=>{
//         req.decoded = decoded
//         next()
//     }).catch(onError)
// }

//module.exports = authMiddleware;