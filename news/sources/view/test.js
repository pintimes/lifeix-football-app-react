import React from 'react';
import {
  StyleSheet,
    View,
    Component,
    Text,
    ListView,Dimensions
} from 'react-native';

import SideMenu from 'react-native-side-menu';
import {NavBar, NavBarModal,NavBarLeft} from '../common/NavBar';
import Settings from './settings';
class Test extends Component {
  state = {
        isOpen: false,
      };
  constructor(props) {
    super(props);
  }


  render() {

 const menu = <Settings navigator={navigator} />

    return (
      <View style={styles.container}>
        <SideMenu menu={menu} isOpen={this.state.isOpen}
                onChange={(isOpen) => this.updateMenuState(isOpen)}>
                <NavBarLeft title="test" onPress={()=>this.toggle()} />
                <View style = {styles.content}>
                 
                </View>
            </SideMenu>
       </View>
    );
  }

  toggle() {
    this.setState({ isOpen:!this.state.isOpen});
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#778899',
  },
 content: {
    height: Dimensions.get('window').height,
    flexDirection: 'row',
    backgroundColor: '#fff'
  }
});


module.exports = Test