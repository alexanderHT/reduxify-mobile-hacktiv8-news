import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput
} from 'react-native';

const Form = (props) => {
  return (
    <TextInput
        onChange={props.onChange}
        placeholder=" search here ..."
        style={{height: 40, borderColor: 'green', borderWidth: 1, margin: 20}}
    />
  )
}

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
});

export default Form
