import React from 'react';
import {StyleSheet, View} from 'react-native';
import Gallery from '../common/Gallery';

export default class GalleryPage extends React.Component {
  static navigationOptions = {title: 'Gallery'};
  render() {
    return (
      <View style={styles.container}>
        <Gallery />
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
