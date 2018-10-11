var React = require('react');
var Layout = require('./components/layout');

class Results extends React.Component {
  render() {
    let list = this.props.list.map((element) => {
      return <div key={this.props.list.indexOf(element)}>
      <h1>{element.CarParkID}</h1>
      <h3>{element.Development}</h3>
      <h3>{element.AvailableLots}</h3>
      <h3>{element.LotType}</h3>
      <br></br>
      <br></br>
      </div>
    });

    return (
      <Layout title="Hakim">
			<div>
			<h1>Results</h1>
            <h1>{list}</h1>
			</div>
			</Layout>
    );
  }
}

module.exports = Results;



