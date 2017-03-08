import React from 'react';
import { connect } from 'react-redux'
import Form from './components/Form.js'
import Header from './components/Header.js';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

class People extends React.Component {

  // constructor
   constructor(props) {
     super(props)
   }

  // rendering
  render() {
    return (
      <View>
        <Header />
        <Button onPress={this.props.goToNews} title="go to News" />
        {
          this.props.peoples.map( (data, index) => {
            return (
              <Text key={index} style={styles.contentText}>{data.name}</Text>
            )
          })
        }
      </View>
    );
  }

}

// global state to props
const mapStateToProps = (state) => {
  console.log("masuk");
  console.log(state);
  return {
    peoples: state.peoples
  }
}

// styling
const styles = StyleSheet.create({
  contentText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4CAF50'
  }
});

// export class
export default connect(mapStateToProps, null)(People)
