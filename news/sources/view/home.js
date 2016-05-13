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


import ScrollMenu from '../components/ScrollMenu';
import Content from '../components/Content';
import NavigationBar from 'react-native-navigation-bar';


class Home extends Component {

	render() {
		return (
                <View style={styles.container}>
                    {this.renderNavigationBar()}
                    <ScrollMenu/>
                    <View>
                      <Content />
                    </View>
                </View>
              );
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

  renderNavigationBar(){
    return (
          <NavigationBar 
              title={'中国足球网'}
              height={30}
              titleColor={'#FCD116'}
              backgroundColor={'#CE1126'}
              leftButtonIcon={require('../imgs/start_hightlight.png')}
              //leftButtonTitle={'back'}
              //leftButtonTitleColor={'#fff'}
              onLeftButtonPress={this.onBackHandle} 
              //rightButtonIcon={require('../imgs/start_hightlight.png')}
              rightButtonTitle={'中国足球网'}
              rightButtonTitleColor={'#CE1126'}
              onRightButtonPress={this.onForwardHandle}
          />
      );
  }
  onBackHandle(){

  }
  onForwardHandle(){

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
