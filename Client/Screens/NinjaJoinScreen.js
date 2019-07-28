import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Button, Appbar } from 'react-native-paper' ; 

class NinjaJoinScreen extends React.Component {
    render() {
        return (
            <View>
                <Appbar.Header>
                    <Appbar.Content
                        title="Join as a NINJA!"
                        style={{alignItems: 'center'}}
                    />
                    <Appbar.Action icon="notifications" onPress={() => console.log('Pressed')} />
                    <Appbar.Action icon="inbox" onPress={() => console.log('Pressed')} />
                </Appbar.Header>
                <View style={{alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                    
                        <Text>Hey, are you interested to join as a ninja?</Text>
                        <Button mode="contained"> JOIN NOW </Button>
                
                </View>
            </View>
        );
    }
}


export default NinjaJoinScreen