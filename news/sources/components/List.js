'use strict';

var LISTS_KEY = "ChinaFootball-home";

import React, {
  Text,
  View,
  TouchableOpacity,
  ListView,
  AsyncStorage,
  Navigator,
  Alert,
  RefreshControl,
  AppState,
  ActivityIndicatorIOS,
  Platform
} from 'react-native';

import ProgressBar from 'ProgressBarAndroid';
import Li from './Li';
import Detail from '../view/detail';
import {Actions}  from 'react-native-redux-router';


var ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});
var data = [
  {
    images: ["http://photo.l99.com/bigger/ab0/1459301431104_xdzd42.jpg","http://photo.l99.com/bigger/522/1459265462135_kvxz39.jpg","http://photo.l99.com/bigger/b23/1459331222319_c8eqx5.png"],
    createTime: "2016.5.19",
    author: {images:"", name:"张三", id:"111"},
    id: "12345",
    title:  "中国足球网",
    content:  "中国足球网2016.5.19张三111",
    createDate: "createDate"
  },
  {
    images: [],
    createTime: "2016.5.19",
    author: {images:"", name:"张三", id:"111"},
    id: "12345",
    title:  "中国足球网中国足球网中国足球网中国足球网中国足球网",
    content:  "中国足球网2016.5.19张三111",
    createDate: "createDate"
  },
  {
    images: ["http://photo.l99.com/bigger/522/1459265462135_kvxz39.jpg","http://photo.l99.com/bigger/b23/1459331222319_c8eqx5.png"],
    createTime: "2016.5.19",
    author: {images:"", name:"张三", id:"111"},
    id: "12345",
    title:  "中国足球网",
    content:  "中国足球网2016.5.19张三111",
    createDate: "createDate"
  },
  {
    images: ["http://photo.l99.com/bigger/b23/1459331222319_c8eqx5.png"],
    createTime: "2016.5.19",
    author: {images:"", name:"张三", id:"111"},
    id: "12345",
    title:  "中国足球网",
    content:  "中国足球网2016.5.19张三111",
    createDate: "createDate"
  },
  {
    images: ["http://photo.l99.com/bigger/b23/1459331222319_c8eqx5.png"],
    createTime: "2016.5.19",
    author: {images:"", name:"张三", id:"111"},
    id: "12345",
    title:  "中国足球网",
    content:  "中国足球网2016.5.19张三111",
    createDate: "createDate"
  },
  {
    images: ["http://photo.l99.com/bigger/ab0/1459301431104_xdzd42.jpg","http://photo.l99.com/bigger/522/1459265462135_kvxz39.jpg","http://photo.l99.com/bigger/b23/1459331222319_c8eqx5.png"],
    createTime: "2016.5.19",
    author: {images:"", name:"张三", id:"111"},
    id: "12345",
    title:  "中国足球网",
    content:  "中国足球网2016.5.19张三111",
    createDate: "createDate"
  },
  {
    images: [],
    createTime: "2016.5.19",
    author: {images:"", name:"张三", id:"111"},
    id: "12345",
    title:  "中国足球网",
    content:  "中国足球网2016.5.19张三111",
    createDate: "createDate"
  },
  {
    images: ["http://photo.l99.com/bigger/ab0/1459301431104_xdzd42.jpg","http://photo.l99.com/bigger/522/1459265462135_kvxz39.jpg","http://photo.l99.com/bigger/b23/1459331222319_c8eqx5.png"],
    createTime: "2016.5.19",
    author: {images:"", name:"张三", id:"111"},
    id: "12345",
    title:  "中国足球网",
    content:  "中国足球网2016.5.19张三111",
    createDate: "createDate"
  },
  {
    images: ["http://photo.l99.com/bigger/ab0/1459301431104_xdzd42.jpg","http://photo.l99.com/bigger/522/1459265462135_kvxz39.jpg","http://photo.l99.com/bigger/b23/1459331222319_c8eqx5.png"],
    createTime: "2016.5.19",
    author: {images:"", name:"张三", id:"111"},
    id: "12345",
    title:  "中国足球网",
    content:  "中国足球网2016.5.19张三111",
    createDate: "createDate"
  },
];

export default class List extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          datas:null, // 数据源
          loaded:true, // 是否正在加载
          isFetchMaxId:0, // 正在拉取的当前的数据的最大ID
          isRefreshing: false, // 是否正在刷新
      };
      this._renderList  = this._renderList.bind(this);
      this.onEndReached = this.onEndReached.bind(this);
      this._reloadLists = this._reloadLists.bind(this);
  }

  // 渲染每行post
  _renderList(data,sectionID,rowID) { 
      return (
        <View style = {{flex: 1}}>
          <TouchableOpacity activeOpacity={0.4} key={data.id} onPress={()=>this.navHandleChange(data)}>
            <Li data={data} />
          </TouchableOpacity>
          <View style = {{height: 0.5, backgroundColor:'#ddd'}}>
          </View>
        </View>
      );
  }

  // 进入详情页
  navHandleChange(data) {
    console.log("进入详情页 id="+data.id);
     Actions.detail({data:data});
  }

  // 下拉刷新
  _reloadLists() {
      this.setState({isRefreshing: true});
      setTimeout(() => {
        this.setState({isRefreshing: false});
      }, 1000);
  }

  // 加载指示器
  renderFooter() {
    if(Platform.OS === 'ios') {
        return (
          <View style={{height:40,alignItems:'center',justifyContent:'center'}}>
            <ActivityIndicatorIOS color = {'#d43d3d'} />
          </View>
        );
    } else {
      return (
        <View style={{height:40,alignItems:'center',justifyContent:'center'}}>
          <ProgressBar color = {'#d47b83'} styleAttr="Small" />
        </View>
      );
    }
  }

  // 数据加载到底部时候拉取新数据
  onEndReached() {
    console.log("ddddddddddddd");
  }

  render() {
    return (
      <View style={{flex: 1}} >
        <ListView style={{flex:1,overflow: 'hidden',marginBottom: (Platform.OS === 'ios')? 50: 0,}}
          initialListSize={10}
          pageSize={10}
          scrollRenderAheadDistance={50}
          removeClippedSubviews={true}
          dataSource={ds.cloneWithRows(data)} // 渲染的数据聚合
          renderRow={this._renderList}  // 单一条数模板
          minPulldownDistance={30}   // 最小下拉长度
          renderFooter={this.renderFooter}
          renderHeader={this.props.renderHeader}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={100}
          showsVerticalScrollIndicator={false}
          // refreshControl={
          //   <RefreshControl
          //     refreshing={this.state.isRefreshing}
          //     onRefresh={this._reloadLists}
          //     tintColor=  "#fff"
          //     title="正在拉取数据..."
          //   />
          // }
        />
      </View>
    );
    
  }

};

module.exports = List; 