import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class AboutScreen extends React.Component {
    render() {
        return (
            <View style={styles.Content}>
                <Image style={{ width: 200, height: 350 }}
                        source={require("../assets/ninja.png")}/>
                <Text style={styles.Text}>
                    ChoreNinnja is the application that can solve all your problems.
                    Let we know what you need, and we will find you that person. 
                </Text>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Content:{
        alignItems: "center", justifyContent: "center", paddingTop: 50
    },
    Text:{
        alignItems: "center", 
        justifyContent: "center",
        fontWeight: "bold", 
        fontSize: 15,
        padding: 28
    }
})
export default AboutScreen