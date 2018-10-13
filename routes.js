module.exports = (app) => {

    //to link to controller folder
    const useApi = require('./controller/useApi')();

    //ROUTES
    app.get('/result', useApi.resultPage);
    app.get('/all', useApi.showAll);
    app.get('/', useApi.formPage);
    // app.get('/location', useApi.locationPage);
    
    
}
