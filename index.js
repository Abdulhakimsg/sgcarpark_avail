const express = require('express')
const app = express();
const request = require('request');

app.use(express.urlencoded({
    extended: true
}));

//Set layout look to express object
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);


//Location to look for view file
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.use(express.static('public'));

//URL + authenticate with api link
// var link = {
//     url: 'http://datamall2.mytransport.sg/ltaodataservice/CarParkAvailabilityv2',
//     headers: {
//       'AccountKey': 'ufFaZx5sS7uB2yyedGcRsA==',
//       'accept' : 'application/json'
//     }
//   };

//
// app.get('/results',function(req,res){

//     request(link,function(error,response,body){

//         file_json = JSON.parse(body);
//         console.log(file_json);

//         res.render('results')
//     })
// })



require('./routes')(app);
app.listen(3000  , console.log ("Radio Check : I hear you loud and clear"));