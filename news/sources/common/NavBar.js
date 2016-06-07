'use strict';

var NavigationBar = require('react-native-navbar');
var React = require('react-native');
var {StyleSheet,View} = React;
var {Router, Route, Animations, Schema} = require('react-native-redux-router');
import Left from './LeftButton';
class NavBarBase extends React.Component {
   // onPrev(){
   //     var Actions = this.props.routes;
   //     if (this.props.onPrev){
   //         this.props.onPrev();
   //         return;
   //     }
   //     if (this.props.navigator && this.props.navigator.getCurrentRoutes().length > 1){
   //         Actions.pop();
   //     }
   // }
   render() {
       var Actions = this.props.routes;
       //console.log(this.props.name+"P"+this.props.title+"rops : " + this.props);
       return <NavigationBar style={styles.navBar}
                             tintColor='white'
                             statusBar= {{style:'light-content', hidden: false}}
                             title= {{title:this.props.title,tintColor:"#fff"}}
                             prevTitle={this.props.initial ? " " : null}
                             leftButton = {this.props.leftButton ? this.props.leftButton : {title:''}}
                             rightButton = {this.props.rightButton ? this.props.rightButton : {title:''}}
           />
   }
}
class NavBar extends React.Component {
   render() {
     var Actions = this.props.routes;
       return <NavBarBase customNext={<View/>} {...this.props} leftButton={this.props.leftButton ? this.props.leftButton :{title:'Back', handler:this.props.onPrev || Actions.pop}}/>
   }
}

class NavBarLeft extends React.Component {
   render() {
     var Actions = this.props.routes;
       return <NavBarBase customNext={<View/>} {...this.props} leftButton={<Left onPress={this.props.onPress}  />}/>
   }
}

class NavBarModal extends React.Component {
   render() {
     var Actions = this.props.routes;
       return <NavBarBase customPrev={<View/>} nextTitle="Close" {...this.props} rightButton={{title:'Close', handler:this.props.onNext || Actions.pop}}/>
   }
}

var styles = StyleSheet.create({
   navBar: {
       height:30,
       backgroundColor: '#CE1126',
   },
});


module.exports = {NavBar, NavBarModal,NavBarLeft};
