import React from 'react';
import {
  StyleSheet,
    View,
    Component,
    Text,
    ListView,
    TouchableOpacity
} from 'react-native';

import {Actions}  from 'react-native-redux-router';

var that ;
class Settings extends  Component {
  constructor(props) {
    super(props);
    // 数据源
    var category = {"C-F.com中国足球":["首页", "资讯", "教练", "裁判"], "球员":["男足", "女足"], "教学":["视频教程", "模拟测试"]};
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2,
                                      sectionHeaderHasChanged: (s1, s2) => s1 !== s2});
    this.state = {
      dataSource: ds.cloneWithRowsAndSections(category)
    };
    that = this;
  }

// 渲染每行 onPress={this.clickCategory.bind(this, data)}
  _renderList(data,sectionData, sectionID) {

    return (
      <TouchableOpacity activeOpacity={0.4} onPress={()=>that.clickCategory(data)}>
      <View style = {{flex: 1, height: 44, justifyContent: 'center'}} >
        <Text style = {styles.cate}>{data}</Text>
        <View style = {{height: 0.5, backgroundColor: '#ddd', marginTop: 14}}>
        </View>
      </View>
      </TouchableOpacity>
    );
  }

  renderFooter() {
    return (
      <View style = {styles.footer}>
        <Text style = {styles.footerText} onPress={this.clickAbout}>关于</Text>
        <Text style = {styles.footerText, {marginLeft: 30}} onPress={this.clickSuggest}>建议</Text>
      </View>
    )
  }

// 渲染分区标题
  renderSectionHeader(sectionData, sectionID) {
      if(sectionID === "C-F.com中国足球"){
        return (
          <Text style = {styles.title}>{sectionID}</Text>
        )
      }
      return (
        <View style = {styles.sectionHeader}>
          <Text style = {styles.sectionName}>{sectionID}</Text>
        </View>
      )
  }

  render() {
    return (
      <View style={styles.container}>
            <ListView style={{flex:1,overflow: 'hidden',marginBottom: 20, marginTop: 20}}
              removeClippedSubviews={true}
              dataSource={this.state.dataSource} // 渲染的数据聚合
              renderRow={this._renderList}  // 单一条数模板
              renderFooter={this.renderFooter}
              showsVerticalScrollIndicator={false}
              renderSectionHeader={this.renderSectionHeader}
              scrollEnabled={false}
            />
      </View>
    );
  }

  // clickEvent
  clickCategory(data) {
        console.log(data+"  ===categor");
        Actions.home({title:data,componentName:'test'});
  }

  clickAbout() {
    console.log("关于");
  }

  clickSuggest() {
    console.log("建议");
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#778899',
  },
  title: {
    fontSize: 25,
    color: '#ccc',
    marginLeft: 20
  },
  sectionName: {
    fontSize: 15,
    marginLeft: 10,
  },
  cate: {
    fontSize: 22,
    marginLeft: 40
  },
  footer: {
    flexDirection: 'row',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50
  },
  footerText: {
    fontSize: 16
  },
  sectionHeader: {
    backgroundColor: '#ddd',
    height: 25,
    justifyContent: 'center'
  }
});

module.exports = Settings