/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import components and liblary
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducers from './src/reducers'
import  News from './src/AppNews.js'
import People from './src/AppPeoples.js'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

// store
const createStoreMiddleware = applyMiddleware()(createStore)

// class
export default class reactNativeReduxNews extends Component {

  // method go to news class
  goToNews(navigator){
    navigator.push({
      title: 'News'
    })
  }

  // method go to peoples class
  goToPeople(navigator){
    navigator.push({
      title: 'People'
    })
  }

  // rendering
  render() {
    return (
      <Provider store={createStoreMiddleware(rootReducers)}>
        <Navigator
          initialRoute={{ title: 'People', index: 0 }}
          renderScene={(route, navigator) => {
            switch (route.title) {
              case 'News': return <News navigator={navigator} goToPeople={()=> this.goToPeople(navigator)}/>
              case 'People': return <People navigator={navigator} goToNews={()=> this.goToNews(navigator)}/>
              default: return <News />
            }
          }}
        />
      </Provider>
    );
  }
}


AppRegistry.registerComponent('reactNativeReduxNews', () => reactNativeReduxNews);
