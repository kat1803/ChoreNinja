import React from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation'

import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import ProfileScreen from "./ProfileScreen";
import AboutScreen from "./AboutScreen";
import NinjaBio from './NinjaBio';
import NinjaOngoingExpired from './NinjaOngoingExpired';
import NinjaHomepage from './NinjaHomepage';
import NinjaJoinScreen from './NinjaJoinScreen';
import NinjaSignUp from './NinjaSignUp';

class MainMenu extends React.Component {
    render() {
        return (
           <AppMainContainer
            />
        );
    }
}

//Main Navigation of the Application 
const AppMainNavigator = createBottomTabNavigator(
    {
        'NinjaHomepage': NinjaHomepage,
        'NinjaOngoingExpired':NinjaOngoingExpired,
        'Ninjabio':NinjaBio,
        'Login': LoginScreen,
        'Home': HomeScreen,
        'Profile': ProfileScreen,
        'About': AboutScreen,
        'NinjaHomepage' : NinjaHomepage,
        'NinjaJoin': NinjaJoinScreen,
        'NinjaSignUp': NinjaSignUp,
    },
)

const AppMainContainer = createAppContainer(AppMainNavigator);

export default MainMenu 