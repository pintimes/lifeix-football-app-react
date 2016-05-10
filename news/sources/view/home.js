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

import TabBar from 'react-native-xtabbar';  

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
    return (
      <TabBar style={styles.tabBar}>
          <TabBar.Item
              icon={require('../imgs/start_normal.png')}
              selectedIcon={require('../imgs/start_hightlight.png')}
              onPress={() => {
                  console.log("first onPress");
              }}
              title='首页'>
              <View style={styles.text}>
                  <Text style={{fontSize: 18}}>Home</Text>
              </View>
          </TabBar.Item>

          <TabBar.Item
              icon={require('../imgs/start_normal.png')}
              selectedIcon={require('../imgs/start_hightlight.png')}
              title='发现'>
              <View style={styles.text}>
                  <Text style={{fontSize: 18}}>Find</Text>
              </View>
          </TabBar.Item>

          <TabBar.Item
              icon={require('../imgs/start_normal.png')}
              selectedIcon={require('../imgs/start_hightlight.png')}
              title='我'>
              <View style={styles.text}>
                  <Text style={{fontSize: 18}}>Me</Text>
              </View>
          </TabBar.Item>
      </TabBar>
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
