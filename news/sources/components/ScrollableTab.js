import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';

 //忽略warning 
console.ignoredYellowBox = ['Warning: ReactNative.createElement'];
console.ignoredYellowBox = ['Warning: bind(): React component methods may only be bound to the component instance. See ScrollableTab'];

// props 
/**
	tabBarUnderlineColor(String) 
	tabBarBackgroundColor(String) 
	tabBarActiveTextColor(String) 
	tabBarInactiveTextColor(String) 
	tabBarTextStyle(Object)  Example: {fontFamily: 'Roboto', fontSize: 15}
**/
var tabBarPosition = this.props.tabBarPosition; 
var termList = this.props.termList;

const ScrollableTab = React.createClass({
  render() {
    return <View style={styles.container}>
	     		 <ScrollableTabView initialPage={0} tabBarPosition={tabBarPosition} onChangeTab={this.props.clickTab.bind(this, selectedIndex) renderTabBar={() => <ScrollableTabBar />}>
				 	for(var i = 0; i < termList; i++){
				 		<View tabLabel=termList[i].term></View>
				 	}      
	      		 </ScrollableTabView>
   		   </View>;
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  }
});

module.exports = ScrollableTab;