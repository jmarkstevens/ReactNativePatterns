import React from 'react';
import {StyleSheet, View} from 'react-native';
import ProgressBar from '../common/ProgressBar';

export default class ProgressBarPage extends React.Component {
  static navigationOptions = {title: 'ProgressBar'};
  render() {
    return (
      <View style={styles.container}>
        <ProgressBar />
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
