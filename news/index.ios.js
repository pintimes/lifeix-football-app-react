/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Navigator,
  NativeAppEventEmitter, 
  NativeModules, 
  DeviceEventEmitter, 
} from 'react-native';

import Welcome from './sources/view/welcome'
import UmengPush from './sources/api/UMeng/UmengPush'

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

  componentDidMount() {
    UmengPush.getDeviceToken(deviceToken => {
      console.log(deviceToken);
    });
    UmengPush.didReceiveMessage(message => {
      console.log("didReceiveMessage:", message);
    });
    UmengPush.didOpenMessage(message => {
      console.log("didOpenMessage:", message);
    });
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
