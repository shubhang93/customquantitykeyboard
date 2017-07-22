/**
 * Created by shubhangb on 29/06/17.
 */

import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';

const KEYS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export default class CustomQuantityKeyboard extends Component {
  render() {
    let { showKeyboard, onPress } = this.props;
    if (showKeyboard)
      return (
        <Animatable.View
          style={{
            flex: 1,
            backgroundColor: '#FCFEF5',
            height: 50,
            position: 'absolute',
            bottom: 0,
            left: 0,
            flexDirection: 'row',
          }}
          animation="fadeInUp"
        >
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              backgroundColor: 'purple',
              padding: 5,
            }}
          >
            {KEYS.map(key =>
              <KeyComponent key={key + 'XASD'} value={key} onPress={onPress} />,
            )}
          </View>
        </Animatable.View>
      );
    return <View />;
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
      padding: 5,
    }}
    onPress={() => props.onPress(props.value)}
  >
    <Text>
      {props.value}
    </Text>
  </TouchableOpacity>;

CustomQuantityKeyboard.propTypes = {
  showKeyboard: PropTypes.bool,
};

CustomQuantityKeyboard.defaultProps = {
  showKeyboard: false,
};
