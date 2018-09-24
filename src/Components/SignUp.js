/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { TouchableOpacity, Platform, StyleSheet, TextInput, Text, View, Image, AsyncStorage } from 'react-native';


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class SignUp extends Component<Props> {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            mobile: '',
            password: '',
            name: '',
            email: ''
        };
    }

    submit() {
        if (this.state.name.length && this.state.mobile.length) {
            this.props.navigation.navigate('Otp', {data: this.state});    
        }
        else {
            alert("Please Fill all the fields")
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageView}>
                    <Image source={require('../Assets/HelpBank.png')} />
                    <Text style={{ color: "#8BA1FF" }}> SIGN UP </Text>
                </View>
                <View style={{ flex: 0.2 }}></View>
                <View style={{ flex: 2, marginLeft: 10 }}>
                    <View style={{ marginTop: 30, paddingRight: 20, flexDirection: "column" }}>
                        <Text style={{ color: "#8BA1FF" }}> Full Name </Text>
                        <TextInput style={{ marginTop: 10, borderBottomWidth: 1, borderBottomColor: "#63647D", color: "#FFFFFF" }}
                            maxLength={20}
                            placeholder="Type Name"
                            placeholderTextColor="#FFFFFF"
                            onChangeText={(text) => {
                                this.state.name = text
                            }}
                        />
                        <Text style={{ marginTop: 30, color: "#8BA1FF" }}> Phone </Text>
                        <TextInput style={{ marginTop: 10, borderBottomWidth: 1, borderBottomColor: "#63647D", color: "#FFFFFF" }}
                            placeholder="Type Phone Number"
                            placeholderTextColor="#FFFFFF"
                            onChangeText={(text) => {
                                this.state.mobile = text
                            }}
                            maxLength={10}
                            returnKeyLabel="done"
                            returnKeyType="done"
                            keyboardType="phone-pad"
                        />
                        <Text style={{ marginTop: 30, color: "#8BA1FF" }}> Email </Text>
                        <TextInput style={{ marginTop: 10, borderBottomWidth: 1, borderBottomColor: "#63647D", color: "#FFFFFF" }}
                            placeholder="Type Email"
                            placeholderTextColor="#FFFFFF"
                            onChangeText={(text) => {
                                this.state.email = text
                            }}
                            maxLength={40}
                            returnKeyLabel="done"
                            returnKeyType="done"
                        />
                        <Text style={{ marginTop: 30, color: "#8BA1FF" }}> Password </Text>
                        <TextInput style={{ marginTop: 10, borderBottomWidth: 1, borderBottomColor: "#63647D", color: "#FFFFFF" }}
                            placeholder="Type Password"
                            placeholderTextColor="#FFFFFF"
                            onChangeText={(text) => {
                                this.state.password = text
                            }}
                            maxLength={20}
                            secureTextEntry={true}
                            returnKeyLabel="done"
                            returnKeyType="done"
                        />
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 30, left: 15 }}>
                        <TouchableOpacity style={styles.submit} onPress={() => this.submit()} activeOpacity={0.8}>
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
