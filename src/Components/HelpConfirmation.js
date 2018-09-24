/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, TextInput, Text, View, Image, TouchableOpacity } from 'react-native';
import _ from 'lodash';

import Textarea from 'react-native-textarea';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class HelpConfirmation extends Component<Props> {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      helpSlot: '',
      userRef: '',
      additionalInfo: '',
    }
  }
  componentDidMount() {
    // firebase.initializeApp(config);
    // var db = firebase.firestore();
    // db.settings({
    //   timestampsInSnapshots: true
    // });
    // this.state.userRef = db
    // userRef.where("phone", "==", "8527698989").get().then((res) => {
    //   console.log(res)
    //   res.forEach(function (doc) {
    //     // doc.data() is never undefined for query doc snapshots
    //     console.log(doc.id, " => ", doc.data());
    //   });
    // });
  }

  // componentDidMount = () => {
  //   console.warn(this.props.navigation.getParam('data'));
  // }

  addAvail = (value) => {
    this.setState({
      helpSlot: value
    });
  }

  onChange = (e) => {
    this.setState({additionalInfo: e});
  }

  submitProfile() {
    let userData = this.props.navigation.getParam('data');
    if(this.state.helpSlot.length){
      this.props.navigation.navigate('HelpSuccess')
    }else{
      alert('Please provide the appropiate help slot');
    }
    // 
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageView}><Image source={require('../Assets/HelpBank.png')} /></View>
        <View style={{ flex: 2, marginLeft: 20 }}>
          <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: "white" }}> HELP INFORMATION </Text>
          </View>
          <View style={{ marginTop: 10, flexDirection: "column" }}>
            <Text style={{ marginTop: 10, color: "#8BA1FF", fontSize: 10, }}> Time Slot </Text>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <TouchableOpacity style={this.state.helpSlot == 'Morning' ? styles.selectedTab : styles.unselectedAvail} onPress={() => this.addAvail('Morning')}><Text style={styles.textStyle}>Morning</Text></TouchableOpacity>
              <TouchableOpacity style={this.state.helpSlot == 'Afternoon' ? styles.selectedTab : styles.unselectedAvail} onPress={() => this.addAvail('Afternoon')}><Text style={styles.textStyle}>Afternoon</Text></TouchableOpacity>
              <TouchableOpacity style={this.state.helpSlot == 'Evening' ? styles.selectedTab : styles.unselectedAvail} onPress={() => this.addAvail('Evening')}><Text style={styles.textStyle}>Evening</Text></TouchableOpacity>
              <TouchableOpacity style={this.state.helpSlot == 'Night' ? styles.selectedTab : styles.unselectedAvail} onPress={() => this.addAvail('Night')}><Text style={styles.textStyle}>Night</Text></TouchableOpacity>
            </View>
            <View style={{ marginTop: 10, flexDirection: "column" }}>
              <Text style={{ marginTop: 10, color: "#8BA1FF", fontSize: 10, marginBottom: 10 }}> Immediate Help </Text>
              <TouchableOpacity style={this.state.helpSlot == 'Immediate' ? styles.selectedTab : styles.unselectedAvail} onPress={() => this.addAvail('Immediate')}><Text style={styles.textStyle}>Immediate</Text></TouchableOpacity>
            </View>
            <View style={{marginTop: 20, marginRight: 20}}>
              <Textarea
                containerStyle={styles.textareaContainer}
                style={styles.textarea}
                onChangeText={this.onChange}
                defaultValue={this.state.text}
                maxLength={500}
                placeholder={'Please provide additional info...'}
                placeholderTextColor={'#c7c7c7'}
                underlineColorAndroid={'transparent'}
              />
            </View>  
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 32, right: 8 }}>
              <TouchableOpacity
                style={styles.button}
                ref="5"
                onPress={() => { this.submitProfile() }}
              >
                <Text style={{ color: '#ffffff' }}>SUBMIT</Text>
              </TouchableOpacity>
            </View>
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
  textStyle: {
    fontSize: 12,
  },
  selectedTab: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 80,
    height: 45,
    backgroundColor: '#ffffff',
    marginRight: 10,
    borderColor: '#18319B'
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 170,
    fontSize: 14,
    color: '#333',
  },
  textareaContainer: {
    height: 180,
    padding: 5,
    backgroundColor: '#F5FCFF',
  },
  unselectedAvail: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    // width: 80,
    height: 45,
    width: 80,
    backgroundColor: '#f5a623',
    marginRight: 10,
  },
  imageView: {
    flex: 0.3,
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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 330,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#f5a623'
  }
});
