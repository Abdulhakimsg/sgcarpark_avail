const express = require('express')
const app = express();

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
app.listen(3000  , console.log ("RADIO CHECK : Hear you loud and clear"));