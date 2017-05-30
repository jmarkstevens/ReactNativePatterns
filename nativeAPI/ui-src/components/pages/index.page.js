import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {appNavigateAction} from '../../store/app.actions';

const menuList = [
  'ActivityIndicator',
  'Button',
  'Modal',
  'Picker',
  'ScrollView',
  'Slider',
  'StatusBar'
];

class IndexPage extends React.Component {
  static navigationOptions = {title: 'Index',};
  render() {
    const {navigate} = this.props.navigation;
    const items = menuList.map((item) => {
      return (
        <TouchableOpacity
          key={item}
          onPress={() => navigate(item)}
          style={styles.navBarButton}
        >
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({appNavigateAction}, dispatch);
}

export default connect(null, mapDispatchToProps)(IndexPage);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  navBar: {
    backgroundColor: 'white',
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarButton: {
  },
  navBarButtonText: {
    color: '#000',
  },
});
