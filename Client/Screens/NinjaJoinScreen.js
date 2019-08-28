import React from "react";
import { View, Text,Image } from "react-native";
import { Appbar } from 'react-native-paper' ; 
import NinjaSignUp from "./NinjaSignUp";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Card} from "react-native-elements";
import { Button } from '@ant-design/react-native';
class NinjaJoinScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                
                <View style={{alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                    <Card>
                        <Text style={{fontSize:25, alignItems:'center'}}>Would you like to join our team and become a ninja?</Text>
                        <Text style={{fontSize:20}}>
                        <Image style={{ width: 120, height: 120 }} source={require("../assets/money.png")}/> Extra Money
                        </Text>
                        <Text style={{fontSize:20}}>
                        <Image style={{ width: 95, height: 95 }} source={require("../assets/calendar.png")}/>  Flexible Schedule
                        </Text>
                        <Text style={{fontSize:20, marginBottom:30}}>
                        <Image style={{ width: 120, height: 120 }} source={require("../assets/freedom.png")}/>  Freedom 
                        </Text>
                        <Button type="primary" onPress={() => navigate('NinjaSignUp')}>Join Now</Button>
                        </Card>
                </View>
            </View>
        );
    }
}

  
export default NinjaJoinScreen

/*<Appbar.Header>
                    <Appbar.Content
                        title="Join as a NINJA!"
                        style={{alignItems: 'center'}}
                    />
                    <Appbar.Action icon="notifications" onPress={() => console.log('Pressed')} />
                    <Appbar.Action icon="inbox" onPress={() => console.log('Pressed')} />
                </Appbar.Header>
                */