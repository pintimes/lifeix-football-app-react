import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

 //忽略warning 
console.ignoredYellowBox = ['Warning: ReactNative.createElement'];
console.ignoredYellowBox = ['Warning: bind(): React component methods may only be bound to the component instance. See ScrollableTab'];
var ImageTimer = require('./ImageTimer');
var Dimensions = require('Dimensions');
var ScrollableTab = require('./ScrollableTab');
var width = Dimensions.get('window').width;

// 轮播图数据源
var data = [
      {commentNum: 1,
       imgs:["http://img.taopic.com/uploads/allimg/110906/1382-110Z611025585.jpg","http://img01.taopic.com/150920/240455-1509200H31810.jpg"],
       title: "123"
      },
      {commentNum: 1,
       imgs:
         ["http://img6.faloo.com/picture/0x0/0/183/183379.jpg","http://www.taopic.com/uploads/allimg/120628/201776-12062Q4295216.jpg"],
       title: "123"
      },
      {commentNum: 1,
       imgs:
        ["http://imgst-dl.meilishuo.net/pic/_o/84/a4/a30be77c4ca62cd87156da202faf_1440_900.jpg","http://img13.3lian.com/201312/04/a290524b9c59f165b8d8ac87f7a4c0bf.jpg"],
       title: "123"
      },
      {commentNum: 1,
       imgs:
         ["http://img.club.pchome.net/kdsarticle/2013/11small/21/fd548da909d64a988da20fa0ec124ef3_1000x750.jpg","http://img3.3lian.com/2013/v8/72/d/61.jpg"],
       title: "123"
      },
      {commentNum: 1,
       imgs:
        ["http://pic13.nipic.com/20110325/2457331_082544259000_2.jpg","http://www.shifenkafei.com/data/upload/553deb1621af2.jpg"],
       title: "123"
      }
];

// ScrollableTab props
var tabBarPosition = "top";
var termList = [
  {term: "龙之队"},
  {term: "铿锵玫瑰"},
  {term: "球员之家"},
  {term: "教练员"},
  {term: "裁判员"}
];

var HomePage = React.createClass({
  render() {
    return(
      <View style={styles.container}>
            <ScrollableTab tabBarPosition = {tabBarPosition} termList = {termList}/>
      </View>
    ); 
  },
  
  clickTab: function(selectedIndex) {
    if(selectedIndex == 0){
      this.renderHomePage;
    }else {
      this.renderOtherPage.bind(this, selectedIndex);
    }
  },

  renderHomePage: function() {
    return(
      <ImageTimer imgStyle = {styles.imgStyle} data = {data} timer = {1500} click = {this.onPress}/>
    );
  },

  onPress: function(post) {
    alert(post);
  },

  renderOtherPage: function(selectedIndex) {
    return(
      <Text>termList[selectedIndex].term<Text>
    )
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  ScrollableTab: {
    height: 30
  },
  imgStyle: {
    width: width,
    height: width * 0.5
  }
});

module.exports = HomePage;

