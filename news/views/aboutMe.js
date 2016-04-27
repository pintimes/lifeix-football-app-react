
// 我的模块

var React = require('react-native');
var Login = require('./login');

var {
  View
} = React;

var AboutMe = React.createClass({
	render: function() {
		return(
			<View style = {{flex: 1, marginBottom: 64}}>
				<Login></Login>
			</View>
		);
	}
});

module.exports = AboutMe;