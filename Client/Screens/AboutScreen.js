import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class AboutScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>ChoreNinja is the mobile application that help matching customers with freelancer</Text>
            </View>
        );
    }
}


export default AboutScreen