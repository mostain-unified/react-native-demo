import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';
import styles from  './style';

export default class secondPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to my second page
        </Text>
      </View>
    );
  }
}
