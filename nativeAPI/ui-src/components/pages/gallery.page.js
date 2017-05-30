import React from 'react';
import {StyleSheet, View} from 'react-native';
import Gallery from '../common/Gallery';
import ReturnBtn from '../common/return.btn';

export default function GalleryPage() {
  return (
    <View style={styles.container}>
      <View style={styles.returnView}><ReturnBtn /></View>
      <Gallery />
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
