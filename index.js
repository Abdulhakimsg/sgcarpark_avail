const express = require('express')
const app = express();
const request = require('request');
var cookieParser = require('cookie-parser')

app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser())

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
// app.listen(3000  , console.log ("Radio Check : I hear you loud and clear"));

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => console.log('~~~ Tuning in to the waves of port '+PORT+' ~~~'));
