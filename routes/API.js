var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/callback', function(req,res){
    var authcode = req.query.code;
    console.log(authcode);
    var getTokenUrl = "https://testapi.open-platform.or.kr/oauth/2.0/token";
    var option = {
        method : "POST",
        url : getTokenUrl,
        headers : {
            
        },
        form : {
            code : authcode,
            client_id : "l7xx402b541b6a7140a2bcb64479edbc5020",
            client_secret : "40f7cf407f27429cb90515523e2b39b7",
            redirect_uri : "http://localhost:3000/callback",
            grant_type : "authorization_code"
        }
    }

    request(option, function(err, response, body){
        if(err) throw err;
        else {
            console.log(body);
            var accessRequestResult = JSON.parse(body);
            console.log(accessRequestResult);
            res.render('resultChild', {data : accessRequestResult})
        }
     });
});

router.post('/login', function(req, res){
    var userEmail = req.body.email;
    var userPassword = req.body.password;
    var sql = "SELECT * FROM user WHERE email = ?";
    connection.query(sql, [userEmail], function(err, results){
        console.log(results);
        if(results[0].password == userPassword){
            jwt.sign(
                {
                    userName : results[0].name,
                    userId : results[0].id
                },
                "test1234",
                {
                    expiresIn : '1d',
                    issuer : 'fintech.admin',
                    subject : 'user.login.info'
                },
                function(err, token){
                    console.log('로그인 성공', token)
                    res.json(token)
                }
            )
        }
    })
});

router.post('/join',function(req,res){
    var name = req.body.nameUser;
    var password = req.body.password;
    var email = req.body.email;
    var accessToken = req.body.accessToken;
    var refreshToken = req.body.refreshToken;
    var useseqnum = req.body.useseqnum;
    var sql = "INSERT INTO fintech.user "+
    "(name, email, password, accessToken, refreshToken, finusernum)"+
    " VALUES (?,?,?,?,?,?);"
    connection.query(sql,[name, email, password, accessToken, refreshToken, useseqnum], function (error, results, fields) {
        if(error){
            console.error(error);
        }
        else {
            res.json(1);
        }
    });
});

router.get("/account", function(req,res){
    var qs = "?user_seq_no=1100035228";
    var getTokenUrl = "https://testapi.open-platform.or.kr/user/me" + qs;
    var option = {
        method : "GET",
        url : getTokenUrl,
        headers : {
            Authorization : "Bearer b0d814a6-dfd8-4f99-8432-2e9ab9326357"
        }
    }

    request(option, function(err, response, body){
        if(err) throw err;
        else {
            console.log(body);
            console.log('\n------------------------------------');
            var accessRequestResult = JSON.parse(body);
            console.log(accessRequestResult);
            res.render('resultChild', {data : accessRequestResult});
        }
     });
});

router.get("/balance", function(req,res){
    var qs = "?fintech_use_num=199005196057726021204355&tran_dtime=20190712145021";
    var getTokenUrl = "https://testapi.open-platform.or.kr/v1.0/account/balance" + qs;
    var option = {
        method : "GET",
        url : getTokenUrl,
        headers : {
            Authorization : "Bearer b0d814a6-dfd8-4f99-8432-2e9ab9326357"
        }
    }
    request(option, function(err, response, body){
        if(err) throw err;
        else {
            console.log(body);
            var accessRequestResult = JSON.parse(body);
            console.log(accessRequestResult);
            res.render('resultChild', {data : accessRequestResult});
        }
     });
});

router.get("/transaction", function(req,res){

    var qs = "?fintech_use_num=199005196057726021204355&inquiry_type=A&from_date=20161001&to_date=20161001&sort_order=D&page_index=1&tran_dtime=20190712145111&befor_inquiry_trace_info=123&list_tran_seqno=0";
    var getTokenUrl = "https://testapi.open-platform.or.kr/v1.0/account/transaction_list" + qs;
    var option = {
        method : "GET",
        url : getTokenUrl,
        headers : {
            Authorization : "Bearer b0d814a6-dfd8-4f99-8432-2e9ab9326357"
        }
    }

    request(option, function(err, response, body){
        if(err) throw err;
        else {
            console.log(body);
            var accessRequestResult = JSON.parse(body);
            console.log(accessRequestResult);
            res.render('resultChild', {data : accessRequestResult});
        }
     });
});

router.get("/withdraw", function(req,res){
   
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
            dps_print_content : "손준우",
            fintech_use_num : "199005196057726021204355",
            tran_amt : "1000",
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
});

router.get("/deposit", function(req,res){
   
    //var qs = "?fintech_use_num=199005196057726021204355&inquiry_type=A&from_date=20161001&to_date=20161001&sort_order=D&page_index=1&tran_dtime=20190712145111&befor_inquiry_trace_info=123&list_tran_seqno=0";
    var getTokenUrl = "https://testapi.open-platform.or.kr/v1.0/transfer/deposit";
    var option = {
        method : "POST",
        url : getTokenUrl,
        headers : {
            "Authorization" : "Bearer 56bd41b5-b431-407f-849a-1b6ecee14560",
            "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"
        },
        json : {            
            wd_pass_phrase : "NONE",
            wd_print_content : "1000",
            name_check_option : "OFF",
            req_cnt : "10",
            req_list : {
                dps_print_content : "김오픈",
                fintech_use_num : "199005196057726021204355",
                tran_amt : "1000",
                tran_dtime : "20190605010101"
            }
        }
    }

    request(option, function(err, response, body){
        if(err) throw err;
        else {
            console.log(body);
            res.json(body);
        }
     });
});

module.exports = router;