import React, {Component} from 'react';
import { AppRegistry,Text, View } from 'react-native';

import MainMenu from './Screens/MainMenu'; 

class Greeting extends Component {
  render() {
    return (
      <View style = {{ alignItems: 'center'}}>
        <Text>Welcome to {this.props.name} </Text>
      </View>
    )
  }
}
export default class App extends Component {
  render() {
    return (
      // <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}} >
      //   <Greeting name ='choreNinja' />
      //   <Text style ={{ justifyContent: 'center', alignItems: 'center' }}>
      //   This is mobile application to provide personal services</Text>
      // </View>
      <MainMenu />
    );
  }
}
AppRegistry.registerComponent('choreNinja', () => App);

