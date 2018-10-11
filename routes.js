module.exports = (app) => {

    //to link to controller folder
    const home = require('./controller/home')();
    const all = require('./controller/all')();
    const results = require('./controller/results')();


    //ROUTES
    app.get('/', home.callback)
    app.post('/results',results.callback)
    app.get('/all',all.callback)
    
    
}
