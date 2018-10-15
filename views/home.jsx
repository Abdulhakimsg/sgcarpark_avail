var React = require('react');
var Layout = require('./components/layout');

class Home extends React.Component {
  render() {

    return (
      <Layout title="Hakim">
			<div>
      <form action="/result" method="get"><br></br>
      <input type="text" name="name" placeholder="Enter Street name"/><br></br>
      <input type="radio" name="type" value="Y" defaultChecked />
        <label htmlFor="motor">MOTORBIKE</label>
      <input type="radio" name="type" value="C" />
        <label htmlFor="car">CAR</label><br></br>
      <input type="submit" value="Submit"/>
      </form>
      <a href = "/location" id ='nearMe' >Near me</a><br></br>
      <a href = "/all"><button>Show all</button></a>
			<h1>{this.props.name}</h1>
			</div>
      <script  type="text/javascript" src = "/script2.js"></script>
			</Layout>
    );
  }
}

module.exports = Home;