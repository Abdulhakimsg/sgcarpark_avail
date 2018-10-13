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
require('./routes')(app);


const jsonfile = require('jsonfile');


//Listen to server
app.listen(3000  , console.log ("Radio Check : I hear you loud and clear"));