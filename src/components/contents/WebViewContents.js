/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  WebView
} from 'react-native';

import {
  Container
} from 'native-base';

// react-native-router-fluxのインポート宣言(Actionを使用)
import { Actions } from 'react-native-router-flux';

// ページコンテンツ用の共通コンポーネント
import PageHeader from '../common/PageHeader';

export default class WebViewContents extends React.Component {

  // MARK: - Functions

  // ヘッダーの戻るボタンを押下した際の処理
  _onPressBackButton = () => {
    Actions.pop();
  };

  // MARK: - Rendering Components

  render() {
    // MEMO: この部分はWebページを表示するだけなので、RNRFからのパラメータを受け取ってURLを表示するような形にする
    const { headerTitle, linkUrl } = this.props;
    return (
      <Container style={styles.container}>
        <PageHeader title={headerTitle} onPressBackButton={ () => this._onPressBackButton() } />
        <WebView source={{ uri: linkUrl }} />
      </Container>
    );
  };
}

// MARK: - Component Styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee'
  }
});
