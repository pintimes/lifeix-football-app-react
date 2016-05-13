import React ,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
} from 'react-native';


import ScrollImages from './ScrollImages';
//头部滚动菜单
class Content extends Component {
	render(){
		return (
			<ScrollImages />
		);
	}

}

module.exports = Content;