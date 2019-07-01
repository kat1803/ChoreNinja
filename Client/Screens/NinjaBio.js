import React from "react";
import { View, Text, Image } from "react-native";


class NinjaBio extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent:'center'}}>
                <View style={{ flex: 1, flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontWeight:'bold',fontSize: 23}}>Ninja Bio</Text>
                    <Image 
                        style={{width: 50, height: 50, marginBottom: 1}}
                        source= {require('../assets/ninjabio.png')} />

                </View>
                <View style={{ flex: 2,flexDirection:'column',alignItems:'center', justifyContent: "center", backgroundColor: 'skyblue', flexDirection:'column'}}>
                    <Image style= {{width: 140, height: 140, overflow:'hidden',borderRadius: 60}}
                        source={require('../assets/HungcarriesTaiwanFlag.jpeg')}/>
                    <Text style={{fontWeight:'bold', fontSize:23}}>Hung Tang</Text>
                </View>
                <View style={{ flex: 3, justifyContent: "center", backgroundColor: 'steelblue'}}>

                </View>
            </View>
        );
    }
}


export default NinjaBio