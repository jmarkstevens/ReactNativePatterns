import React from 'react';
import {StyleSheet, View} from 'react-native';
import Inputs from '../common/Inputs';
import ReturnBtn from '../common/return.btn';

export default function InputsPage() {
  return (
    <View style={styles.container}>
      <View style={styles.returnView}><ReturnBtn /></View>
      <Inputs />
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
