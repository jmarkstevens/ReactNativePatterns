import React from 'react';
import {Text, View} from 'react-native';
import Base from './styles';

export default class DropDown extends React.Component {
  clickHandler = () => { this.setState({world: 'Hello World!'}); };
  render() {
    return (
      <View style={Base.container}>
        <Text style={Base.welcome}>DropDown</Text>
      </View>
    );
  }
}
