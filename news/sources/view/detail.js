import React ,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
} from 'react-native';
import NavigationBar from 'react-native-navigation-bar';
class Detail extends Component {
	render(){
		return(
			<View>
				<NavigationBar 
				              title={this.props.title}
				              height={30}
				              titleColor={'#FCD116'}
				              backgroundColor={'#CE1126'}
				              //leftButtonIcon={require('../imgs/start_hightlight.png')}
				              leftButtonTitle={'back'}
				              //leftButtonTitleColor={'#fff'}
				              onLeftButtonPress={()=>this.back()} 
				              //rightButtonIcon={require('../imgs/start_hightlight.png')}
				              //rightButtonTitle={'中国足球网'}
				              //rightButtonTitleColor={'#CE1126'}
				              //onRightButtonPress={this.onForwardHandle}
				          />
			</View>
		)
	}

	back(){
		this.props.navigator.pop();
	}


}
module.exports = Detail;