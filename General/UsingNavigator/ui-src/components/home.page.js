import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NavBar from './nav.bar';

export default function HomePage({currentPage}) {
  return (
    <View style={styles.container}>
      <View style={styles.navView}><NavBar currentPage={currentPage} /></View>
      <View style={styles.innerContainer}>
        <Text style={styles.welcome}>This is the Home page.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  navView: {
    height: 50,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
