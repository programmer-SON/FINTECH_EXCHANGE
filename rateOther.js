const axios = require("axios");
const request = require("request");
const cheerio = require("cheerio");
var async = require("async");
const log = console.log;
var iconv = require('iconv-lite');

const getHtml = async () => {
   try {
       return await axios.get("https://finance.naver.com/marketindex");
   } catch (error) {
       console.error(error);
   }
};

var mysql  = require('mysql');
var connection = mysql.createConnection({
    port : "3306",
    host     : 'localhost',
    user     : 'root',
    password : 'thdus3281',
    database : 'fintech'
});

connection.connect();


exports.Allrate = function () {
  
function getData() {
  var page = [1,2,3,4,5,6,7]
  async.forEachLimit(page, 1, function(pageIndex, callback){
    request("https://finance.naver.com/marketindex/exchangeDailyQuote.nhn?marketindexCd=FX_CHFKRW&page="+pageIndex, function (err, res, body) {
      const $ = cheerio.load(body);
      const bodyList = $(".tbl_exchange tbody tr").map(function (i, element) {

          var sql = "INSERT INTO `fintech`.`dayrate` (`ratecode`, `rate`, `date`) VALUES (?,?,?);"
          connection.query(sql,['CHF', $(element).find('td:nth-of-type(2)').text(), $(element).find('td:nth-of-type(1)').text()], function (err, result) {
          if (err) throw err;
      });
      })
  })
  request("https://finance.naver.com/marketindex/exchangeDailyQuote.nhn?marketindexCd=FX_USDKRW&page="+pageIndex, function (err, res, body) {
    const $ = cheerio.load(body);
    const bodyList = $(".tbl_exchange tbody tr").map(function (i, element) {
      
        console.log($(element).find('td:nth-of-type(1)').text());
        console.log($(element).find('td:nth-of-type(4)').text());
        
        var sql = "INSERT INTO `fintech`.`dayrate` (`ratecode`, `rate`, `date`) VALUES (?,?,?);"
          connection.query(sql,['USD', $(element).find('td:nth-of-type(2)').text(), $(element).find('td:nth-of-type(1)').text()], function (err, result) {
          if (err) throw err;
      });
      
    })
  })
  request("https://finance.naver.com/marketindex/exchangeDailyQuote.nhn?marketindexCd=FX_JPYKRW&page="+pageIndex, function (err, res, body) {
    // console.log(body);
    const $ = cheerio.load(body);
    const bodyList = $(".tbl_exchange tbody tr").map(function (i, element) {
      
        console.log($(element).find('td:nth-of-type(1)').text());
        console.log($(element).find('td:nth-of-type(4)').text());
        
        var sql = "INSERT INTO `fintech`.`dayrate` (`ratecode`, `rate`, `date`) VALUES (?,?,?);"
          connection.query(sql,['JPY', $(element).find('td:nth-of-type(2)').text(), $(element).find('td:nth-of-type(1)').text()], function (err, result) {
          if (err) throw err;
      });
      
    })
  })

  request("https://finance.naver.com/marketindex/exchangeDailyQuote.nhn?marketindexCd=FX_EURKRW&page="+pageIndex, function (err, res, body) {
    // console.log(body);
    const $ = cheerio.load(body);
    const bodyList = $(".tbl_exchange tbody tr").map(function (i, element) {
      
        console.log($(element).find('td:nth-of-type(1)').text());
        console.log($(element).find('td:nth-of-type(4)').text());
        
        var sql = "INSERT INTO `fintech`.`dayrate` (`ratecode`, `rate`, `date`) VALUES (?,?,?);"
          connection.query(sql,['EUR', $(element).find('td:nth-of-type(2)').text(), $(element).find('td:nth-of-type(1)').text()], function (err, result) {
          if (err) throw err;
      });
      
    })
  })
  request("https://finance.naver.com/marketindex/exchangeDailyQuote.nhn?marketindexCd=FX_CNYKRW&page="+pageIndex, function (err, res, body) {
    // console.log(body);
    const $ = cheerio.load(body);
    // console.log($(".tbl_exchange tbody").html());
    const bodyList = $(".tbl_exchange tbody tr").map(function (i, element) {
      
        console.log($(element).find('td:nth-of-type(1)').text());
        console.log($(element).find('td:nth-of-type(4)').text());
        
        var sql = "INSERT INTO `fintech`.`dayrate` (`ratecode`, `rate`, `date`) VALUES (?,?,?);"
          connection.query(sql,['CNY', $(element).find('td:nth-of-type(2)').text(), $(element).find('td:nth-of-type(1)').text()], function (err, result) {
          if (err) throw err;
      });
      
    })
  })
  request("https://finance.naver.com/marketindex/exchangeDailyQuote.nhn?marketindexCd=FX_GBPKRW&page="+pageIndex, function (err, res, body) {
    // console.log(body);
    const $ = cheerio.load(body);
    // console.log($(".tbl_exchange tbody").html());
    const bodyList = $(".tbl_exchange tbody tr").map(function (i, element) {
      
        console.log($(element).find('td:nth-of-type(1)').text());
        console.log($(element).find('td:nth-of-type(4)').text());
        
        var sql = "INSERT INTO `fintech`.`dayrate` (`ratecode`, `rate`, `date`) VALUES (?,?,?);"
          connection.query(sql,['GBP', $(element).find('td:nth-of-type(2)').text(), $(element).find('td:nth-of-type(1)').text()], function (err, result) {
          if (err) throw err;
      });
      
    })
  })
  request("https://finance.naver.com/marketindex/exchangeDailyQuote.nhn?marketindexCd=FX_AUDKRW&page="+pageIndex, function (err, res, body) {
    // console.log(body);
    const $ = cheerio.load(body);
    // console.log($(".tbl_exchange tbody").html());
    const bodyList = $(".tbl_exchange tbody tr").map(function (i, element) {
      
        console.log($(element).find('td:nth-of-type(1)').text());
        console.log($(element).find('td:nth-of-type(4)').text());
        
        var sql = "INSERT INTO `fintech`.`dayrate` (`ratecode`, `rate`, `date`) VALUES (?,?,?);"
          connection.query(sql,['AUD', $(element).find('td:nth-of-type(2)').text(), $(element).find('td:nth-of-type(1)').text()], function (err, result) {
          if (err) throw err;
      });
      
    })
  })
  request("https://finance.naver.com/marketindex/exchangeDailyQuote.nhn?marketindexCd=FX_HKDKRW&page="+pageIndex, function (err, res, body) {
    // console.log(body);
    const $ = cheerio.load(body);
    // console.log($(".tbl_exchange tbody").html());
    const bodyList = $(".tbl_exchange tbody tr").map(function (i, element) {
      
        console.log($(element).find('td:nth-of-type(1)').text());
        console.log($(element).find('td:nth-of-type(4)').text());
        
        var sql = "INSERT INTO `fintech`.`dayrate` (`ratecode`, `rate`, `date`) VALUES (?,?,?);"
          connection.query(sql,['HKD', $(element).find('td:nth-of-type(2)').text(), $(element).find('td:nth-of-type(1)').text()], function (err, result) {
          if (err) throw err;
      });
      
    })
  })
  request("https://finance.naver.com/marketindex/exchangeDailyQuote.nhn?marketindexCd=FX_CZKKRW&page="+pageIndex, function (err, res, body) {
    // console.log(body);
    const $ = cheerio.load(body);
    // console.log($(".tbl_exchange tbody").html());
    const bodyList = $(".tbl_exchange tbody tr").map(function (i, element) {
      
        console.log($(element).find('td:nth-of-type(1)').text());
        console.log($(element).find('td:nth-of-type(4)').text());
        
        var sql = "INSERT INTO `fintech`.`dayrate` (`ratecode`, `rate`, `date`) VALUES (?,?,?);"
          connection.query(sql,['CZK', $(element).find('td:nth-of-type(2)').text(), $(element).find('td:nth-of-type(1)').text()], function (err, result) {
          if (err) throw err;
      });
      
    })
  })
  request("https://finance.naver.com/marketindex/exchangeDailyQuote.nhn?marketindexCd=FX_THBKRW&page="+pageIndex, function (err, res, body) {
    // console.log(body);
    const $ = cheerio.load(body);
    // console.log($(".tbl_exchange tbody").html());
    const bodyList = $(".tbl_exchange tbody tr").map(function (i, element) {
      
        console.log($(element).find('td:nth-of-type(1)').text());
        console.log($(element).find('td:nth-of-type(4)').text());
        
        var sql = "INSERT INTO `fintech`.`dayrate` (`ratecode`, `rate`, `date`) VALUES (?,?,?);"
          connection.query(sql,['THB', $(element).find('td:nth-of-type(2)').text(), $(element).find('td:nth-of-type(1)').text()], function (err, result) {
          if (err) throw err;
      });
      
    })
  })
    callback();
  });
  }
  return getData();
};

exports.RateTable = function (callback) {
 function RateTable() {
    request({uri:"https://finance.naver.com/marketindex/exchangeList.nhn", encoding: "binary"}, function (err, res, body) {
        // console.log(body);
        const $ = cheerio.load(body);
        var code = [];
        
        var CurrentRate = {};
        const bodyList = $(".tbl_exchange tbody tr").map(function (i, element) {
            var str = $(element).find('a').text().trim();
            var rate = [];
            if (str.includes("USD") || str.includes("CHF")||str.includes("JPY")||
            str.includes("EUR")||str.includes("CNY")||str.includes("GBP")||str.includes("AUD")||
            str.includes("HKD")||str.includes("CZK")||str.includes("THB")) {
              
              var str = $(element).find('a').text().trim();
              //var content = fs.readFileSync('test_euckr.txt', "binary");
              str = iconv.decode(str, "euc-kr");
              rate.push($(element).find('td.sale').text());
              rate.push($(element).find('td:nth-child(7n+3)').text());
              rate.push($(element).find('td:nth-child(7n+4)').text());
              
             CurrentRate[str] = rate;
            }
            
        })
        console.log(CurrentRate);
        //var json = JSON.parse(data);
        callback(CurrentRate);
    })
 }
 RateTable();
}

