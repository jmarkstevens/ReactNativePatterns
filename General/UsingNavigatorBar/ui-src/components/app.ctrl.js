import React from 'react';
import {StyleSheet, Navigator, Text, TouchableOpacity} from 'react-native';

import AboutPage from './about/about.page';
import HomePage from './home/home.page';

const routes = [
  {title: 'Home', index: 0},
  {title: 'About', index: 1},
];

var NavigationBarRouteMapper = {

  LeftButton: function(route, navigator, index) {
    if (index === 0) {
      return null;
    }

    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}
      >
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          Home
        </Text>
      </TouchableOpacity>
    );
  },

  RightButton: function(route, navigator, index) {
    if (index === 1) {
      return null;
    }
    return (
      <TouchableOpacity
        onPress={() => navigator.push(routes[1])}
        style={styles.navBarRightButton}
      >
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          About
        </Text>
      </TouchableOpacity>
    );
  },

  Title: function(route) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.title}
      </Text>
    );
  },

};

export default class AppCtrl extends React.Component {
  renderScene(route, navigator) {
    if (route.index === 0) return <HomePage navigator={navigator} />;
    else return <AboutPage navigator={navigator} />;
  }
  render() {
    return (
      <Navigator
        debugOverlay={false}
        style={styles.appContainer}
        initialRoute={routes[0]}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={styles.navBar}
          />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    backgroundColor: 'white',
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: '#373E4D',
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  navBarButtonText: {
    color: '#5890FF',
  },
  scene: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#EAEAEA',
  },
});
