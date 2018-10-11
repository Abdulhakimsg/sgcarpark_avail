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

//URL
var url = 'https://jsonplaceholder.typicode.com/todos/1'

app.get('/results',function(req,res){

    request(url,function(error,response,body){

        file_json = JSON.parse(body);
        console.log(file_json);

        res.render('results')
    })
})



require('./routes')(app);
app.listen(3000  , console.log ("Radio : Hear you loud and clear"));