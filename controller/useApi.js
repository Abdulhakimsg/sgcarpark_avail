//Use request module
const request = require('request');
const compare = require('compare-lat-lon');

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
        res.render('home');
    };
    //By vehicle type & Street Nam e
    const resultPage = (req, res) => {
        if(req.query.name) {

            request(link,function(error,response,body) {
                file_json = JSON.parse(body);
                var type = file_json.value.filter((element) => {  
                    return element.LotType.includes(req.query.type.toUpperCase());
                    });
            //    console.log(type);
                var filteredList = type.filter((element) => {  
                return element.Development.includes(req.query.name.toUpperCase());
                });
                var numberList = filteredList.length
                res.render('results', {list: filteredList,totalNumber: numberList});
            });            
            
        } else {
            res.redirect('/');
        }
    } ; 
      
    // Show by location
    const location = (req,res) =>{

        request(link,function(error,response,body) {
            var coord = []
            var rawLat = req.query.lat
            var rawLon = req.query.lon
            var myLat = parseFloat(rawLat).toFixed(5)
            coord.push(myLat)
            var myLon = parseFloat(rawLon).toFixed(5)
            coord.push(myLon)
            console.log("mylocation",coord)

            
            file_json = JSON.parse(body);
            var array=file_json.value

            var numberList = 0
            var arrayList = []
            
            
            for(var i = 0;i<array.length;i++){
                var testActual=array[i].Location
                var valuesActual= testActual.split(" ")
                let distActual = 1.6//miles
                var answerActual = compare(coord[0],coord[1],valuesActual[0],valuesActual[1])

                if(answerActual<distActual){
                    // console.log(array[i])
                    numberList += 1
                    arrayList.push(array[i])
                }
            
            }
            // console.log("THIS IS THE LIST: " ,arrayList)
            // console.log("TOTAL NUMBER: " , numberList)
            res.render('location',{totalNumber:numberList, list:arrayList});
        });
       
    }
    
    //Show all
    const showAll = (req, res) => {

        request(link,function(error,response,body) {

            file_json = JSON.parse(body);
            console.log(file_json)
            res.render('all', {carpark: file_json});
        });
        
    };

    return {
        formPage,
        showAll,
        resultPage,
        location
    }     
};