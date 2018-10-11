module.exports = () => {


    //Server workings
    const callback = (req, res) => {
        
        res.render('home', {name: "Hakim"});
      };

    return {
        callback
    }     
};