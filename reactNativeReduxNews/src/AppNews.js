import React from 'react';
import { connect } from 'react-redux'
import Form from './components/Form.js'
import Header from './components/Header.js';
import Content from './components/content.js';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

class News extends React.Component {

 // constructor / state / props
 constructor(props){
   super(props);
   this.state = {
     news: [
       { id: 1, title: 'Buku React Native', url: 'http://www.google.com' },
       { id: 2, title: 'Macbook Pro', url: 'http://www.google.com' },
       { id: 3, title: 'Asus Zenfone', url: 'http://www.google.com' },
       { id: 4, title: 'Pisang Goreng', url: 'http://www.google.com' },
       { id: 5, title: 'Botol', url: 'http://www.google.com' },
       { id: 6, title: 'Dompet', url: 'http://www.google.com' },
       { id: 7, title: 'Kentang goreng', url: 'http://www.google.com' }
     ],
     currentTitle: ''
   };
 }

 // method set state currentTitle
 handleChange(e){
   console.log(e.nativeEvent.text);
   this.setState({
     currentTitle: e.nativeEvent.text
   });
 }

 // rendering
 render() {
   return (
     <View>
       <Header />
       <Button onPress={this.props.goToPeople} title="go to People" />
       <Form onChange={this.handleChange.bind(this)}/>
       <Content datas={this.state.news.filter(item => new RegExp(this.state.currentTitle, 'i').test(item.title))} />
     </View>
   );
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
export default connect(null, null)(News)
