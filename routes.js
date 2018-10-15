module.exports = (app) => {

    //to link to controller folder
    const useApi = require('./controller/useApi')();

    //ROUTES
    app.get('/location',useApi.location);
    app.get('/result', useApi.resultPage);
    app.get('/all', useApi.showAll);
    app.get('/', useApi.formPage);
  
}
