/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { TouchableOpacity, Platform, StyleSheet, TextInput, Text, View, Image, FlatList } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class UserList extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    return {
      title: "Clerical",
      headerTitleStyle: { textAlign: 'center', alignSelf: 'center', color: "#FFFFFF" },
      headerStyle: {
        backgroundColor: "#18319B", elevation: 0,
        shadowOpacity: 0, borderBottomColor: "#18319B"
      }
    }
  };
  constructor(props) {
    super(props);
    let testData = [{
      ageGroup: '35-50',
      availArr: ['Afternoon'],
      email: 'Ss@ss.com',
      gender: 'Female',
      mobile: '9999373232',
      name: 'Shawshank',
      password: 'Admin@123',
      qualification: 'PostGrad',
      skillArr: ['Sports', 'Recreational', 'Education']
    },
    {
      ageGroup: '35-50',
      availArr: ['Afternoon'],
      email: 'Ss@ss.com',
      gender: 'Female',
      mobile: '9999373232',
      name: 'Shawshank',
      password: 'Admin@123',
      qualification: 'PostGrad',
      skillArr: ['Sports', 'Recreational', 'Education']
    },
    {
      ageGroup: '35-50',
      availArr: ['Afternoon'],
      email: 'Ss@ss.com',
      gender: 'Female',
      mobile: '9999373232',
      name: 'Shawshank',
      password: 'Admin@123',
      qualification: 'PostGrad',
      skillArr: ['Sports', 'Recreational', 'Education']
    },
    {
      ageGroup: '35-50',
      availArr: ['Afternoon'],
      email: 'Ss@ss.com',
      gender: 'Female',
      mobile: '9999373232',
      name: 'Shawshank',
      password: 'Admin@123',
      qualification: 'PostGrad',
      skillArr: ['Sports', 'Recreational', 'Education']
    },];
    this.state = {
      data : testData
    };
  }

  componentWillMount(){
    this.setState({data:this.props.navigation.getParam('data')})
  }

  getSkillString = (value) => {
    return value.join(', ');
  }

  onPress = (item) => {
    this.props.navigation.navigate('HelpConfirmation', {data: item});
  }

  _renderItem = ({item}) => (
    <View style={{backgroundColor: '#ffffff', height: 120, margin: 20}}>
      <View style={{flexDirection: 'row'}}>
        <Image style={styles.profPic} source={require('../Assets/default_image.png')} />
        <View style={{flexDirection: 'column', marginTop: 11, marginLeft: 18}}>
          <Text style={{color: '#4a4a4a'}}>{item.name}</Text>
          <Text>Qualification: {item.qualification}</Text>
          <Text style={{width: 220}} numberOfLines={2}>Skills: {this.getSkillString(item.skillArr)}</Text>
        </View>  
      </View>
      <TouchableOpacity onPress = {() => this.onPress(item)} style={{backgroundColor: '#18319B', justifyContent: 'center', alignItems: 'center', flex: 1, marginTop: 10}}>
        <Text style={{color:"#FFFFFF"}}>SEEK HELP</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        {/* <View style={{height: 92, backgroundColor: '#18319b', alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: '#ffffff'}}>Clerical</Text>
        </View> */}
        <View style={{backgroundColor: '#f3f4f9', flex: 1}}>
          <FlatList
            data={this.state.data}
            renderItem={this._renderItem}
          />
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
  },
  profPic: {
    margin: 10,
    borderRadius: 29,
    height: 60,
    width: 60
  }
});
