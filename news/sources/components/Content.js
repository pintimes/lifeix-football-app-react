import React ,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
  RefreshControl,
  Dimensions,
  ListView
} from 'react-native';

var data = [
      {commentNum: 1,
       imgs:["http://photo.l99.com/bigger/ab0/1459301431104_xdzd42.jpg","http://photo.l99.com/bigger/522/1459265462135_kvxz39.jpg","http://photo.l99.com/bigger/b23/1459331222319_c8eqx5.png"],
       title: "用胜利回敬谩骂——国足奇迹夜后记"
      },
      {commentNum: 1,
       imgs:
         ["http://photo.l99.com/bigger/5ac/1433940289400_iwu9f3.jpg","http://photo.l99.com/common/2e/1427099521414_6ak5rg.jpg"],
       title: "球场暴力事件不断 中国男足还有希望吗？ 这是一个超级长的标题"
      },
      {commentNum: 1,
       imgs:
        ["http://photo.l99.com/common/30/1394108924725_45gms8.jpg","http://photo.l99.com/common/31/1379550201457_1cb678.png"],
       title: "习大普奔，国运强则球运兴！"
      },
      {commentNum: 1,
       imgs:
         ["http://photo.l99.com/common/31/1371533509639_p3h709.jpg","http://photo.l99.com/common/03/1380015225428_h7dz1t.png"],
       title: "女足门将身高1.87米长相清秀 惊艳抢镜(图)"
      },
      {commentNum: 1,
       imgs:
        ["http://photo.l99.com/common/23/1343755872868_t7fnd5.png","http://photo.l99.com/common/22/1353890154186_nr5m4g.gif"],
       title: "亚洲杯-吴曦孙可造逆转 国足2-1胜提前锁头名出线"
      },{commentNum: 1,
       imgs:
        ["http://photo.l99.com/bigger/13/1411438559983_54e33v.jpg"],
       title: "特评：击败宿命出线 可这样的国奥又有啥希望"
      },{commentNum: 1,
       title: "中国代表团未透露旗手人选 需考虑运动员形象"
      }
];

import ScrollImages from './ScrollImages';
//头部滚动菜单
var Content = React.createClass({
  
  getInitialState() {
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      return {
        isRefreshing: false,
        dataSource: ds.cloneWithRows(data),
      };
    },
  render(){
    return (
      <ScrollView contentContainerStyle = {styles.contentContainer} showsVerticalScrollIndicator = {false}
        refreshControl={
              <RefreshControl
                refreshing={this.state.isRefreshing}
                onRefresh={this._onRefresh}
                // tintColor="#ff0000"
                title="正在努力加载中..."
                colors={['#ff0000', '#00ff00', '#0000ff']}
                progressBackgroundColor="#ffff00"
              />
        }
       >
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.title}</Text>}
          renderHeader={()=> <ScrollImages navigator={this.props.navigator} data={data} />}
        />
      </ScrollView>
    );
  },
  _onRefresh() {
      this.setState({isRefreshing: true});
      setTimeout(() => {
        this.setState({
          isRefreshing: false,
        });
      }, 2000);
    }

})

var styles = StyleSheet.create({
  contentContainer: {
    height: Dimensions.get('window').height,
    flexDirection: 'row'
  }
});

module.exports = Content;

