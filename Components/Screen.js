import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class Screen extends Component {
  render() {
    return (
      <WebView
        source={{
          uri: 'https://indexfand.com/'
        }}
        style={{ marginTop: 20 }}
      />
    );
  }
}

export default Screen