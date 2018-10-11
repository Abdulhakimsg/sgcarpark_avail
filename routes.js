module.exports = (app) => {

    const home = require('./controller/home')();
    app.get('/', home.callback)
    
}
