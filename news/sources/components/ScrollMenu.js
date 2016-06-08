import React ,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
} from 'react-native';

var termList = [
  {term: "男足国家队"},
  {term: "男足国奥队"},
  {term: "男足国青队"},
  {term: "男足国少队"}
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
    return (
	    <View style={styles.scrollableTab}>	
	      <ScrollableTabView initialPage={0} tabBarUnderlineColor="red" tabBarActiveTextColor="black" tabBarPosition="top" onChangeTab = {this.props.onChangeTab} renderTabBar={()=>this.renderTabBar()}>
	            {
	                termList.map(function(item) {
	                  return (
                      <ScrollView tabLabel={item.term}>
                      </ScrollView>
                    );
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
    marginLeft: 15
  },

});

module.exports = ScrollMenu	