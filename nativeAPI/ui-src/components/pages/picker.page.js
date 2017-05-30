import React from 'react';
import {Picker, StyleSheet, View} from 'react-native';
import ReturnBtn from '../common/return.btn';

const Item = Picker.Item;

class PickerPage extends React.Component {
  state = {
    selected1: 'key1',
    color: 'red',
    mode: Picker.MODE_DIALOG,
  };
  onValueChange = (key: string, value: string) => {
    const newState = {};
    newState[key] = value;
    this.setState(newState);
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.returnView}><ReturnBtn /></View>
        <View style={styles.innerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={this.state.selected1}
            onValueChange={(value) => this.onValueChange('selected1', value)}
          >
            <Item label="hello" value="key0" />
            <Item label="world" value="key1" />
            <Item label="whats" value="keyw" />
            <Item label="up" value="keyu" />
            <Item label="with" value="keywith" />
            <Item label="you" value="keyyou" />
          </Picker>
          <Picker
            style={styles.picker}
            selectedValue={this.state.color}
            onValueChange={(value) => this.onValueChange('color', value)}
          >
            <Item label="red" color="red" value="red" />
            <Item label="green" color="green" value="green" />
            <Item label="blue" color="blue" value="blue" />
          </Picker>
        </View>
      </View>
    );
  }
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
  picker: {
    width: 100,
  },
});

module.exports = PickerPage;
