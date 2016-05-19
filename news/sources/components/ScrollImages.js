import React from 'react';
import {
  StyleSheet,
  Component,
  Text,
  View,
  Platform,
  ScrollView,
  Dimensions,
} from 'react-native';

var width = Dimensions.get('window').width;
import ImageTimer from './ImageTimer';
import Detail from '../view/detail'

// 轮播图数据源
var data = null;var navigator ;
class ScrollImages extends Component{
  constructor(props) {
    super(props);
    data = this.props.data;
    navigator = this.props.navigator;
  }


  render() {
    return(
      <ImageTimer imgStyle = {styles.imgStyle} data = {data} timer = {1000} click = {this.onPress}/>

     ); 
  }

  onPress(post) {
    navigator.push({
      component:Detail,
      params:{
        title:post.title
      }
    })
  }

};

var styles = StyleSheet.create({

  imgStyle: {
    width: width,
    height: width * 0.5
  }
});

module.exports = ScrollImages;

