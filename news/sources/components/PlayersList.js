/**
	playersList球员列表

  npm install react-native-grid-view
**/

'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} = React;

var GridView = require('react-native-grid-view');
var PLAYERS_PER_ROW = 3; // 每行显示个数
var Width = Dimensions.get('window').width;
// player对象
var Player = React.createClass({

  render: function() {
      var player = this.props.player;
      return (
      	<View style={styles.player}>
          <TouchableOpacity activeOpacity={0.4} onPress={()=>this.props.clickPlayer(player)}>
            <Image
              source={{uri: this.props.player.avatar}}
              style={styles.thumbnail}
            />
            <View style = {styles.titleLabelStyle}>
              <Text style={styles.info}>【{this.props.player.position}】{this.props.player.name}</Text>
            </View>
          </TouchableOpacity>
      	</View>
      )
  }
});

var PlayersList = React.createClass({

  render: function() {
    return (
      <GridView
        items={this.props.players} 
        itemsPerRow={PLAYERS_PER_ROW}	
        renderItem={this.renderItem}
        style={styles.listView}
      />
    );
  },

  renderItem: function(item) {
      return <Player player={item} clickPlayer={this.props.clickPlayer.bind(this, item)}/>
  }

});

var styles = StyleSheet.create({
  player: {
    width: (Width - 40)/3,
    height: (Width - 40)/3/0.75,
    flex: 1,
    padding: 10,
    marginBottom: 10
  },
  titleLabelStyle: {
    width: (Width - 40)/3,
    height: 25,
    bottom: 25,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgba(222,222,222,0.6)'
  },
  info: {
    fontSize: 10,
    textAlign: 'center',
  },
  thumbnail: {
    width: (Width - 40)/3,
    height: (Width - 40)/3/0.75,
  },
  listView: {

  },
});

module.exports = PlayersList;
