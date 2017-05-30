import React from 'react';
import {StyleSheet, View} from 'react-native';
import RangeSlider from '../common/RangeSlider';

export default class RangeSliderPage extends React.Component {
  static navigationOptions = {title: 'RangeSlider'};
  render() {
    return (
      <View style={styles.container}>
        <RangeSlider />
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
