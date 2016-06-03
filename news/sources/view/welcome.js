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
    Easing,
    Image,
    Navigator,
    Text,
} from 'react-native';

import Home from './home';
import UmengPush from 'react-native-umeng-push';
import codePush from 'react-native-code-push';
import {Actions}  from 'react-native-redux-router';
class Welcome extends Component {
	constructor(props) {
	    super(props);  
	    this.state = {
	      fadeAnimLogo: new Animated.Value(0),
	      fadeAnimTitle: new Animated.Value(0),
	    };
	}
	componentDidMount() {
    	UmengPush.getDeviceToken(deviceToken => {
      		console.log("deviceToken======="+deviceToken);
    	});
    	UmengPush.didReceiveMessage(message => {
      		console.log("didReceiveMessage====:", message);
    	});
    	UmengPush.didOpenMessage(message => {
     		 console.log("didOpenMessage====:", message);
    	});
    	    
	 codePush.sync(
	        { updateDialog: {title:"中国足球",appendReleaseDescription:true,optionalIgnoreButtonLabel:"忽略",optionalInstallButtonLabel:"安装",optionalUpdateMessage:"有可用的更新，快快更新吧!" }, installMode: codePush.InstallMode.IMMEDIATE }
     	);

     console.log("home  codePush.sync();------------------------------ ");

        let timing = Animated.timing
	    Animated.sequence([
	      timing(this.state.fadeAnimLogo, {
	        toValue: 1,
	        duration: 800
	      }),
	      timing(this.state.fadeAnimTitle, {
	        toValue: 1,
	        duration: 800
	      })
	    ]).start(async() => {
      		setTimeout(() => Actions.home(), 100)
    	})
    }

    homePage(){
    	//跳转到主页
    	this.props.navigator.resetTo({
    		component: Home
    	});
    }

	render() {
		return this.renderLoadingView();
	}

	renderLoadingView() {
	    return (
	   //    <View style={styles.container}>
		  //   <Text style={styles.title}>
		  //     中国足球网
		  //   </Text>
		  // </View>

	      <Animated.View style={[styles.container, {
	        opacity: this.state.fadeAnimLayout
	      }]}>
	        <Animated.View
	          style={{
	            opacity: this.state.fadeAnimLogo, // Binds directly
	            marginTop: 220,
	            alignItems: 'center',
	            transform: [{
	              translateX: this.state.fadeAnimLogo.interpolate({
	                inputRange: [0, 1],
	                outputRange: [-40, 0]  // 0 : 150, 0.5 : 75, 1 : 0
	              })
	            }]
	          }}>
	          <Image source={require('../imgs/china_football.png')} style={{width: 100, height: 100}}/>
	        </Animated.View>

	        <Animated.View
	          style={{
	            opacity: this.state.fadeAnimTitle,
	            position: 'absolute',
	            bottom: 50,
	            transform: [{
	              translateX: this.state.fadeAnimTitle.interpolate({
	                inputRange: [0, 1],
	                outputRange: [25, 50]
	              })
	            }]
	          }}>
	          <Text style={styles.title}>中国足球网</Text>
	        </Animated.View>
	      </Animated.View>
	    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: '#CE1126',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FCD116',
  }
});
module.exports = Welcome
