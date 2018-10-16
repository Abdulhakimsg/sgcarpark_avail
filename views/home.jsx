var React = require("react");
var Layout = require("./components/layout" );

class Home extends React.Component {
  render() {
    return (
      <Layout title="Hakim" >
      <div className = 'mainframe'>
      <h2 id="findDevice">Find by Device Location</h2>
      
       <a className="btn btn-success" id="nearMe" href="location">Near me</a>
        <div>
        <h2 id="findStreet" >Find by Street name & Vehicle Type</h2>
        <form action="/result" method="get">
            <input type="text" name="name" placeholder="Type Street name" id="typeStreet"/>
            <input type="radio" name="type" value="C" className="circle" defaultChecked />
            <label htmlFor="car" className="radio">CAR(C)</label>
            <input type="radio" name="type" value="Y" className="circle" />
            <label htmlFor="motor" className="radio">MOTORBIKE(Y)</label>
            <input type="radio" name="type" value="H" className="circle" />
            <label htmlFor="truck" className="radio">HEAVY(H)</label>
            <input type="submit" value="Submit" className="btn btn-outline-primary" />
          </form> 
          </div>
          {/* <h2>See All</h2>
          <a href="/all"><button className="btn btn-outline-secondary">Show all</button> </a>  */}
          <script type="text/javascript" src = "/script2.js"></script>
      </div>
      </Layout>
    );
  }
}
        
       
      

module.exports = Home;


        
