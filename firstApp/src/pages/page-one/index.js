import React,{Component} from 'react';
import {StyleSheet,Text,View,Button} from 'react-native';
import styles from  './style';
import { StackNavigator } from 'react-navigation';

export default class firstPage extends Component {
  static navigationOptions = {
    title: 'First Page',
   };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Button
        onPress={() => navigate('secondPage')}
        title="Go to 2nd page"
        />
      </View>
    );
  }
}


