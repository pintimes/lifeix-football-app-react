
import React from 'react-native';
const {
  Component,
  Image,
  TouchableOpacity
} = React;

export default class Left extends Component {
   
  render() {
    const icon = this.props.icon;
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Image
          source={require('../imgs/start_hightlight.png')}
          style={[{ margin:5,width: 20, height: 20, }, this.props.style]}/>
      </TouchableOpacity>
    );
  }
}