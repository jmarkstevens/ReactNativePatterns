import React from 'react';
import {Text, View} from 'react-native';
import Base from './styles';

export default class Inputs extends React.Component {
  render() {
    return (
      <View style={Base.container}>
        <Text style={Base.welcome}>Inputs</Text>
      </View>
    );
  }
}
