
import React from 'react-native';
const {
  Component,
  Image,
  TouchableOpacity
} = React;

export default class Left extends Component {
   

  onPress(){
        var Actions = this.props.routes;
       if (this.props.onPress){
           this.props.onPress();
           return;
       }
       if (this.props.navigator && this.props.navigator.getCurrentRoutes().length > 1){
           Actions.pop();
       }
  }

  render() {
    const icon = this.props.icon;
    return (
      <TouchableOpacity onPress={()=>this.onPress()}>
        <Image
          source={require('../imgs/start_hightlight.png')}
          style={[{ margin:5,width: 20, height: 20, }, this.props.style]}/>
      </TouchableOpacity>
    );
  }
}