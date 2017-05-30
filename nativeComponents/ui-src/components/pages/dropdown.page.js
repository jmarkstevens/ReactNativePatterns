import React from 'react';
import {StyleSheet, View} from 'react-native';
import DropDown from '../common/DropDown';
import ReturnBtn from '../common/return.btn';

export default function DropDownPage() {
  return (
    <View style={styles.container}>
      <View style={styles.returnView}><ReturnBtn /></View>
      <DropDown />
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
