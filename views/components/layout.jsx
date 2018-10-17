var React = require('react');

class Layout extends React.Component {
  render() {
	return (
		<html lang="en">
		<head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
			<link rel="stylesheet" type="text/css" href="/style.css"/>
			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossOrigin="anonymous"/>
<title>{this.props.title}</title>
		</head>
		<body>
		<a href = "https://www.github.com/abdulhakimsg" target="_blank"><i className="fab fa-github-square fa-1x"></i></a>
			<a href = "https://www.abdulhakimchi@gmail.com" target="_blank">	<i className="fas fa-at fa-1x"></i></a>
			<a href = "https://www.linkedin.com/abdulhakimsg" target="_blank"><i className="fab fa-linkedin-in fa-1x"></i></a>
			{this.props.children}
			<footer className = "w3-container">
			<span id="bigHeading">Find a Carpark!</span>
			</footer>
			<script type="text/javascript" src = "/script.js"></script>
		</body>
		</html>		
	);
  }
}

module.exports = Layout;

