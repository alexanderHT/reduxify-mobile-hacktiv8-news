import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Hacktiv8 News</Text>
    </View>
  )
}

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    height: deviceHeight * 0.07,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default Header
