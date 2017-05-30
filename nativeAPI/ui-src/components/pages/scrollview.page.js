import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ReturnBtn from '../common/return.btn';

const NUM_ITEMS = 20;

export default function ScrollViewPage() {
  const makeItems = (nItems: number, styles): Array<any> => {
    var items = [];
    for (var i = 0; i < nItems; i++) {
      items[i] = (
        <TouchableOpacity key={i} style={styles}>
          <Text>{'Item ' + i}</Text>
        </TouchableOpacity>
      );
    }
    return items;
  };
  let items = makeItems(NUM_ITEMS, styles.itemWrapper);
  items[4] = (
    <ScrollView key={'scrollView'} horizontal>
      {makeItems(NUM_ITEMS, [styles.itemWrapper, styles.horizontalItemWrapper])}
    </ScrollView>
  );

  let verticalScrollView = (
    <ScrollView style={styles.verticalScrollView}>
      {items}
    </ScrollView>
  );
  return (
    <View style={styles.container}>
      <View style={styles.returnView}><ReturnBtn /></View>
      <View style={styles.innerContainer}>
        {verticalScrollView}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
  },
  innerContainer: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  returnView: {
    height: 35,
  },
  verticalScrollView: {
    margin: 10,
  },
  itemWrapper: {
    backgroundColor: '#dddddd',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 5,
    borderColor: '#114e21',
    padding: 30,
    margin: 5,
  },
  horizontalItemWrapper: {
    padding: 50
  },
});
