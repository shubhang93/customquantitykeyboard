/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import CustomQuantityKeyboard from './CustomQuantityKeyboard/CustomQuantityKeyboard';
import InputRefsTest from './CustomQuantityKeyboard/InputRefsTest';
export default class customquantitykeyboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <InputRefsTest/>
      </View>
    );
  }
}

const styles = {
  container: {
    paddingTop: 50,
    flex: 1,
  },
};

AppRegistry.registerComponent(
  'customquantitykeyboard',
  () => customquantitykeyboard,
);
