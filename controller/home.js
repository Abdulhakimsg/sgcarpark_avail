module.exports = () => {


    //Server workings
    const callback = (req, res) => {
        console.log('working bro');
        res.render('home', {name: "This is Landing Page"});
      };

    return {
        callback
    }     
};