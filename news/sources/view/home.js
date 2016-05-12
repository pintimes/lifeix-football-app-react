/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 //忽略warning 
 console.ignoredYellowBox = ['Warning: ReactNative.createElement'];

import React from 'react';
import {
  StyleSheet,
    View,
    Component,
    Text
} from 'react-native';


class Home extends Component {

	render() {
		return this.renderTabbar();
	}

	renderLoadingView() {
    return (
      <View style={styles.container}>
	    <Text style={styles.title}>
	      主页
	    </Text>
	  </View>
    );
	}

  renderTabbar(){
    return this.renderLoadingView();
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CE1126',
  },
  tabBar:{
    backgroundColor: '#CE1126',
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
});
module.exports = Home
