/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, TextInput, AsyncStorage, Text, View, Image, TouchableOpacity } from 'react-native';
import _ from 'lodash';
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
export default class BuildProfile extends Component<Props> {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      availArr: [],
      skillArr: [],
      gender: '',
      ageGroup: '',
      qualification: '',
      userRef: ''
    }
  }
  componentDidMount() {
    firebase.initializeApp(config);
    var db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    this.state.userRef = db
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
    let newAvailArr = this.state.availArr;
    if (_.includes(this.state.availArr, value)) {
      newAvailArr = newAvailArr.filter(e => e !== value)
    } else {
      newAvailArr.push(value);
    }
    this.setState({
      availArr: newAvailArr
    });
  }

  addSkill = (value) => {
    let newSkillArr = this.state.skillArr;
    if (_.includes(this.state.skillArr, value)) {
      newSkillArr = newSkillArr.filter(e => e !== value)
    } else {
      newSkillArr.push(value);
    }
    this.setState({
      skillArr: newSkillArr
    });
  }

  selectAgeRange = (value) => {
    this.setState({
      ageGroup: value
    })
  }

  selectGender = (value) => {
    this.setState({
      gender: value
    })
  }

  selectqualification = (value) => {
    this.setState({
      qualification: value
    })
  }

  async submitProfile() {
    let userData = this.props.navigation.getParam('data');
    userData.availArr = this.state.availArr;
    userData.skillArr = this.state.skillArr;
    userData.gender = this.state.gender;
    userData.ageGroup = this.state.ageGroup;
    userData.qualification = this.state.qualification;
    userData.credits = 100
    try {
      await AsyncStorage.setItem('UserData', JSON.stringify(userData));
    } catch (error) {
      // Error saving data
    }
    this.state.userRef.collection('users').add(userData).then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      this.props.navigation.navigate('Home')
    })
      .catch(function (error) {
        console.log("Error adding document: ", error);
      });
    // console.log(userData);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageView}><Image source={require('../Assets/HelpBank.png')} /></View>
        <View style={{ flex: 2, marginLeft: 20 }}>
          <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: "white" }}> CREATE PROFILE </Text>
          </View>
          <View style={{ marginTop: 10, flexDirection: "column" }}>
            <Text style={{ color: "#8BA1FF", fontSize: 10 }}> Gender </Text>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <TouchableOpacity style={this.state.gender === 'Male' ? styles.selectedTab : styles.unselectedAvail} onPress={() => this.selectGender('Male')}><Text style={styles.textStyle}>Male</Text></TouchableOpacity>
              <TouchableOpacity style={this.state.gender === 'Female' ? styles.selectedTab : styles.unselectedAvail} onPress={() => this.selectGender('Female')}><Text style={styles.textStyle}>Female</Text></TouchableOpacity>
              <TouchableOpacity style={this.state.gender === 'Others' ? styles.selectedTab : styles.unselectedAvail} onPress={() => this.selectGender('Others')}><Text style={styles.textStyle}>Others</Text></TouchableOpacity>
            </View>
            <Text style={{ marginTop: 10, color: "#8BA1FF", fontSize: 10, }}> Age Group </Text>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <TouchableOpacity style={this.state.ageGroup === '18-34' ? styles.selectedTab : styles.unselectedAvail} onPress={() => this.selectAgeRange('18-34')}><Text style={styles.textStyle}>18-34</Text></TouchableOpacity>
              <TouchableOpacity style={this.state.ageGroup === '35-50' ? styles.selectedTab : styles.unselectedAvail} onPress={() => this.selectAgeRange('35-50')}><Text style={styles.textStyle}>35-50</Text></TouchableOpacity>
              <TouchableOpacity style={this.state.ageGroup === '51-70' ? styles.selectedTab : styles.unselectedAvail} onPress={() => this.selectAgeRange('51-70')}><Text style={styles.textStyle}>51-70</Text></TouchableOpacity>
              <TouchableOpacity style={this.state.ageGroup === '70 Above' ? styles.selectedTab : styles.unselectedAvail} onPress={() => this.selectAgeRange('70 Above')}><Text style={styles.textStyle}>70 Above</Text></TouchableOpacity>
            </View>
            <Text style={{ marginTop: 10, color: "#8BA1FF", fontSize: 10, }}> Qualification </Text>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <TouchableOpacity style={this.state.qualification === 'UnderGrad' ? styles.selectedTab : styles.unselectedAvail} onPress={() => this.selectqualification('UnderGrad')}><Text style={styles.textStyle}>UnderGrad</Text></TouchableOpacity>
              <TouchableOpacity style={this.state.qualification === 'Graduate' ? styles.selectedTab : styles.unselectedAvail} onPress={() => this.selectqualification('Graduate')}><Text style={styles.textStyle}>Graduate</Text></TouchableOpacity>
              <TouchableOpacity style={this.state.qualification === 'PostGrad' ? styles.selectedTab : styles.unselectedAvail} onPress={() => this.selectqualification('PostGrad')}><Text style={styles.textStyle}>PostGrad</Text></TouchableOpacity>
              <TouchableOpacity style={this.state.qualification === 'Doctorate' ? styles.selectedTab : styles.unselectedAvail} onPress={() => this.selectqualification('Doctorate')}><Text style={styles.textStyle}>Doctorate</Text></TouchableOpacity>
            </View>
            <Text style={{ marginTop: 10, color: "#8BA1FF", fontSize: 10, }}> Availability </Text>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <TouchableOpacity style={_.includes(this.state.availArr, 'Morning') ? styles.selectedTab : styles.unselectedAvail} onPress={() => this.addAvail('Morning')}><Text style={styles.textStyle}>Morning</Text></TouchableOpacity>
              <TouchableOpacity style={_.includes(this.state.availArr, 'Afternoon') ? styles.selectedTab : styles.unselectedAvail} onPress={() => this.addAvail('Afternoon')}><Text style={styles.textStyle}>Afternoon</Text></TouchableOpacity>
              <TouchableOpacity style={_.includes(this.state.availArr, 'Evening') ? styles.selectedTab : styles.unselectedAvail} onPress={() => this.addAvail('Evening')}><Text style={styles.textStyle}>Evening</Text></TouchableOpacity>
              <TouchableOpacity style={_.includes(this.state.availArr, 'Night') ? styles.selectedTab : styles.unselectedAvail} onPress={() => this.addAvail('Night')}><Text style={styles.textStyle}>Night</Text></TouchableOpacity>
            </View>
            {/* <TextInput style={{ borderBottomWidth:1,borderBottomColor:'#63647D', marginRight: 20}} placeholder={'Select Availbility'} placeholderTextColor={'white'}  onChangeText={(text) => {
              // this.mobileInput(text)
              // this.setState({ inputValue: true })
            }}
              keyboardType="phone-pad"
            /> */}
            <Text style={{ marginTop: 10, color: "#8BA1FF", fontSize: 10, }}> Skills </Text>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <TouchableOpacity style={_.includes(this.state.skillArr, 'Care') ? styles.selectedTab : styles.unselectedAvail} onPress={() => this.addSkill('Care')}><Text style={styles.textStyle}>Care</Text></TouchableOpacity>
              <TouchableOpacity style={_.includes(this.state.skillArr, 'Recreational') ? styles.selectedTab : styles.unselectedAvail} onPress={() => this.addSkill('Recreational')}><Text style={styles.textStyle}>Recreational</Text></TouchableOpacity>
              <TouchableOpacity style={_.includes(this.state.skillArr, 'Sports') ? styles.selectedTab : styles.unselectedAvail} onPress={() => this.addSkill('Sports')}><Text style={styles.textStyle}>Sports</Text></TouchableOpacity>
              <TouchableOpacity style={_.includes(this.state.skillArr, 'ArtsNCarfts') ? styles.selectedTab : styles.unselectedAvail} onPress={() => this.addSkill('ArtsNCarfts')}><Text style={styles.textStyle}>Arts&Crafts</Text></TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <TouchableOpacity style={_.includes(this.state.skillArr, 'Financial') ? styles.selectedTab : styles.unselectedAvail} onPress={() => this.addSkill('Financial')}><Text style={styles.textStyle}>Financial</Text></TouchableOpacity>
              <TouchableOpacity style={_.includes(this.state.skillArr, 'Education') ? styles.selectedTab : styles.unselectedAvail} onPress={() => this.addSkill('Education')}><Text style={styles.textStyle}>Education</Text></TouchableOpacity>
              <TouchableOpacity style={_.includes(this.state.skillArr, 'Consultation') ? styles.selectedTab : styles.unselectedAvail} onPress={() => this.addSkill('Consultation')}><Text style={styles.textStyle}>Consultation</Text></TouchableOpacity>
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
