import React from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Button from '../common/Button';
import FAIcon from 'react-native-vector-icons/FontAwesome';

import {appNavigateAction} from '../../store/app.actions';

class ReturnBtn extends React.Component {
  navClick = (id) => { this.props.appNavigateAction(id); };
  render() {
    return (
      <View style={styles.container}>
        <Button id="Index" onPress={this.navClick}>
          <FAIcon name="reply" size={20} color="#04210a" />
        </Button>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({appNavigateAction}, dispatch);
}

export default connect(null, mapDispatchToProps)(ReturnBtn);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#aaa',
    flex: 1,
    justifyContent: 'center',
    paddingTop: 15,
  },
});
