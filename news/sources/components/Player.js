import React ,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
  RefreshControl,
  Dimensions,
} from 'react-native';

import PlayersList from './PlayersList';
import ScrollMenu from './ScrollMenu';
var data = [
    [
        {
            "id": "3",
            "name": "任航",
            "country": "中国",
            "avatar": "http://photo.l99.com/bigger/ab0/1459301431104_xdzd42.jpg",
            "birthday": 604195200000,
            "birthplace": " 沈阳市",
            "height": 185,
            "weight": 77,
            "position": "gk",
            "record": {
                "playerId": 3,
                "gamesplayed": 24,
                "starts": 22,
                "substitution": 2,
                "assists": 1,
                "bookings": 6
            },
            "jeserysNum": 3
        },
        {
            "id": "2",
            "name": "张琳芃",
            "country": "中国",
            "avatar": "http://photo.l99.com/bigger/ab0/1459301431104_xdzd42.jpg",
            "birthday": 610675200000,
            "birthplace": " 济南市",
            "height": 185,
            "weight": 80,
            "position": "gk",
            "record": {
                "playerId": 2,
                "gamesplayed": 49,
                "starts": 48,
                "substitution": 1,
                "goals": 5,
                "assists": 1,
                "bookings": 10,
                "dismissals": 1
            },
            "jeserysNum": 2
        },
        {
            "id": "1",
            "name": "吴曦",
            "country": "中国",
            "avatar": "http://photo.l99.com/bigger/ab0/1459301431104_xdzd42.jpg",
            "birthday": 603849600000,
            "birthplace": " 保定市",
            "height": 180,
            "weight": 75,
            "position": "gk",
            "record": {
                "playerId": 1,
                "gamesplayed": 35,
                "starts": 27,
                "substitution": 8,
                "goals": 2,
                "assists": 4,
                "bookings": 1
            },
            "jeserysNum": 1
        },
        {
            "id": "10",
            "name": "张玉宁",
            "country": "中国",
            "avatar": "http://photo.l99.com/bigger/ab0/1459301431104_xdzd42.jpg",
            "birthday": 852422400000,
            "birthplace": " 温州市",
            "height": 183,
            "weight": 69,
            "position": "df",
            "jeserysNum": 10
        },
        {
            "id": "9",
            "name": "蒿俊闵",
            "country": "中国",
            "avatar": "http://photo.l99.com/bigger/ab0/1459301431104_xdzd42.jpg",
            "birthday": 543542400000,
            "birthplace": " 武汉市",
            "height": 181,
            "weight": 74,
            "position": "df",
            "record": {
                "playerId": 9,
                "gamesplayed": 53,
                "starts": 38,
                "substitution": 15,
                "goals": 11,
                "bookings": 3
            },
            "jeserysNum": 9
        },
        {
            "id": "8",
            "name": "荣昊",
            "country": "中国",
            "avatar": "http://photo.l99.com/bigger/ab0/1459301431104_xdzd42.jpg",
            "birthday": 544752000000,
            "birthplace": " 武汉市",
            "height": 177,
            "weight": 67,
            "position": "df",
            "record": {
                "playerId": 8,
                "gamesplayed": 42,
                "starts": 39,
                "substitution": 3,
                "assists": 1,
                "bookings": 2
            },
            "jeserysNum": 8
        },
        {
            "id": "7",
            "name": "冯潇霆",
            "country": "中国",
            "avatar": "http://photo.l99.com/bigger/ab0/1459301431104_xdzd42.jpg",
            "birthday": 498787200000,
            "birthplace": " 大连市",
            "height": 186,
            "weight": 78,
            "position": "df",
            "record": {
                "playerId": 7,
                "gamesplayed": 50,
                "starts": 38,
                "substitution": 12,
                "bookings": 3
            },
            "jeserysNum": 7
        },
        {
            "id": "6",
            "name": "蔡慧康",
            "country": "中国",
            "avatar": "http://photo.l99.com/bigger/ab0/1459301431104_xdzd42.jpg",
            "birthday": 623980800000,
            "birthplace": " 上海市",
            "height": 183,
            "weight": 82,
            "position": "df",
            "record": {
                "playerId": 6,
                "gamesplayed": 17,
                "starts": 14,
                "substitution": 3,
                "bookings": 2
            },
            "jeserysNum": 6
        },
    ],
    [
        {
            "id": "3",
            "name": "任航",
            "country": "中国",
            "avatar": "http://photo.l99.com/bigger/ab0/1459301431104_xdzd42.jpg",
            "birthday": 604195200000,
            "birthplace": " 沈阳市",
            "height": 185,
            "weight": 77,
            "position": "gk",
            "record": {
                "playerId": 3,
                "gamesplayed": 24,
                "starts": 22,
                "substitution": 2,
                "assists": 1,
                "bookings": 6
            },
            "jeserysNum": 3
        },
        {
            "id": "2",
            "name": "张琳芃",
            "country": "中国",
            "avatar": "http://photo.l99.com/bigger/ab0/1459301431104_xdzd42.jpg",
            "birthday": 610675200000,
            "birthplace": " 济南市",
            "height": 185,
            "weight": 80,
            "position": "gk",
            "record": {
                "playerId": 2,
                "gamesplayed": 49,
                "starts": 48,
                "substitution": 1,
                "goals": 5,
                "assists": 1,
                "bookings": 10,
                "dismissals": 1
            },
            "jeserysNum": 2
        },
        {
            "id": "1",
            "name": "吴曦",
            "country": "中国",
            "avatar": "http://photo.l99.com/bigger/ab0/1459301431104_xdzd42.jpg",
            "birthday": 603849600000,
            "birthplace": " 保定市",
            "height": 180,
            "weight": 75,
            "position": "gk",
            "record": {
                "playerId": 1,
                "gamesplayed": 35,
                "starts": 27,
                "substitution": 8,
                "goals": 2,
                "assists": 4,
                "bookings": 1
            },
            "jeserysNum": 1
        },
        {
            "id": "10",
            "name": "张玉宁",
            "country": "中国",
            "avatar": "http://photo.l99.com/bigger/ab0/1459301431104_xdzd42.jpg",
            "birthday": 852422400000,
            "birthplace": " 温州市",
            "height": 183,
            "weight": 69,
            "position": "df",
            "jeserysNum": 10
        },
    ],
    [
        {
            "id": "3",
            "name": "任航",
            "country": "中国",
            "avatar": "http://photo.l99.com/bigger/ab0/1459301431104_xdzd42.jpg",
            "birthday": 604195200000,
            "birthplace": " 沈阳市",
            "height": 185,
            "weight": 77,
            "position": "gk",
            "record": {
                "playerId": 3,
                "gamesplayed": 24,
                "starts": 22,
                "substitution": 2,
                "assists": 1,
                "bookings": 6
            },
            "jeserysNum": 3
        },
        {
            "id": "2",
            "name": "张琳芃",
            "country": "中国",
            "avatar": "http://photo.l99.com/bigger/ab0/1459301431104_xdzd42.jpg",
            "birthday": 610675200000,
            "birthplace": " 济南市",
            "height": 185,
            "weight": 80,
            "position": "gk",
            "record": {
                "playerId": 2,
                "gamesplayed": 49,
                "starts": 48,
                "substitution": 1,
                "goals": 5,
                "assists": 1,
                "bookings": 10,
                "dismissals": 1
            },
            "jeserysNum": 2
        },
        {
            "id": "1",
            "name": "吴曦",
            "country": "中国",
            "avatar": "http://photo.l99.com/bigger/ab0/1459301431104_xdzd42.jpg",
            "birthday": 603849600000,
            "birthplace": " 保定市",
            "height": 180,
            "weight": 75,
            "position": "gk",
            "record": {
                "playerId": 1,
                "gamesplayed": 35,
                "starts": 27,
                "substitution": 8,
                "goals": 2,
                "assists": 4,
                "bookings": 1
            },
            "jeserysNum": 1
        },
        {
            "id": "10",
            "name": "张玉宁",
            "country": "中国",
            "avatar": "http://photo.l99.com/bigger/ab0/1459301431104_xdzd42.jpg",
            "birthday": 852422400000,
            "birthplace": " 温州市",
            "height": 183,
            "weight": 69,
            "position": "df",
            "jeserysNum": 10
        },
        {
            "id": "2",
            "name": "张琳芃",
            "country": "中国",
            "avatar": "http://photo.l99.com/bigger/ab0/1459301431104_xdzd42.jpg",
            "birthday": 610675200000,
            "birthplace": " 济南市",
            "height": 185,
            "weight": 80,
            "position": "gk",
            "record": {
                "playerId": 2,
                "gamesplayed": 49,
                "starts": 48,
                "substitution": 1,
                "goals": 5,
                "assists": 1,
                "bookings": 10,
                "dismissals": 1
            },
            "jeserysNum": 2
        },
    ],
    [
        {
            "id": "2",
            "name": "张琳芃",
            "country": "中国",
            "avatar": "http://photo.l99.com/bigger/ab0/1459301431104_xdzd42.jpg",
            "birthday": 610675200000,
            "birthplace": " 济南市",
            "height": 185,
            "weight": 80,
            "position": "gk",
            "record": {
                "playerId": 2,
                "gamesplayed": 49,
                "starts": 48,
                "substitution": 1,
                "goals": 5,
                "assists": 1,
                "bookings": 10,
                "dismissals": 1
            },
            "jeserysNum": 2
        },
        {
            "id": "1",
            "name": "吴曦",
            "country": "中国",
            "avatar": "http://photo.l99.com/bigger/ab0/1459301431104_xdzd42.jpg",
            "birthday": 603849600000,
            "birthplace": " 保定市",
            "height": 180,
            "weight": 75,
            "position": "gk",
            "record": {
                "playerId": 1,
                "gamesplayed": 35,
                "starts": 27,
                "substitution": 8,
                "goals": 2,
                "assists": 4,
                "bookings": 1
            },
            "jeserysNum": 1
        },
        {
            "id": "10",
            "name": "张玉宁",
            "country": "中国",
            "avatar": "http://photo.l99.com/bigger/ab0/1459301431104_xdzd42.jpg",
            "birthday": 852422400000,
            "birthplace": " 温州市",
            "height": 183,
            "weight": 69,
            "position": "df",
            "jeserysNum": 10
        },
     ],
     [
        {
            "id": "3",
            "name": "任航",
            "country": "中国",
            "avatar": "http://photo.l99.com/bigger/ab0/1459301431104_xdzd42.jpg",
            "birthday": 604195200000,
            "birthplace": " 沈阳市",
            "height": 185,
            "weight": 77,
            "position": "gk",
            "record": {
                "playerId": 3,
                "gamesplayed": 24,
                "starts": 22,
                "substitution": 2,
                "assists": 1,
                "bookings": 6
            },
            "jeserysNum": 3
        },
        {
            "id": "2",
            "name": "张琳芃",
            "country": "中国",
            "avatar": "http://photo.l99.com/bigger/ab0/1459301431104_xdzd42.jpg",
            "birthday": 610675200000,
            "birthplace": " 济南市",
            "height": 185,
            "weight": 80,
            "position": "gk",
            "record": {
                "playerId": 2,
                "gamesplayed": 49,
                "starts": 48,
                "substitution": 1,
                "goals": 5,
                "assists": 1,
                "bookings": 10,
                "dismissals": 1
            },
            "jeserysNum": 2
        },
        {
            "id": "1",
            "name": "吴曦",
            "country": "中国",
            "avatar": "http://photo.l99.com/bigger/ab0/1459301431104_xdzd42.jpg",
            "birthday": 603849600000,
            "birthplace": " 保定市",
            "height": 180,
            "weight": 75,
            "position": "gk",
            "record": {
                "playerId": 1,
                "gamesplayed": 35,
                "starts": 27,
                "substitution": 8,
                "goals": 2,
                "assists": 4,
                "bookings": 1
            },
            "jeserysNum": 1
        },
        {
            "id": "10",
            "name": "张玉宁",
            "country": "中国",
            "avatar": "http://photo.l99.com/bigger/ab0/1459301431104_xdzd42.jpg",
            "birthday": 852422400000,
            "birthplace": " 温州市",
            "height": 183,
            "weight": 69,
            "position": "df",
            "jeserysNum": 10
        },
    ]
];

var PlayerContent = React.createClass({
  getInitialState() {
    return {
        selectIndex: 0
    }
  },

  render(){
    var index = this.state.selectIndex;
    return (
      <View style = {styles.container}>
        <ScrollMenu onChangeTab={this.onChangeTab}/>
        <PlayersList players = {data[index]} clickPlayer = {this.clickPlayer} />
      </View>
    );
  },

  clickPlayer(item) {
    console.log("clickPlayer");
  },

  onChangeTab(e) {
    this.setState({selectIndex: e.i});
  }

})

var styles = StyleSheet.create({
  container: {
    flex: 1
  }, 
});

module.exports = PlayerContent;

