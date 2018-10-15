var React = require('react');
var Layout = require('./components/layout');
  class Results extends React.Component {
    render() {
      let totalNumber = this.props.totalNumber
      let list = this.props.list.map((element) => {
        return <div key={this.props.list.indexOf(element)}>
        <h3 className ="eleLocation">{element.Development}</h3>
        <h3 className ="eleLots">{element.AvailableLots}</h3>
        <h3 className ="eleType">{element.LotType}</h3>
        <br></br>
        <br></br>
        <br></br>
        </div>
      });
  
      return (
        <Layout title="Hakim">
        <div className = 'all'>
        <h1 className = "results">Results</h1>
          <h1 className = "totalNumber">Carpark Found: {totalNumber}</h1>
          <h1>{list}</h1>
        </div>
        </Layout>
      );
    }
  }
  
  module.exports = Results;