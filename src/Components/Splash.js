/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Image, View,AppState,AsyncStorage,PushNotificationIOS } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  static navigationOptions = {
    header: null,
  };
  componentDidMount() {
    // PushNotificationIOS.requestPermissions();
    // AppState.addEventListener('change', this._handleAppStateChange);
    // PushNotificationIOS.addEventListener('localNotification',this.handle)
    setTimeout(async () => {
      try {
        // AsyncStorage.clear();
        const value = await AsyncStorage.getItem('UserData');
        var resetAction;
        if (value !== null) {
          resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Home' })],
          });
        }else{
          resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'SignIn' })],
          });
        }
      this.props.navigation.dispatch(resetAction);

      } catch (error) {
        // Error retrieving data
      }
    }, 3000)
  }

  _handleAppStateChange = (nextAppState) => {
    if (true) {
      // PushNotificationIOS.presentLocalNotification(
      //   {
      //     alertBody: 'New Help Request Received, Click to Proceed'
      //   }
      // );
      // this.props.navigation.navigate('Review')
      // console.log('App has come to the foreground!')
    }
    // this.setState({appState: nextAppState});
  }

  handle = (res) =>{
    // console.log(res);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../Assets/splash.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#18319B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
  }
});
