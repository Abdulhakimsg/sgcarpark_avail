var React = require('react');
var Layout = require('./components/layout');

class Results extends React.Component {
  render() {
    return (
      <Layout title="Hakim">
			<div>
			<h1>Results will be displayed here</h1>
            <h1>{this.props.name}</h1>
			</div>
			</Layout>
    );
  }
}

module.exports = Results;