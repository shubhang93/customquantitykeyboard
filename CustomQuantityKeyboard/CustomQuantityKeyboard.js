/**
 * Created by shubhangb on 29/06/17.
 */

import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class CustomQuantityKeyboard extends Component {
  render() {
    return (
      <Animatable.View
        animation="fadeInUp"
        duration={1000}
        style={{ paddingTop: 50 }}
      >
        <Text>React JS</Text>
      </Animatable.View>
    );
  }
}
