import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';

// import AppNotes from './app.notes';

function AppCtrl({fetchData, fetchThunkData, XMLHttpData}) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        {fetchData.Description}
      </Text>
      <Text style={styles.welcome}>
        {fetchData.setDateTime}
      </Text>
      <Text style={styles.welcome}>
        {fetchThunkData.Description}
      </Text>
      <Text style={styles.welcome}>
        {fetchThunkData.setDateTime}
      </Text>
      <Text style={styles.welcome}>
        {XMLHttpData.Description}
      </Text>
      <Text style={styles.welcome}>
        {XMLHttpData.setDateTime}
      </Text>
    </View>
  );
}

function mapStateToProps(store) {
  return {
    fetchData: store.fetchData,
    fetchThunkData: store.fetchThunkData,
    XMLHttpData: store.XMLHttpData
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 14,
    textAlign: 'left',
    margin: 10,
  }
});

export default connect(mapStateToProps)(AppCtrl);
