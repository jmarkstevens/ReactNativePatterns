import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const menuList = ['Button', 'DropDown', 'Gallery', 'Inputs', 'ProgressBar', 'RangeSlider', 'TreeView'];

class IndexPage extends React.Component {
  static navigationOptions = {title: 'Index'};
  render() {
    const {navigate} = this.props.navigation;
    const items = menuList.map(item => {
      return (
        <TouchableOpacity key={item} onPress={() => navigate(item)} style={styles.navBarButton}>
          <Text style={[styles.navBarText, styles.navBarButtonText]}>
            {item}
          </Text>
        </TouchableOpacity>
      );
    });
    return (
      <View style={styles.container}>
        {items}
      </View>
    );
  }
}

export default IndexPage;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center'
  },
  navBar: {
    backgroundColor: 'white'
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10
  },
  navBarButton: {},
  navBarButtonText: {
    color: '#000'
  }
});
