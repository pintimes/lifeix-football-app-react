'use strict';

import React ,{Component} from 'react';
import {View, Text, StyleSheet,Dimensions,TouchableOpacity} from 'react-native';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
import {Actions}  from 'react-native-redux-router';

class TestTip extends React.Component {
    render(){
        let Actions = this.props.routes;
        return (
            <View style={styles.content}>
                <View style={styles.info}>
                    <Text>{this.props.data}</Text>
                </View>
                <TouchableOpacity onPress={()=>this.onPress()}>
                <View style={styles.button}>
                    <Text>Close</Text>
                </View>
                </TouchableOpacity>
                
            </View>
        );
    }

    onPress(){
        if (this.props.onPress){
           this.props.onPress();
           return;
       }
       Actions.dismiss();
       Actions.testView();
    }

}

const styles = StyleSheet.create({
  
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    
  },info:{
    height:300,
    width:width-50,
    justifyContent: 'center',
    borderRadius:10,
    backgroundColor:'#CE1126'
  },button:{
    marginTop:20,
    width:width-50,
    height:50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    backgroundColor:'#CE1126'
  }
});
module.exports = TestTip

