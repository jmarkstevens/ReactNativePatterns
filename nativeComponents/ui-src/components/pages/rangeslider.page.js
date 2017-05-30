import React from 'react';
import {StyleSheet, View} from 'react-native';
import RangeSlider from '../common/RangeSlider';
import ReturnBtn from '../common/return.btn';

export default function RangeSliderPage() {
  return (
    <View style={styles.container}>
      <View style={styles.returnView}><ReturnBtn /></View>
      <RangeSlider />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  returnView: {
    height: 35,
  },
});
