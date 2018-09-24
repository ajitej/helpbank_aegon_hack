/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Image, View} from 'react-native';
import { StackActions, NavigationActions} from 'react-navigation';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    return {
      title: "Request Sent",
      headerTitleStyle: { textAlign: 'center', alignSelf: 'center', color: "#FFFFFF" },
      headerStyle: {
        backgroundColor: "#18319B", elevation: 0,
        shadowOpacity: 0, borderBottomColor: "#18319B"
      },
      headerLeft: null
    }
  };
    componentDidMount(){
        // setTimeout(()=>{
        //       const resetAction = StackActions.reset({
        //         index: 0,
        //         actions: [NavigationActions.navigate({ routeName: 'SignUp' })],
        //       });
        //     this.props.navigation.dispatch(resetAction);
        // },3000)
    }
    render() {
        return (
          <View style={styles.container}>
            <Image style={styles.logo} source={require('../Assets/noun_tick.png')} />
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
        height: 150,
        width: 150
      }
});
