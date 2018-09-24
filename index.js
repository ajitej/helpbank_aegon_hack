/** @format */
// import * as firebase from 'firebase';

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import { createStackNavigator, NavigationActions } from 'react-navigation';
import  Splash from './src/Components/Splash' 
import Login from './src/Components/Login'
import SignUp from './src/Components/SignUp'
import Home from './src/Components/Home'
import Otp from './src/Components/Otp';
import BuildProfile from './src/Components/BuildProfile';
import UserList from './src/Components/UserList';
import HelpConfirmation from './src/Components/HelpConfirmation';
import HelpSuccess from './src/Components/HelpSuccess';
import Review from './src/Components/Review';

AppRegistry.registerComponent(appName, () => App);

var  MyApp = createStackNavigator({
    Splash: {
        screen: Splash,
    },
    SignIn: {
        screen: Login
    },
    SignUp:{
        screen:SignUp
    },
    Home:{
        screen:Home
    },
    Otp: {
        screen: Otp,
    },
    BuildProfile: {
        screen: BuildProfile,
    },
    UserList: {
        screen: UserList
    },
    HelpConfirmation: {
        screen: HelpConfirmation
    },
    HelpSuccess: {
        screen: HelpSuccess
    },
    Review: {
        screen: Review
    }
})

AppRegistry.registerComponent(appName, () => MyApp);
