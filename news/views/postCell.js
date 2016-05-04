
'use strict';

var PostsApi = require('./javascript-client/src/api/PostsApi');
var Cell = require('./cell');
var DetailCell = require('./detailCell');

import Dimensions from 'Dimensions';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity
} from'react-native';


var PostCell = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });
      return {
        dataSource: ds.cloneWithRows([]),
        show: false
      };
  },
  render: function() {
    return (
      <View>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
          />
      </View>
    );
  },
  componentDidMount: function() {
    this._getData();
  },
  // 渲染每一行 
  _renderRow: function(news) {
    console.log('====news:' + news);
    return (
      <TouchableOpacity onPress={() => this._pressRow(news.id)}>
        <View style = {styles.separate}>
          <Text>{news.id}</Text>
        </View>
      </TouchableOpacity>
    );
  },
  // 获取数据  
//   _getData: function() {
//     var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//     var that = this;
//     // 开启loading
//     this.setState({
//       show: false
//     });
//     fetch('http://192.168.50.19:8080/football/wemedia/posts?orderBy=commentTime&limit=10')
//     .then(res => res.json())
//     .then(res => this.updateDataSource(res))
//     .catch((error) => {
//       console.warn(error);
//     });
//   },
// updateDataSource: function(data) {
//   this.setState({
//     dataSource: this.state.dataSource.cloneWithRows(data)
//   })
// },

  _updateDataSource: function(data) {

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data)
    })
  },

  _getData: function() {
    var opts = null;
    var postsApi = new PostsApi();
    var that = this;
    postsApi.getPostList(opts, function(error,data) {
      if(!data) {
        alert(error);
      }
      // console.log(this );
      that._updateDataSource(data); 
    })
  },

  // 进入详情页
  _pressRow: function(id) {
    alert(id);
     this.props.navigator.push({
       component: DetailCell,
       title: 'Detail',
       passProps: id  
     });  
  }
});

var styles =StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  separate: {
    height: 30,
    backgroundColor: '#ccc'
  }
});

module.exports = PostCell;
