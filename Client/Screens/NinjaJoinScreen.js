import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { DefaultTheme } from 'react-native-paper' ; 
class NinjaJoinScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>NinjaJoinScreen</Text>
            </View>
        );
    }
}


export default NinjaJoinScreen