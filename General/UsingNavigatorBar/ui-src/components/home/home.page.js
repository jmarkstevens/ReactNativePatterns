import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>This is the Home page.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

module.exports = HomePage;
