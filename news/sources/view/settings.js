import React from 'react';
import {
  StyleSheet,
    View,
    TouchableHighlight,
    Component,
    Text
} from 'react-native';

class Settings extends Component {
	render() {
    return (
      <View style={styles.container}>
        	<TouchableHighlight underlayColor='#DFDFDF'>
	        <View style={styles.section}>
	          <Text style={styles.sectionName}>Menu1</Text>
	        </View>
	      </TouchableHighlight>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#778899',
  },
  scrollView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 50,
  },
  section: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionName: {
    fontSize: 15,
    marginLeft: 10,
  },
});


module.exports = Settings