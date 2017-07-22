/**
 * Created by shubhangb on 30/06/17.
 */

import React, { Component } from 'react';
import { TextInput, View, Text, Keyboard, ScrollView } from 'react-native';
import CustomQuantityKeyboard from './CustomQuantityKeyboard';

class InputRefsTest extends Component {
  constructor(props) {
    super(props);
    this._inputNodes = new Map();
    this.state = {
      text: '',
      prevFocusedInputId: undefined,
      showKeyboard: false,
    };
  }

  _createRefToInputNode = (i, c) => this._inputNodes.set(i, c);

  _deselectPreviouslyFocusedInputNode = id => {
    if (!id) return false;
    let InputNode = this._inputNodes.get(id);
    InputNode.setNativeProps({ style: { borderColor: 'black' } });
  };

  _dismissKeyboardOnFocus = id => {
    Keyboard.dismiss();
    this.setState(prevState => ({
      ...prevState,
      showKeyboard: true,
    }));
    let { prevFocusedInputId } = this.state;
    this._deselectPreviouslyFocusedInputNode(prevFocusedInputId);
    let InputNodeFocused = this._inputNodes.get(id);
    InputNodeFocused.setNativeProps({
      text: '',
      style: { borderColor: 'blue' },
    });
    this.setState({ prevFocusedInputId: id });
  };

  render() {
    return (
      <View style={{ paddingTop: 10, flex: 1 }}>
        <Text>Test</Text>
        {[1, 2].map(id =>
          <TextInput
            key={id}
            placeholder="Enter Text"
            style={{ height: 50, borderWidth: 1 }}
            ref={c => {
              this._createRefToInputNode(id, c);
            }}
            onFocus={() => this._dismissKeyboardOnFocus(id)}
          />,
        )}

        <CustomQuantityKeyboard
          showKeyboard={this.state.showKeyboard}
          onPress={value => console.log({ value })}
        />
      </View>
    );
  }
}
export default InputRefsTest;
