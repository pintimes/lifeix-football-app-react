'use strict';

var React = require('react-native');
var Dimensions = require('Dimensions');

var {
  TextInput,
  Text,
  View,
  TouchableHighlight, 
  StyleSheet,
} = React;

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height - 70;

// 发帖
var SendPost = React.createClass({
  // 获取输入框标题的方法
  getValue: function(text) {
    var value = text;
    this.setState({
      value: value
    });
  },
  // 获取输入框内容的方法
  getContent: function(text) {
    var content = text;
    this.setState({
      content: content
    });
  },
  // 发表帖子按钮方法
  _sendPost: function() {
    alert(this.state.content);
  },
  render: function() {
    return (
      <View style = {styles.container}>
        <View style = {styles.title}>
          <TextInput 
              style = {{height: 25, borderColor: 'gray', borderWidth: 1, borderRadius: 3}}
              returnKeyType = "next"
              placeholder = "标题"
              onChangeText = {this.getValue}
          />
        </View>
        
        <View style = {styles.content}>
          <TextInput 
              style = {{height: 200, borderColor: 'gray', borderWidth: 1, borderRadius: 3}}
              returnKeyType = "done"
              multiline = {true}
              placeholder = "内容"
              onChangeText = {this.getContent}
          />
        </View>

        <View style = {styles.sendBtn}>
          <TouchableHighlight onPress = {this._sendPost}>
            <Text style = {styles.font}>发帖</Text>
          </TouchableHighlight>
        </View>
      </View>   
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  title: {
    paddingRight: 150,
  },
  content: {
    marginTop: 10
  },
  sendBtn: {
    width: 60,
    height: 30,
    marginTop: 10,
    backgroundColor: "#18B5FF",
    justifyContent: 'center',
    alignItems: 'center'
  },
  font: {
    textAlign: 'center',
  }
});

module.exports = SendPost;








