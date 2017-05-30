import React from 'react';
import {StyleSheet, Navigator} from 'react-native';
import {connect} from 'react-redux';

import AboutPage from './about.page';
import ContactPage from './contact.page';
import HomePage from './home.page';

const routes = [
  {title: 'home', index: 0},
  {title: 'about', index: 1},
  {title: 'contact', index: 2},
];

class AppCtrl extends React.Component {
  componentDidUpdate = (prevProps) => {
    if (prevProps.currentPage !== this.props.currentPage) {
      let route;
      switch (this.props.currentPage) {
        case 'home': route = routes[0]; break;
        case 'about': route = routes[1]; break;
        case 'contact': route = routes[2]; break;
      }
      this._navigator.replace(route);
    }
  };
  renderScene(route) {
    switch (route.index) {
      case 0: return <HomePage currentPage={route.title} />;
      case 1: return <AboutPage currentPage={route.title} />;
      case 2: return <ContactPage currentPage={route.title} />;
    }
  }
  render() {
    return (
      <Navigator
        ref={component => this._navigator = component}
        debugOverlay={false}
        style={styles.container}
        initialRoute={routes[0]}
        renderScene={this.renderScene}
      />
    );
  }
}

function mapStateToProps(store) {
  return {
    currentPage: store.currentPage,
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
  },
  navBarTitleText: {
    color: '#373E4D',
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
  },
  navBarRightButton: {
  },
  navBarButtonTextBlack: {
    color: '#000',
  },
  navBarButtonText: {
    color: '#5890FF',
  },
});

export default connect(mapStateToProps)(AppCtrl);
