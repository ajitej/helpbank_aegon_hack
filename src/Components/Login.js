/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { TouchableOpacity, Platform, StyleSheet, TextInput, Text, View, Image } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Login extends Component<Props> {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      mobile: '',
      password: ''
    };
  }

  login() {
    if (this.state.mobile.length == 10 && this.state.password.length) {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Home' })],
      });
      this.props.navigation.dispatch(resetAction);
    }else
    {
      alert("Authentication Error")
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageView}><Image source={require('../Assets/HelpBank.png')} /></View>
        <View style={{ flex: 0.5 }}></View>
        <View style={{ flex: 2, marginLeft: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "#FFFFFF" }}> LOG IN </Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
              <Text style={{ color: "#8BA1FF" }}> SIGN UP </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 50, paddingRight: 20, flexDirection: "column" }}>
            <Text style={{ color: "#8BA1FF" }}> Mobile Number </Text>
            <TextInput style={{ marginTop: 10, borderBottomWidth: 1, borderBottomColor: "#63647D", color: "#FFFFFF" }}
              maxLength={10}
              onChangeText={(text) => {
                this.state.mobile = text
              }}
              keyboardType="phone-pad" />
            <Text style={{ marginTop: 15, color: "#8BA1FF" }}> Password </Text>
            <TextInput style={{ marginTop: 10, borderBottomWidth: 1, borderBottomColor: "#63647D", color: "#FFFFFF" }}
              secureTextEntry={true}
              onChangeText={(text) => {
                this.state.password = text
              }}
              maxLength={20}
              returnKeyLabel="done"
              returnKeyType="done"
            />
            <TouchableOpacity>
            <Text style={{ marginTop: 15, color: "#8BA1FF" }}>FORGOT PASSWORD</Text>

            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 30, left: 15 }}>
            <TouchableOpacity style={styles.submit} onPress={() => this.login()} activeOpacity={0.8}>
              <Text style={{ fontSize: 15, color: "#FFFFFF" }}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#18319B',
  },
  imageView: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  submit: {
    borderRadius: 26,
    height: 52,
    width: 320,
    backgroundColor: "#F5A623",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  }
});
