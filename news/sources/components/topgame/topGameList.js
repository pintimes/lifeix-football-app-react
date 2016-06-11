
import React from 'react-native';
const {
  Component,
  Image,View,StyleSheet,
} = React;
import {width,height} from '../../utils/Dimensions';
export default class TopGame extends Component {
   

  render() {
    return (
      <View>
      <View style={styles.slideImage}>
      </View>
      </View>
      
    );
  }
}

var styles = StyleSheet.create({
   slideImage: {
       width:width,
       height:200,
       backgroundColor: '#CE1126',
   },
});