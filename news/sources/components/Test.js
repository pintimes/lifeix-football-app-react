import React from 'react';
import {
  StyleSheet,
    View,
    Component,
    Text,Image,
    ListView,Dimensions,ScrollView
} from 'react-native';

var data = [
      {img:"http://photo.l99.com/common/ab0/1459301431104_xdzd42.jpg",title: "用胜利回敬谩骂——国足奇迹夜后记"},
      {img:"http://photo.l99.com/common/5ac/1433940289400_iwu9f3.jpg",title: "球场暴力事件不断 中国男足还有希望吗？ 这是一个超级长的标题"},
      {img:"http://photo.l99.com/common/30/1394108924725_45gms8.jpg",title: "习大普奔，国运强则球运兴！"},
      {img:"http://photo.l99.com/common/31/1371533509639_p3h709.jpg",title: "女足门将身高1.87米长相清秀 惊艳抢镜(图)"}];


class Test extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
          <ScrollView style = {styles.content}
                    automaticallyAdjustContentInsets={false}
                    onScroll={() => { console.log('onScroll!'); }}
                    scrollEventThrottle={200}>
                    {data.map(function(item,i){
                      return (
                            <View>
                            <Image style={styles.img} source={{uri:item.img}} />
                            </View>
                        );
                    })}
               </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#778899',
  },img: {
    width: Dimensions.get('window').width-20,
    height: 200,
    margin:10
  },
 content: {
    height: Dimensions.get('window').height,
    flexDirection: 'row',
    backgroundColor: '#fff'
  }
});

module.exports = Test