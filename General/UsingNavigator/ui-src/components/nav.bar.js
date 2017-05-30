import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {appNavMenuAction} from '../store/app.actions';

class NavBar extends React.Component {
  state = {targetID: 'none'};
  navClick = (id) => { this.props.appNavMenuAction(id); };
  render() {
    
    let aboutBtnSty = styles.navBarButtonText;
    let contactBtnSty = styles.navBarButtonText;
    let homeBtnSty = styles.navBarButtonText;
    switch (this.props.currentPage) {
      case 'home': homeBtnSty = styles.navBarButtonTextCurrent; break;
      case 'about': aboutBtnSty = styles.navBarButtonTextCurrent; break;
      case 'contact': contactBtnSty = styles.navBarButtonTextCurrent; break;
    }

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.navClick('home')}
          style={styles.navBarHomeButton}
        >
          <Text style={[styles.navBarText, homeBtnSty]}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.navClick('about')}
          style={styles.navBarAboutButton}
        >
          <Text style={[styles.navBarText, aboutBtnSty]}>
            About
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.navClick('contact')}
          style={styles.navBarContactButton}
        >
          <Text style={[styles.navBarText, contactBtnSty]}>
            Contact
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({appNavMenuAction}, dispatch);
}

export default connect(null, mapDispatchToProps)(NavBar);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#aaa',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
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
  navBarAboutButton: {
    paddingRight: 10,
  },
  navBarContactButton: {
  },
  navBarHomeButton: {
    paddingRight: 10,
  },
  navBarButtonText: {
    color: '#000',
  },
  navBarButtonTextCurrent: {
    color: '#5890FF',
  },
  scene: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#EAEAEA',
  },
});
