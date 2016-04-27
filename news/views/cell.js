'use strict';

import React, {
  StyleSheet, // 样式
  Text, // 文本
  View, // 类似于DIV
  Image,
  PixelRatio,
  Platform
} from 'react-native';

import Dimensions from 'Dimensions';


export default class Cell extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        if(this.props.data.images.length >=3) {
            return this.cell3(this.props.data);
        } else if (this.props.data.images.length >=1) {
            return this.cell1(this.props.data);
        } else {
            return this.cell0(this.props.data);
        }
    }

    cell0(data) {
        return (
            <View style={styles.list}>
                <Text style={styles.listTitle}>{data.title}</Text>
                <Text style={styles.listMute}>{data.createTime}    {data.author.name}</Text>
            </View>
        );
    }

    cell1(data) {
        return (
            <View style={styles.list}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex:1}}>
                        <Text style={styles.listTitle}>{data.title}</Text>
                        <Text style={styles.listMute}>{data.createTime}    {data.author.name}</Text>
                    </View>
                    <Image style={styles.listImg} source={{uri: data.images[0]}} />
                </View>
            </View>
        );
    }

    cell3(data) {
        return (
            <View style={styles.list}>
                <Text style={styles.listTitle}>{data.title}</Text>
                <View style={{marginTop:3,flexDirection:'row'}}>
                    <Image style={styles.listImg} source={{uri: data.images[0]}} />
                    <Image style={styles.listImg} source={{uri: data.images[1]}} />
                    <Image style={styles.listImg} source={{uri: data.images[2]}} />
                </View>
                <Text style={styles.listMute}>{data.createTime}    {data.author.name}</Text>
            </View>
        );
    }
};

var styles = StyleSheet.create({

  list: {
        paddingTop:12,
        paddingBottom:12,
        paddingLeft:5,
        paddingRight:5,
        backgroundColor:'#fff',
        marginBottom: 1,
  },
  listTitle: {
      marginTop:-4,
      lineHeight:23,
      fontWeight: '400',
      marginBottom:4,
      letterSpacing: 0.8,
      fontSize:('ios' == Platform.OS)? 19: 17,
      color:('ios' == Platform.OS)? '#333': '#555',
  },
  listImg: {
      marginLeft:2,
      marginRight:2,
      width: (Dimensions.get('window').width-22)/3,
      height: (Dimensions.get('window').width-22)*10/43,
      backgroundColor: '#eeeeee'
  },
  listMute: {
      fontSize:12,
      color:'#999',
      marginTop:10,
  }

});

module.exports = Cell;
