import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

type Props = {};
export default class Otp extends Component<Props> {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      otp: '',
    };
  }

  testFunc = (text, refCount) => {
    this.state.otp = this.state.otp + text 
    if (text.length === 1) {
      this.refs[refCount].focus();
    }
  }

  submitOtp = () => {
    if (this.state.otp.length == 4) {
      this.state.otp = '';
      this.props.navigation.navigate('BuildProfile', {data: this.props.navigation.getParam('data')});
    } else {
      alert("Please fill the OTP")
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageView}><Image source={require('../Assets/HelpBank.png')} /></View>
        <View style={styles.otpBody}>
          <Text style={styles.submitOtpText}>Submit OTP</Text>
          <Text style={styles.typeOtpText}>TYPE OTP</Text>
          <View style={styles.otpInput}>
            <TextInput style={styles.inputField1} ref="1" maxLength={1} onChangeText={(text) => {
              this.testFunc(text, 2);
            }}
              keyboardType="phone-pad" />
            <TextInput style={styles.inputField2} ref="2" maxLength={1} onChangeText={(text) => {
              // this.mobileInput(text)
              // this.setState({ inputValue: true })
              this.testFunc(text, 3);
            }}
              keyboardType="phone-pad" />
            <TextInput style={styles.inputField3} ref="3" maxLength={1} onChangeText={(text) => {
              // this.mobileInput(text)
              // this.setState({ inputValue: true })
              this.testFunc(text, 4);
            }}
              keyboardType="phone-pad" />
            <TextInput style={styles.inputField4} ref="4" maxLength={1} onChangeText={(text) => {
              // this.mobileInput(text)
              // this.setState({ inputValue: true })
              this.testFunc(text, 4);
            }}
            returnKeyLabel="done"
              returnKeyType="done"
              keyboardType="phone-pad" />
          </View>
          {/* <View >
              <Text style={styles.resendOtpText}>RESEND OTP</Text>
            </View> */}
          <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 30, left: 15 }}>
            <TouchableOpacity
              style={styles.button}
              ref="5"
              onPress={() => { this.submitOtp() }}
            >
              <Text style={{ color: '#ffffff' }}>SUBMIT OTP</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#18319B',
  },
  otpBody: {
    flex: 2,
    width: '100%'
  },
  inputField1: {
    borderBottomWidth: 1,
    borderBottomColor: '#63647D',
    marginLeft: 40,
    width: 20,
    marginTop: 20,
    color: "#FFFFFF"
  },
  inputField2: {
    borderBottomWidth: 1,
    borderBottomColor: '#63647D',
    marginLeft: 68,
    marginRight: 68,
    width: 20,
    marginTop: 20,
    color: "#FFFFFF"
  },
  inputField3: {
    borderBottomWidth: 1,
    borderBottomColor: '#63647D',
    marginRight: 68,
    width: 20,
    marginTop: 20,
    color: "#FFFFFF"
  },
  inputField4: {
    borderBottomWidth: 1,
    borderBottomColor: '#63647D',
    marginRight: 20,
    width: 20,
    marginTop: 20,
    color: "#FFFFFF"
  },
  otpInput: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: '30%',
  },
  imageView: {
    flex: 0.5,
    marginTop: 35,
  },
  submitOtpText: {
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  resendOtpText: {
    paddingRight: 20,
    color: '#8ba1ff',
    textAlign: 'right'
  },
  typeOtpText: {
    marginTop: 36,
    paddingLeft: 20,
    color: '#8ba1ff',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 330,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#f5a623'
  }
});
