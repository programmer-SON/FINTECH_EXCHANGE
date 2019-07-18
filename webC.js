var rate = require('./rateOther');
var schedule = require('node-schedule'); 

var scheduler = schedule.scheduleJob('*/5 * * * *', function(){
    //function () {....}
        rate.RateTable(function(data){
            console.log(data);
        })
});
    