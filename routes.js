module.exports = (app) => {

    //to link to controller folder
    const useApi = require('./controller/useApi')();
    // const all = require('./controller/all')();



    //ROUTES
    app.get('/result', useApi.resultPage);
    app.get('/all', useApi.showAll);
    app.get('/', useApi.formPage);
    
    
}
