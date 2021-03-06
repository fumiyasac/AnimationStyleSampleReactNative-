
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import {
  Text
} from 'native-base';

export default class AuthFormErrorMessage extends React.Component {

  // MARK: - Rendering Components

  render() {
    const { errorMessage } = this.props;
    return (
      <View>
        <Text style={styles.message}>{errorMessage}</Text>
      </View>
    );
  };
}

// MARK: - Component Styles

const styles = StyleSheet.create({
  message: {
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 13,
    alignSelf: 'center',
    color: '#ff0000'
  }
});
