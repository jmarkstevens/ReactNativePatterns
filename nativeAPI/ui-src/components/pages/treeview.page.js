import React from 'react';
import {StyleSheet, View} from 'react-native';
import TreeView from '../common/TreeView';
import ReturnBtn from '../common/return.btn';

export default function TreeViewPage() {
  return (
    <View style={styles.container}>
      <View style={styles.returnView}><ReturnBtn /></View>
      <TreeView />
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
