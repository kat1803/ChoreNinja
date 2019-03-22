import React from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation'

import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import AboutScreen from "./AboutScreen";

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
        'Home': HomeScreen,
        'Profile': ProfileScreen,
        'About': AboutScreen,
    },
)

const AppMainContainer = createAppContainer(AppMainNavigator);

export default MainMenu 