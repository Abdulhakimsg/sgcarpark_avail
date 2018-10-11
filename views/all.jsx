var React = require('react');
var Layout = require('./components/layout');
class All extends React.Component {
  render() {

    // console.log(this.props.carpark.value)
    let carpark = this.props.carpark.value.map((element) => {
      return <div key={this.props.carpark.value.indexOf(element)}>
      <h1>{element.CarParkID}</h1>
      {/* <h3>{element.Area}</h3> */}
      <h3>{element.Development}</h3>
      {/* <h3>{element.Location}</h3> */}
      <h3>{element.AvailableLots}</h3>
      <h3>{element.LotType}</h3>
      {/* <h3>{element.Agency}</h3> */}
      <br></br>
      <br></br>
      </div>
    });

    return (
      <Layout title="Hakim">
			<div>
			{carpark}
			</div>
			</Layout>
    );
  }
}

module.exports = All;