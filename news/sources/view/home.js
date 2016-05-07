/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict'

import React from 'react';
import {
  StyleSheet,
    View,
    Component,
    Text
} from 'react-native';

class Home extends Component {

	render() {
		return this.renderLoadingView();
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

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CE1126',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FCD116',
    bottom: 20,
  }
});
module.exports = Home
