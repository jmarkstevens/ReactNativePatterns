import React from 'react';
import {StyleSheet, View} from 'react-native';
import ProgressBar from '../common/ProgressBar';
import ReturnBtn from '../common/return.btn';

export default function ProgressBarPage() {
  return (
    <View style={styles.container}>
      <View style={styles.returnView}><ReturnBtn /></View>
      <ProgressBar />
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
