'use strict';

import React, {
  StyleSheet, 
  Text, 
  View, 
  Image,
  PixelRatio,
  Platform,
  TouchableOpacity
} from 'react-native';

import Dimensions from 'Dimensions';

var width = Dimensions.get('window').width - 20;
export default class Li extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        if(this.props.data.images.length >=1) {
            return this.li1(this.props.data);
        } else {
            return this.li0(this.props.data);
        }
    }

    // 无图 onPress = {this.props.click.bind(this, data)}
    li0(data) {
        return (
            <View style={styles.list}>
              <TouchableOpacity>
                <Image
                  source = {{uri: 'http://photo.l99.com/bigger/ab0/1459301431104_xdzd42.jpg'}}
                  style = {styles.imageStyle}
                />
                <View style = {styles.titleLabelStyle}>
                  <Text style = {styles.titleTextStyle}>
                    {data.title}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
        );
    }
    
    // 一张图  onPress = {this.props.click.bind(this, data)}
    li1(data) {
        return (
            <View style={styles.list}>
              <TouchableOpacity>
                <Image
                  source = {{uri: data.images[0]}}
                  style = {styles.imageStyle}
                />
                <View style = {styles.titleLabelStyle}>
                  <Text style = {styles.titleTextStyle}>
                    {data.title}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
        );
    }
};

var styles = StyleSheet.create({
  list: {
    padding: 10,
  },
  imageStyle: {
    width: width,
    height: width * 0.5
  },
  titleLabelStyle: {
    width: width,
    height: 30,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgba(222,222,222,0.6)'
  },
  titleTextStyle: {
    textAlign: 'center',
    fontSize: 18
  } 
});

module.exports = Li;