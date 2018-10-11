var React = require('react');
var Layout = require('./components/layout');

class Home extends React.Component {
  render() {
    return (
      <Layout title="Hakim">
			<div>
      <form action="/results" method="post"><br></br>
      <input type="text" name="name" placeholder="Enter Street name"/><br></br>
      <input type="submit" value="Submit"/>
      </form>
			<h1>{this.props.name}</h1>
			</div>
			</Layout>
    );
  }
}

module.exports = Home;