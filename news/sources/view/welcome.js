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
    Animated,
    Image,
    TouchableHighlight,
    Text
} from 'react-native';

class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to 中国足球网!
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FCD116',
    bottom: 20,
  },
});
module.exports = Welcome
