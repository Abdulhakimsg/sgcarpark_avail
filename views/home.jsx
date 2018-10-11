var React = require('react');
var Layout = require('./components/layout');

class Home extends React.Component {
  render() {
    return (
      <Layout title="Hakim">
			<div>
			<h1>Hello {this.props.name}</h1>
			</div>
			</Layout>
    );
  }
}

module.exports = Home;