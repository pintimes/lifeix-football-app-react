/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  Navigator 
} from 'react-native';
import {Router, routerReducer, Route, Container, Animations, Schema} from 'react-native-redux-router';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import Welcome from './view/welcome';
import Home from './view/home';
import Detail from './view/detail';
import Settings from './view/settings';

console.disableYellowBox=true;

let store = createStore(combineReducers({routerReducer}));

export default class App extends Component {
  constructor (props) {
    super(props)
  }
  
  render() {
    return this.renderRouter();
      /*<Navigator styles ={styles.container}
        initialRoute={{
          component: Welcome
        }}
        renderScene={(route, navigator) => { 
          return <route.component {...route.params} navigator={navigator}/>
        }}/>*/
    
  }

  renderRouter(){
    return (
      <Provider store={store}>
              <Router>
                     <Schema name="default" sceneConfig={Animations.FlatFloatFromRight} />
                     <Schema name="withoutAnimation" sceneConfig={Animations.FlatFloatFromBottom} />
                    <Route name="welcome" component={Welcome} initial={true} />
                    <Route name="home" component={Home} schema="withoutAnimation" title="Home" />
                    <Route name="detail" component={Detail} schema="withoutAnimation"/>
                     <Route name="settings" component={Settings} />
              </Router>
       </Provider> 
    )
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#CE1126',
  },
});
