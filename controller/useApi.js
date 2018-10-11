//Use request module
const request = require('request');

//Use API + authenticate with API key
var link = {
    url: 'http://datamall2.mytransport.sg/ltaodataservice/CarParkAvailabilityv2',
    headers: {
        'AccountKey': 'ufFaZx5sS7uB2yyedGcRsA==',
        'accept' : 'application/json'
    }
    };

module.exports = () => {

    //Server workings
    const formPage = (req, res) => {
        res.render('home', {name: "This is Landing Page"});
    };
      
    const resultPage = (req, res) => {
        if(req.query.name) {

            request(link,function(error,response,body) {

                file_json = JSON.parse(body);
                //console.log(file_json.value)
                var filteredList = file_json.value.filter((element) => {
                    return element.Development.includes(req.query.name.toUpperCase());
                });
                console.log(filteredList);
                res.render('results', {list: filteredList});
            });            
            
        } else {
            res.redirect('/');
        }
    } ; 

    const showAll = (req, res) => {

        request(link,function(error,response,body) {

            file_json = JSON.parse(body);
            // console.log(file_json);
    
            res.render('all', {carpark: file_json});
        });
        
    };

    return {
        formPage,
        showAll,
        resultPage
    }     
};