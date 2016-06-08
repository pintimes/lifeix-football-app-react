import React from 'react';
import {
  StyleSheet,
    View,
    Component,
    Text,Image,TouchableOpacity,
    Dimensions,ScrollView
} from 'react-native';
var width =Dimensions.get('window').width;
var data = [
      {img:"http://photo.l99.com/common/ab0/1459301431104_xdzd42.jpg",title: "用胜利回敬谩骂——国足奇迹夜后记"},
      {img:"http://photo.l99.com/common/5ac/1433940289400_iwu9f3.jpg",title: "球场暴力事件不断 中国男足还有希望吗？ 这是一个超级长的标题"},
      {img:"http://photo.l99.com/common/30/1394108924725_45gms8.jpg",title: "习大普奔，国运强则球运兴！"},
      {img:"http://photo.l99.com/common/31/1371533509639_p3h709.jpg",title: "女足门将身高1.87米长相清秀 惊艳抢镜(图)"}];

var that ;
class Test extends Component {
  constructor(props) {
    super(props);
    that =this;
  }


  render() {

    return (
      <Image style={styles.bgImage} source={require('../imgs/fb_bg.jpg')}>
        <View style={styles.container}>
          <ScrollView style = {styles.content}
                ref='scrollView'
                scrollEventThrottle={200}>
                {data.map(function(item,i){
                  return (
                        <TouchableOpacity activeOpacity={0.4} onPress={()=>that.onPress(item)}>
                        <View>
                          <Image style={styles.img} source={{uri:item.img}}>
                              <View style={styles.itemLabel}>
                                  <Text numberOfLines={1} style={styles.itemTitle}>{item.title}</Text>
                              </View>
                          </Image>
                        </View>
                        </TouchableOpacity>
                    );
                })}
           </ScrollView>
        </View>
        </Image> 
    );
  }

  onPress(item){
    alert(item.title);
  }


}

var styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height-50,
    justifyContent: 'center',
    alignItems: 'center',
  },bgImage:{
    height: Dimensions.get('window').height,
    width: width,
  },img: {
    width: width-20,
    height: 200,
    margin:10,
     opacity:0.9,
  },itemLabel:{
      top: 150,
      backgroundColor:'#000',
      opacity:0.5,
      width: width,
      height:30,
      justifyContent:'center',
  },itemTitle:{
    letterSpacing:2,
    fontWeight:'bold',
    fontSize:18,
    textAlign:'left',
    color:'#fff',
    marginLeft:10
  }

});

module.exports = Test