/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import CustomQuantityKeyboard from './CustomQuantityKeyboard/CustomQuantityKeyboard';
export default class customquantitykeyboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomQuantityKeyboard />
      </View>
    );
  }
}

const styles = {
  container: {
    paddingTop: 200,
  },
};

AppRegistry.registerComponent(
  'customquantitykeyboard',
  () => customquantitykeyboard,
);
