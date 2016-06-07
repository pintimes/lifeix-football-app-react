/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
    View,
    Component,
    Text,
    Platform,
    Dimensions
} from 'react-native';

import Content from '../components/Content';
import Settings from './settings'
import SideMenu from 'react-native-side-menu'
import {NavBar, NavBarModal,NavBarLeft} from '../common/NavBar';

class Home extends Component {
        state = {
        isOpen: false,
      };
      constructor(props) {
        super(props);
      }

      componentWillMount() {
      
      }

	render() {

              const menu = <Settings />
		return (
              <View style={styles.container}>
             
                <SideMenu menu={menu} isOpen={this.state.isOpen}
                    onChange={(isOpen) => this.updateMenuState(isOpen)}>
                 <NavBarLeft title="首页" onPress={()=>this.toggle()} />
                    <View style = {styles.content}>
                      <Content navigator={this.props.navigator} />
                    </View>
                
                </SideMenu>
                </View>
              );
	}

  renderNavigationBar(){
    return (
        <View />
      );
  }
  toggle() {
    this.setState({ isOpen:!this.state.isOpen});


  }

  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  }

  onForwardHandle(){

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  tabBar:{
    backgroundColor: '#CE1126',
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  content: {
    height: Dimensions.get('window').height,
    flexDirection: 'row',
    backgroundColor: '#fff'
  }
});
module.exports = Home
