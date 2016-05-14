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
var data = null;
class ScrollImages extends Component{
  constructor(props) {
    super(props);
    data = this.props.data;


  }


  render() {

    console.log(data);

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

