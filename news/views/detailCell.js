'use strict';

import React, {
  StyleSheet,
  View, // 类似于DIV
  Text,
  ScrollView,
  PixelRatio,
  Dimensions,
  Platform
} from 'react-native';

var DetailCell = React.createClass({
  componentDidMount: function() {
    // 请求数据
    this._requireContent();  
  },
  _requireContent: function() {
    fetch('http://192.168.50.56:8080/football/wemedia/posts/' + this.props.id)
    .then(res => res.json())
    .then(res => news = res)
    .catch((error) => {
      console.warn(error);
    });
  },
  // updateNews: function(news) {
  //   this.setState({
  //     news = news;
  //   })
  // },
  render: function() {
    return (
      <View style={{flex:1}}>
        <View style={styles.single}>
          <View style = {styles.title}>
            <Text style = {{fontWeight: 'blod'}}>{news.title}</Text>
          </View>
          <View style = {styles.comlike}>
            <Text>{'评论数：' + news.commentNum}</Text>   <Text>{'喜欢：' + news.likeNum}</Text>
          </View>
          <View style = {styles.description}>
            <Text>{news.description}</Text>
          </View>
          <ScrollView style = {styles.content}>
            <Text>{news.content}</Text>
          </ScrollView>      
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
  single: {
    marginTop: (Platform.OS === 'ios')? 64: 48,
    backgroundColor:'#fff',
    width: Dimensions.get('window').width,
    flex:1,
    borderColor:'#e6e6e6',
    borderWidth: 1/PixelRatio.get(),
  },
  title: {
    alignItems:'center',
    justifyContent:'center'
  },
  comlike: {
    flexDirection: 'row',
    marginLeft: 10
  },
  description: {
    marginLeft: 10
  },
  content: {
    marginLeft: 10
  }
});

module.exports = DetailCell;