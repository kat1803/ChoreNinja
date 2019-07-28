import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Button } from 'react-native-paper' ; 

class NinjaJoinScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <View style={{alignContent: "space-between"}}>
                    <Text>Hey, are you interested to join as a ninja?</Text>
                    <Button mode="contained"> JOIN NOW </Button>
                </View>
                
            </View>
        );
    }
}


export default NinjaJoinScreen