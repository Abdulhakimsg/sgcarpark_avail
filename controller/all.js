module.exports = () => {

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

    //Server workings
    const callback = (req, res) => {

        request(link,function(error,response,body) {

            file_json = JSON.parse(body);
            console.log(file_json);
    
            res.render('all')
        })
        
    }

    return {
        callback
    }     
};