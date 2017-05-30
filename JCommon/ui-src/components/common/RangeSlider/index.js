import React from 'react';
import {Text, View} from 'react-native';
import Base from './styles';

export default class RangeSlider extends React.Component {
  render() {
    return (
      <View style={Base.container}>
        <Text style={Base.welcome}>RangeSlider</Text>
      </View>
    );
  }
}
