'use strict';

var React = require('react-native');
var Dimensions = require('Dimensions');
var PostCell = require('./views/postCell');
var SendPost = require('./views/sendPost');
var AboutMe = require('./views/aboutMe');

var {
  TouchableHighlight,
  TextInput,
  TabBarIOS,
  ScrollView,
  TextInput,
  Text,
  View,
  AppRegistry, 
  StyleSheet,
  NavigatorIOS
} = React;

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height - 70;

// 我的
// var MyInfo = React.createClass({
//   render: function() {
//     return (
//       <Text>我的信息</Text>
//     );
//   }
// });

var news = React.createClass({
  getInitialState: function() {
    return{
      tab: 'post'
    };
  },
  select: function(tabName) {
    this.setState({
      tab: tabName
    });
  },

  // 添加导航栏
  _addNavigator: function(component, title) {
    return <NavigatorIOS
      style = {{flex: 1}}
      barTintColor = '#007aFF'
      titleTextColor = "#fff"
      tintColor = "#fff"
      translucent = {false}
      initialRoute = {{
          component: component,
          title: title,
          passProps: {}
        }}
      />;
  },
  render: function() {
    return(
      <View style = {styles.flex}>
      <TabBarIOS style = {styles.flex}>
        <TabBarIOS.Item
          title = "帖子"
          icon = {require("image!pigeon_new")}
          onPress = {this.select.bind(this, 'post')}
          selected = {this.state.tab === 'post'}
          >
        {this._addNavigator(PostCell, '帖子')}  
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title= "发帖"
          icon = {require("image!pigeon_new")}
          onPress={this.select.bind(this, 'sendPost')}
          selected={this.state.tab === 'sendPost'}>
          {this._addNavigator(SendPost, '发帖')} 
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="个人信息"
          icon = {require("image!pigeon_new")}
          onPress={this.select.bind(this, 'AboutMe')}
          selected={this.state.tab === 'AboutMe'}>
        {this._addNavigator(AboutMe, '我的')}
        </TabBarIOS.Item>

      </TabBarIOS>  
      </View>
    );
  }
});

var styles = StyleSheet.create({
  flex:{
    flex: 1
  },
  message:{
    alignItems:'center',
    marginLeft:5,
    marginRight:5,
  },
  message_title:{
    fontSize:18,
    color: '#18B5FF',
    marginBottom:5,
  },
  list:{
    height:30,
    fontSize:15,
    marginLeft:10,
    marginTop:10,
  }
});

AppRegistry.registerComponent('news', () => news);


