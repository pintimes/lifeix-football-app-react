import React ,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
} from 'react-native';

var termList = [
  {term: "龙之队"},
  {term: "铿锵玫瑰"},
  {term: "球员之家"},
  {term: "教练员"},
  {term: "裁判员"},
  {term: "裁判员3"},
  {term: "裁判员2"},
  {term: "裁判员1"},
  {term: "裁判员4"},
  {term: "test1"}
];

import ScrollableTabView, {DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';
import ScrollableFTTabBar from './ScrollableFTTabBar'
//头部滚动菜单
class ScrollMenu extends Component {

  getInitialState() {
    //props 
    termList= this.props.termList;
    return null;
  }
  render() {
    //termList = this.props.termList;
    return (
	    <View style={styles.scrollableTab}>	
	      <ScrollableTabView initialPage={0} tabBarPosition="top" onChangeTab = {this.props.onChangeTab} renderTabBar={()=>this.renderTabBar()}>
	            {
	                termList.map(function(item) {
	                  return (<Text tabLabel = {item.term}></Text>);
	                })
	            }
      	 </ScrollableTabView>
      	</View>
      );
  }
  renderTabBar(){
      return (<ScrollableFTTabBar />)
  }

}

var styles = StyleSheet.create({

  scrollableTab: {
    height: 30,
    marginTop:30+(Platform.OS === 'ios' ? 20 : 0)
  },
});

module.exports = ScrollMenu	