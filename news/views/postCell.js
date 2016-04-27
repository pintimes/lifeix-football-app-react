
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
    console.log('news:' + news);
    return (
      <TouchableOpacity activeOpacity={0.4} onPress={()=>this._pressRow(news.id)}>
        <Cell data= {news} />
        <View style = {styles.separate}>
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
//     fetch('http://192.168.50.56:8080/football/wemedia/posts?orderBy=commentTime&limit=10')
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

  _getData: function() {
    var opts = null;
    var postsApi = new PostsApi();
    postsApi.getPostList(opts, function(data) {
      if(!data.length || !data) {
        return alert('获取列表出错');
      }
      console.log(data);
      this.setState({
        dataSource: ds.cloneWithRows(data),
        show: true
      });   
    }, function(err) {
      alert('err:' + err);
    });
  },

  // 进入详情页
  _pressRow: function(id) {
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
    height: 1,
    backgroundColor: '#ccc'
  }
});

module.exports = PostCell;







