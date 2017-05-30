import React from 'react';
import {Text, View} from 'react-native';
import Base from './styles';

export default class TreeView extends React.Component {
  clickHandler = () => { this.setState({world: 'Hello World!'}); };
  render() {
    return (
      <View style={Base.container}>
        <Text style={Base.welcome}>TreeView</Text>
      </View>
    );
  }
}
