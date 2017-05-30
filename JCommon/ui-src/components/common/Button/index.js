import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Base from './styles';

export default class Button extends React.Component {
  pressHandler = () => { if (this.props.onPress) this.props.onPress(this.props.id); };
  render() {
    let returnJsx;
    if (this.props.basic) {
      returnJsx = (
        <TouchableOpacity
          activeOpacity={0.8}
          style={[Base.basic, this.props.style]}
          onPress={this.pressHandler}
        >
          <Text style={Base.btnText}>{this.props.children}</Text>
        </TouchableOpacity>
      );
    } else if (this.props.text) {
      returnJsx = (
        <TouchableOpacity
          activeOpacity={0.8}
          style={[Base.basic, this.props.style]}
          onPress={this.pressHandler}
        >
          {this.props.children}
        </TouchableOpacity>
      );
    } else {
      returnJsx = (
        <TouchableOpacity
          activeOpacity={0.8}
          style={Base.view, this.props.style}
          onPress={this.pressHandler}
        >
          {this.props.children}
        </TouchableOpacity>
      );
    }
    return returnJsx;
  }
}
