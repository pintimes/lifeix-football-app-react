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
  getInitialState: function() {
    this.state = {
      id: null
    }    
  },
  componentDidMount() {
    this.setState({
      id: this.props.id
    });
    // 请求数据
    this._requireContent();
  },
   _requireContent: function() {
    fetch('http://192.168.50.56:8080/football/wemedia/posts/' + id)
    .then(function(response) {
      return response.json()
    }).then(function(json) {
      console.log('parsed json', json)
    }).catch(function(ex) {
      console.log('parsing failed' + ex)
    })
  },
  render: function() {
    return (
      <View style={{flex:1}}>
        <View style={styles.single}>
          <View style = {styles.title}>
            <Text style = {{fontWeight: 'blod'}}>{json.title}</Text>
          </View>
          <View style = {styles.comlike}>
            <Text>{'评论数：' + json.commentNum}</Text>   <Text>{'喜欢：' + json.likeNum}</Text>
          </View>
          <View style = {styles.description}>
            <Text>{json.description}</Text>
          </View>
          <ScrollView style = {styles.content}>
            <Text>{json.content}</Text>
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

