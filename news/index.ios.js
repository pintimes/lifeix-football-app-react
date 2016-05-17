/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Navigator 
} from 'react-native';

import Welcome from './sources/view/welcome'

console.disableYellowBox=true;
class news extends Component {
  constructor (props) {
    super(props)
  }
  
  render() {
    return (
      <Navigator styles ={styles.container}
        initialRoute={{
          component: Welcome
        }}
        renderScene={(route, navigator) => { 
          return <route.component navigator={navigator}/>
        }}/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#CE1126',
  },
});

AppRegistry.registerComponent('news', () => news);
