var React = require('react');
var Layout = require('./components/layout');

class Results extends React.Component {
  render() {
    return (
      <Layout title="Hakim">
			<div>
			<h1>This is page where all the results will be displayed in console</h1>
			</div>
			</Layout>
    );
  }
}

module.exports = Results;