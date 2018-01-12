import React,{Component} from 'react';
import { AppRegistry,Text,View,Button} from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from  './Style';
import firstPage from './src/pages/page-one/index'
import secondPage from './src/pages/page-two/index';
import NavigationBar from 'react-native-navigation-bar';

class HomeScreen extends Component {
   
    static navigationOptions = {
      title: 'Home Page',
    };
    render() {
    //     <NavigationBar 
	// 	title={'this is a test'}
	// 	height={44}
	// 	titleColor={'#fff'}
	// 	backgroundColor={'#149be0'}
	// 	leftButtonIcon={}
	// 	leftButtonTitle={'back'}
	// 	leftButtonTitleColor={'#fff'}
	// 	onLeftButtonPress={onBackHandle} 
	// 	rightButtonIcon={}
	// 	rightButtonTitle={'forward'}
	// 	rightButtonTitleColor={'#fff'}
	// 	onRightButtonPress={onForwardHandle}
	// />
      const { navigate } = this.props.navigation;
      return (
        <View>
          <Text style={styles.welcome}>Welcome to react native app</Text>
          <Button
            onPress={() => navigate('firstPage')}
            title="Go to First page"
          />
        </View>
      );
    }
  }


export const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen },
    firstPage: { screen: firstPage},
    secondPage: { screen: secondPage},
  });

AppRegistry.registerComponent('firstApp', () => SimpleApp);