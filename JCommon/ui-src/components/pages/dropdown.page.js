import React from 'react';
import {StyleSheet, View} from 'react-native';
import DropDown from '../common/DropDown';

export default class DropDownPage extends React.Component {
  static navigationOptions = {title: 'DropDown'};
  render() {
    return (
      <View style={styles.container}>
        <DropDown />
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
