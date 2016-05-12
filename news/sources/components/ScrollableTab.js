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
var termList;
const ScrollableTab = React.createClass({
  getInitialState() {
    //props 
    termList= this.props.termList;
    return null
  },
  render() {
    termList = this.props.termList;
    return <View style={styles.container}>
	     		 <ScrollableTabView initialPage={0} tabBarPosition="top" onChangeTab = {this.props.onChangeTab} renderTabBar={() => <ScrollableTabBar />}>
                
                {
                  termList.map(function(item) {
                    return (<View tabLabel = {item.term}></View>);
                  })
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