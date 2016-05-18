/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';
import Welcome from './sources/view/welcome'
console.disableYellowBox=true;
class news extends Component {
  render() {
     return (
        <Navigator styles ={styles.container}
          initialRoute={{
            component: Welcome
          }}
          renderScene={(route, navigator) => { 
            return <route.component navigator={navigator}/>
          }}/>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('news', () => news);
