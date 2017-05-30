import React from 'react';
import {StyleSheet, View} from 'react-native';
import Inputs from '../common/Inputs';

export default class InputsPage extends React.Component {
  static navigationOptions = {title: 'Inputs'};
  render() {
    return (
      <View style={styles.container}>
        <Inputs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center'
  },
  returnView: {
    height: 35
  }
});
