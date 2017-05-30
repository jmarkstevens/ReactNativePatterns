import React from 'react';
import {StyleSheet, View} from 'react-native';
import TreeView from '../common/TreeView';

export default class TreeViewPage extends React.Component {
  static navigationOptions = {title: 'TreeView'};
  render() {
    return (
      <View style={styles.container}>
        <TreeView />
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
