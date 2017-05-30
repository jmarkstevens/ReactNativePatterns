import React from 'react';
import {Text, View} from 'react-native';
import Base from './styles';

export default class ProgressBar extends React.Component {
  render() {
    return (
      <View style={Base.container}>
        <Text style={Base.welcome}>ProgressBar</Text>
      </View>
    );
  }
}
