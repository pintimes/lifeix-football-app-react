import React ,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  WebView,
  Dimensions,PixelRatio,
  ScrollView,
} from 'react-native';
import NavigationBar from 'react-native-navigation-bar';
class Detail extends Component {
	render(){
		return(
			<View style={{flex:1}}>
				
			<View style={styles.content}>	          
				<WebView source={{uri: 'http://www.l99.com/EditText_view.action?textId=9530071'}}></WebView>	          
			</View>	
			</View>
		)
	}

	back(){
		this.props.navigator.pop();
	}
}

var styles = StyleSheet.create({
	content: {
	    marginTop:30+(Platform.OS === 'ios' ? 20 : 0),
	    backgroundColor:'#fff',
	    width: Dimensions.get('window').width,
	    flex:1,
	    borderColor:'#e6e6e6',
	    borderWidth: 1/PixelRatio.get(),
	  },
});

module.exports = Detail;