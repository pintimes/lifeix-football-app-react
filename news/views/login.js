// 登录页面(只允许通过第三方登录)

var React = require('react-native');
var Util = require('./util');


var {
  StyleSheet,
  View,
  TabBarIOS,
  Text,
  NavigatorIOS,
  StatusBarIOS,
  TouchableHighlight,
  TextInput,
  Image,
  } = React;

var Login = React.createClass({

  render: function(){
    return (
      <View style={styles.container}>

        <View style={styles.inputRow}>
          <Text>账号</Text><TextInput style={styles.input} placeholder="请输入账号"/>
        </View>
        <View style={styles.inputRow}>
          <Text>密码</Text><TextInput style={styles.input} placeholder="请输入密码" password={true}/>
        </View>

        <View>
          <TouchableHighlight underlayColor="#fff" style={styles.btn} onPress={this._login}>
            <Text style={{color:'#fff'}}>登录</Text>
          </TouchableHighlight>
        </View>

        <View style = {styles.ThirdLogin}>
          <TouchableHighlight underlayColor="#fff" style={styles.ThirdBtn} onPress={this._wechatLogin}>
            <Text style={{color:'#fff'}}>微信</Text>
          </TouchableHighlight> 

          <TouchableHighlight underlayColor="#fff" style={styles.ThirdBtn} onPress={this._qqLogin}>
            <Text style={{color:'#fff'}}>QQ</Text>
          </TouchableHighlight>  
          
          <TouchableHighlight underlayColor="#fff" style={styles.ThirdBtn} onPress={this._weiboLogin}>
            <Text style={{color:'#fff'}}>微博</Text>
          </TouchableHighlight>         
        </View>

      </View>
    );
  },

  _login: function(){
    console.log('账户密码登录');
  },

  _wechatLogin: function() {
    console.log('微信登录');
  },

  _qqLogin: function() {
    console.log('qq登录');
  },

  _weiboLogin: function() {
    console.log('微博登录');
  },

});


var styles = StyleSheet.create({
  container:{
    marginTop:50,
    alignItems:'center',
  },
  logo:{
    width:100,
    height:100,
    resizeMode: Image.resizeMode.contain
  },
  inputRow:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',
    marginBottom:10,
  },
  input:{
    marginLeft:10,
    width:220,
    borderWidth:Util.pixel,
    height:35,
    paddingLeft:8,
    borderRadius:5,
    borderColor:'#ccc'
  },
  btn:{
    marginTop:10,
    width:80,
    height:35,
    backgroundColor:'#3BC1FF',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 4,
  },
  ThirdLogin: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',
    marginTop:20,
  },
  ThirdBtn: {
    marginTop:10,
    width:80,
    height:35,
    backgroundColor:'#3BC1FF',
    borderRadius: 4,
    marginRight: 15,
    justifyContent:'center',
    alignItems:'center'
  }
});


module.exports = Login;
