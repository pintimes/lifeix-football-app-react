import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import ScrollableTabView, {DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';
import ScrollableFTTabBar from './ScrollableFTTabBar'
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
    return (
      <ScrollableTabView initialPage={0} tabBarPosition="top" onChangeTab = {this.props.onChangeTab} renderTabBar={()=>this.renderTabBar()}>
                        {
                            termList.map(function(item) {
                              return (<Text tabLabel = {item.term}></Text>);
                            })
                        }
      	 </ScrollableTabView>
      );
  },
  renderTabBar(){
      return (<ScrollableFTTabBar />)
  }

});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: 5,
  }
});

module.exports = ScrollableTab;