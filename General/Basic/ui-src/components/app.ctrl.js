import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class AppCtrl extends React.Component {
  state = {world: ''};
  componentWillMount = () => { this.sayHello(); };
  sayHello = () => { this.setState({world: 'Hello World!'}); };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.state.world}</Text>
      </View>
    );
  }
}

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
  },
});
