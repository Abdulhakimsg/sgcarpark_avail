var React = require('react');

class Layout extends React.Component {
  render() {
	return (
		<html lang="en">
		<head>
			<link rel="stylesheet" type="text/css" href="/style.css"/>
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
			<title>{this.props.title}</title>
		</head>
		<body>
			{this.props.children}
			<footer className = "w3-container">
			<span id="bigHeading">Find a Carpark!</span>
			</footer>
		</body>
		<script type="text/javascript" src = "/script2.js"></script>
		</html>		
	);
  }
}

module.exports = Layout;

