/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar,AsyncStorage, TextInput, Text, View, Image, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import Textarea from 'react-native-textarea';
import StarRating from 'react-native-star-rating';
import { StackActions, NavigationActions } from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Review extends Component<Props> {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      review: '',
      starCount: 0,
    }
  }

  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    return {
      title: "Review",
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
      ),
      headerRight: (
        <View  >
          {/* <TouchableOpacity style={{ marginRight: 20, justifyContent: 'center', alignItems: 'center' }} activeOpacity={0.7} onPress={() => {
            const { navigate } = navigation;
            navigate('Location');
          }
          } >
            <Image style={{ width: 14, height: 19, }}
              source={require('../Assets/images/homeLocation.png')} />
            <Text style={{ color: colorStyle.themeTextColor }}>{store.getState().Location.location}</Text>
          </TouchableOpacity> */}
        </View>
      ),
    }
  };

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
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

  async submitProfile() {
    if(this.state.starCount && this.state.review.length){
      var value = await AsyncStorage.getItem('UserData');
      value = JSON.parse(value);
      value.credits = value.credits - 20;
      if(!value.booked){
        value.booked = 1
      }else{
        value.booked = value.booked + 1
      }
      await AsyncStorage.setItem('UserData', JSON.stringify(value));
      resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Home' })],
      });
      this.props.navigation.dispatch(resetAction);
    }else{
      alert('Please provide the review.');
    }
    // 
  }
  onChange = (value) => {
    this.setState({ review: value });
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        {/* <View style={styles.imageView}><Image source={require('../Assets/HelpBank.png')} /></View> */}
        <View style={{ flex: 2, marginLeft: 20 }}>
          <View style={{ flexDirection: "row",  marginTop: 20 }}>
            <Text style={{ color: "#4a4a4a" }}> Write a Review </Text>
          </View>
          <View style={{ marginTop: 10, flexDirection: "column" }}>
            <View style={{marginTop: 20, marginRight: 20, borderColor: '#707070', border: 1}}>
              <Textarea
                containerStyle={styles.textareaContainer}
                style={styles.textarea}
                onChangeText={this.onChange}
                defaultValue={this.state.review}
                maxLength={500}
                placeholder={'Please provide additional info...'}
                placeholderTextColor={'#c7c7c7'}
                underlineColorAndroid={'transparent'}
              />
              <View style={{marginTop: 20, width: 190}}>
                <StarRating
                  disabled={false}
                  maxStars={5}
                  rating={this.state.starCount}
                  fullStarColor={'#ed8a19'}
                  starSize={30}
                  selectedStar={(rating) => this.onStarRatingPress(rating)}
                />
              </View>  
            </View>  
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 32, right: 8 }}>
              <TouchableOpacity
                style={styles.button}
                ref="5"
                onPress={() => { this.submitProfile() }}
              >
                <Text style={{ color: '#ffffff' }}>SUBMIT REVIEW</Text>
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
    backgroundColor: '#F4F5FA',
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
    borderColor: '#707070'
  },
  textareaContainer: {
    height: 180,
    padding: 5,
    backgroundColor: '#F5FCFF',
    borderColor: '#707070'
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
