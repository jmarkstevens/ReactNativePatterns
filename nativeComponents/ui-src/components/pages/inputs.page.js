import React from 'react';
import {StyleSheet, View} from 'react-native';
import Inputs from '../common/Inputs';

export default function InputsPage() {
  return (
    <View style={styles.container}>
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
