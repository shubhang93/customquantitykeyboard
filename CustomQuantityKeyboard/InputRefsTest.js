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
    this._currentlySelectedInputNode = undefined;
    this._inputValue = '';
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
    InputNode.blur();
  };

  _dismissKeyboardOnFocus = id => {
    this._currentlySelectedInputNode = id;
    Keyboard.dismiss();
    this.setState(prevState => ({
      ...prevState,
      showKeyboard: true,
    }));
    this._inputValue = '';
    let { prevFocusedInputId } = this.state;
    this._deselectPreviouslyFocusedInputNode(prevFocusedInputId);
    let InputNodeFocused = this._inputNodes.get(id);
    console.log({ InputNodeFocused });
    InputNodeFocused.setNativeProps({
      text: '',
      style: { borderColor: 'blue' },
    });
    this.setState({ prevFocusedInputId: id });
  };

  _handleTextInputChange = value => {
    let tempInputString = this._inputValue.concat(`${value}`);
    let truncatedTempInputString = tempInputString.slice(0, 3);
    let InputFocused = this._inputNodes.get(this._currentlySelectedInputNode);
    this._inputValue = truncatedTempInputString;
    InputFocused.setNativeProps({
      text: truncatedTempInputString,
    });
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
          onPress={value => this._handleTextInputChange(value)}
        />
      </View>
    );
  }
}
export default InputRefsTest;
