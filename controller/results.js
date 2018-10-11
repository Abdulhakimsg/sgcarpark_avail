module.exports = () => {


    //Server workings
    const callback = (req, res) => {
        console.log('Results page working bro');
        res.render('results');
      };

    return {
        callback
    }     
};