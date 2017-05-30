import React from 'react';
import {Alert, Image, StyleSheet, Text, View} from 'react-native';
import Button from '../common/Button';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MAIcon from 'react-native-vector-icons/MaterialIcons';

const AnImage = require('../../img/SLogoS5-48_C.png');

function onPressBtn(id) {
  Alert.alert('Alert', `You clicked the ${id} button`);
}

export default class ButtonPage extends React.Component {
  static navigationOptions = {title: 'Button'};
  render() {
    return (
      <View style={styles.container}>
        <Button basic id="Basic" onPress={onPressBtn}>Basic Button</Button>
        <View style={styles.spacerView} />
        <Button basic id="Custom Style" onPress={onPressBtn} style={styles.customBtn}>Custom Style Button</Button>
        <View style={styles.spacerView} />
        <Button text id="Custom Text" onPress={onPressBtn}>
          <Text style={styles.btnText}>Custom Text Button</Text>
        </Button>
        <View style={styles.spacerView} />
        <Button id="FontAwesome Icon" onPress={onPressBtn}>
          <FAIcon name="globe" size={20} color="#04210a" />
        </Button>
        <View style={styles.spacerView} />
        <Button id="MaterialIcons Icon" onPress={onPressBtn}>
          <MAIcon name="local-florist" size={20} color="#04210a" />
        </Button>
        <View style={styles.spacerView} />
        <Button id="Image" onPress={onPressBtn}>
          <Image style={styles.imageSty} source={AnImage} />
        </Button>
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
  innerContainer: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center'
  },
  imageSty: {
    height: 20,
    width: 20
  },
  returnView: {
    height: 35
  },
  spacerView: {
    height: 5
  },
  btnText: {
    color: '#afa',
    fontSize: 12
  },
  customBtn: {
    backgroundColor: '#363313',
    borderRadius: 15,
    paddingHorizontal: 7,
    paddingVertical: 3
  }
});
