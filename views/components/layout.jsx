var React = require('react');

class Layout extends React.Component {
  render() {
	return (
		<html lang="en">
		<head>
			<link rel="stylesheet" type="text/css" href="/style.css"/>
			<title>{this.props.title}</title>
		</head>
		<body>
			<div className = "w3-container">
			<span className="major">This is the Header</span>
			</div>
			{this.props.children}
		</body>
		</html>		
	);
  }
}

module.exports = Layout;

<div class="w3-container w3-teal">
  <h5>Footer</h5>
  <p>Footer information goes here</p>
</div>