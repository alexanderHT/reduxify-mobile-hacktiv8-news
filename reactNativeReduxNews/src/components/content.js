import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

const Content = (props) => {
  return (
    <View style={styles.content}>
      {
        props.datas.map(data => { return <Text key={data.id} style={styles.contentText}>{data.title}</Text> })
      }
    </View>
  )
}

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  content: {
    height: deviceHeight * 0.80,
    alignItems: 'center'
  },
  contentText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4CAF50'
  }
});

export default Content
