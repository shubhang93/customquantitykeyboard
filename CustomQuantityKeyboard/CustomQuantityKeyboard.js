/**
 * Created by shubhangb on 29/06/17.
 */

import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

const KEYS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export default class CustomQuantityKeyboard extends Component {
  render() {
    return (
      <Animatable.View
        animation="fadeInUp"
        duration={1000}
        style={{
          paddingTop: 50,
          flex: 1,
          flexDirection: 'row',
          backgroundColor: 'rgba(237, 237, 237, 1)',
          alignItems: 'center',
          justifyContent:'center',
          minHeight: 100,
        }}
      >
        {KEYS.map(key => <KeyComponent key={key + 'XASD'} value={key} />)}
      </Animatable.View>
    );
  }
}

const KeyComponent = props =>
  <TouchableOpacity
    style={{
      flex: 1,
      height: 30,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'rgba(0, 166, 255, 1)',
    }}
  >
    <Text>
      {props.value}
    </Text>
  </TouchableOpacity>;
