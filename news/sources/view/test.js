import React from 'react';
import {
  StyleSheet,
    View,
    Component,
    Text,
    ListView
} from 'react-native';

import SideMenu from 'react-native-side-menu'
import Settings from './settings'
class Test extends Component {
  constructor(props) {
    super(props);
    // 数据源
    var category = {"C-F.com中国足球":["首页", "资讯", "教练", "裁判"], "球员":["男足", "女足"], "教学":["视频教程", "模拟测试"]};
  
  }


  render() {
    return (
        <SideMenu menu={menu} isOpen={this.state.isOpen}
                    onChange={(isOpen) => this.updateMenuState(isOpen)}>
                
                <View style={styles.container}>
                  
                    <View style = {styles.content}>
                      <Content navigator={this.props.navigator} />
                    </View>
                </View>
                </SideMenu>
    );
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#778899',
  },
 
});


module.exports = Test