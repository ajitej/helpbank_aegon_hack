/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { TouchableOpacity, StatusBar, Platform, AsyncStorage, StyleSheet, TextInput, Text, View, Image } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const config = {
  apiKey: "AIzaSyD0sa3jXW8bkPooHm-6B-tbuus4dGNejUI",
  authDomain: "aegon-hack.firebaseapp.com",
  databaseURL: "https://aegon-hack.firebaseio.com",
  projectId: "aegon-hack",
  storageBucket: "aegon-hack.appspot.com",
  messagingSenderId: "989883462175"
};

type Props = {};
export default class Home extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      userRef: '',
      dbData: []
    }
  }
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    return {
      title: "My Home",
      headerTitleStyle: { textAlign: 'center', alignSelf: 'center', color: "#FFFFFF" },
      headerStyle: {
        backgroundColor: "#18319B", elevation: 0,
        shadowOpacity: 0, borderBottomColor: "#18319B"
      },
      headerLeft: (
        <View >
          <Image style={{ width: 50, height: 25, marginLeft: 10 }}
            source={require('../Assets/nav.png')} />
        </View>
      )
    }
  };
  async componentWillMount() {
    try {
      const value = await AsyncStorage.getItem('UserData');
      if (value !== null) {
        // We have data!!
        this.state.userData = JSON.parse(value)
        this.setState({})
      }
    } catch (error) {
      // Error retrieving data
    }

  }
  componentDidMount() {
    try {
      firebase.initializeApp(config);
      var db = firebase.firestore();
      db.settings({
        timestampsInSnapshots: true
      });
      this.state.userRef = db
      var dbData = [];
      var _this = this
      db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          dbData.push(doc.data())
        })
        let filteredList = dbData.filter(obj => {
          return obj.mobile != _this.state.userData.mobile
        })
        _this.state.dbData = filteredList;
        console.log(_this.state.dbData);
      })
    } catch (error) {

    }

  }
  _pressRow(data) {
    this.props.navigation.navigate('UserList', { data: this.state.dbData });
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        {/* <View style={styles.imageView}><Image source={require('../Assets/HelpBank.png')} /></View> */}
        <View style={{ padding: 10, flex: 0.5, backgroundColor: "#18319B", flexDirection: "column" }}>
          <Text style={{ color: "#8BA1FF" }} >
            Your Location
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "#FFFFFF", marginTop: 10, width: 300 }}>
              Mumbai
          </Text>
            <Text style={{ color: "#8BA1FF", marginTop: 10 }}>
              change
          </Text>
          </View>
          <Text style={{ color: "#FFFFFF", marginTop: 10 }} >
            Welcome, {this.state.userData.name}
          </Text>
          <Text style={{ color: "#FFFFFF", marginTop: 10, fontWeight: "bold" }} >
            Total Help Credits: {this.state.userData.credits}
          </Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
          <View style={{ position: "absolute" }}>
            <TextInput style={styles.search} placeholder="Search For Help">
            </TextInput>
          </View>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
          <TouchableOpacity style={styles.button} >
            <Text style={{ color: "#18319B", fontWeight: "bold" }}>Emergency Help</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => this._pressRow(0)} underlayColor='rgba(0,0,0,0)'>
              <View>
                <View style={styles.row}>
                  <Image style={styles.thumb} source={require('../Assets/bike.png')} />
                  <Text style={styles.text}>
                    Fitness
                </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this._pressRow(1)} underlayColor='rgba(0,0,0,0)'>
              <View>
                <View style={styles.row}>
                  <Image style={styles.thumb} source={require('../Assets/suitcase.png')} />
                  <Text style={styles.text}>
                    Business
                </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this._pressRow(2)} underlayColor='rgba(0,0,0,0)'>
              <View>
                <View style={styles.row}>
                  <Image style={styles.thumb} source={require('../Assets/care.png')} />
                  <Text style={styles.text}>
                    Care
                </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => this._pressRow(3)} underlayColor='rgba(0,0,0,0)'>
              <View>
                <View style={styles.row}>
                  <Image style={styles.thumb} source={require('../Assets/open.png')} />
                  <Text style={styles.text}>
                    Education
                </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this._pressRow(4)} underlayColor='rgba(0,0,0,0)'>
              <View>
                <View style={styles.row}>
                  <Image style={styles.thumb} source={require('../Assets/home.png')} />
                  <Text style={styles.text}>
                    Home
                </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this._pressRow(5)} underlayColor='rgba(0,0,0,0)'>
              <View>
                <View style={styles.row}>
                  <Image style={styles.thumb} source={require('../Assets/paint.png')} />
                  <Text style={styles.text}>
                    Art
                </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginLeft: 10 }} >
          <Text style={{ color: "#4A4A4A" }}>RECENT TRANSACTIONS</Text>
          {
            (this.state.userData.booked) ? 
            <View style={{ backgroundColor: '#ffffff', height: 80, margin: 20 }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'column', marginTop: 11, marginLeft: 18 }}>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: '#4a4a4a', width: 215 }}>Shashank Srivastava</Text>
                    <Text style={{ color: "#7ED321", fontWeight: 'bold' }}> - 20 Pts</Text>
                  </View>
                  <Text>Mumbai</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ width: 220 }} numberOfLines={2}>Help Acquired: Fitness</Text>
                    <Text>21 Sep 2018</Text>
                  </View>
                </View>
              </View>
            </View> : null
          }
        </View>
        {/* <View style={{ flex: 2, marginLeft: 10 }}> */}
        {/* <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "white" }}> LOG IN </Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
              <Text style={{ color: "#8BA1FF" }}> SIGN UP </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 10, paddingRight: 20, flexDirection: "column" }}>
            <Text style={{ color: "#8BA1FF" }}> Mobile Number </Text>
            <TextInput style={{ marginTop: 10, borderBottomWidth: 1, borderBottomColor: "#63647D", color: "#FFFFFF" }}
              maxLength={10}
              onChangeText={(text) => {
                // this.mobileInput(text)
                // this.setState({ inputValue: true })
              }}
              keyboardType="phone-pad" />
            <Text style={{ marginTop: 10, color: "#8BA1FF" }}> Password </Text>
            <TextInput style={{ marginTop: 10, borderBottomWidth: 1, borderBottomColor: "#63647D", color: "#FFFFFF" }} onChangeText={(text) => {
              // this.mobileInput(text)
              // this.setState({ inputValue: true })
            }}
              maxLength={20}
              returnKeyLabel="done"
              returnKeyType="done"
            />
            <Text style={{ marginTop: 15, color: "#8BA1FF" }}>FORGOT PASSWORD</Text>
          </View>
          <View style={{justifyContent: 'center',alignItems: 'center',position:'absolute',bottom:30,left:15}}>
            <TouchableOpacity style={styles.submit} activeOpacity={0.8}>
              <Text style={{fontSize: 15,color: "#FFFFFF"}}>SUBMIT</Text>
            </TouchableOpacity>
          </View> */}
        {/* </View> */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F4F5FA',
  },
  search: {
    height: 45,
    borderColor: "#FFFFFF",
    borderWidth: 1,
    width: 320,
    marginTop: 10,
    paddingLeft: 15,
    borderRadius: 26,
    elevation: 0,
    shadowOpacity: 0.4,
    backgroundColor: "white"
    // color:  "#FFFFFF"
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    borderColor: "#18319B",
    borderWidth: 1,
    width: 320,
    marginTop: 40,
    paddingLeft: 15,
    borderRadius: 26,
    elevation: 0,
    shadowOpacity: 0.2
    // color: colorStyle.lightGray
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
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  row: {
    justifyContent: 'center',
    padding: 5,
    margin: 10,
    width: 80,
    height: 80,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    elevation: 0,
    shadowOpacity: 0.1,
    // borderWidth: 1,
    // borderRadius: 5,
    borderColor: '#CCC'
  },
  thumb: {
    width: 44,
    height: 44
  },
  text: {
    flex: 1,
    marginTop: 5,
    color: "#18319B"
  }
});
