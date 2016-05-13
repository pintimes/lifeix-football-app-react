import React from 'react';
import {
  StyleSheet,
  Component,
  Text,
  View,
  Platform,
  ScrollView,
} from 'react-native';

var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
import ImageTimer from './ImageTimer';
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



class ScrollImages extends Component{
  render() {
    return(
      <ImageTimer imgStyle = {styles.imgStyle} data = {data} timer = {1500} click = {this.onPress}/>

     ); 
  }

  onPress(post) {
    alert(post);
  }

};

var styles = StyleSheet.create({

  imgStyle: {
    width: width,
    height: width * 0.5
  }
});

module.exports = ScrollImages;

