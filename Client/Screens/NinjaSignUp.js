import React from "react";
import { View, Text, Image  } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Button, InputItem, List, WingBlank, Flex, WhiteSpace } from '@ant-design/react-native';
import {Header} from "react-native-elements";

class AboutScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ssn: '',
            bio: ''
        }
    }
    render() {
        return ( 
            <View style={{ justifyContent: "center"  }}>
                <Header
                    centerComponent={{ text: "CHORE NINJA | SIGN UP" }}
                ></Header>
                <Text style={{ fontWeight: 'bold', textAlign: "center" }}>
                    Social Security Number
                </Text>
                <InputItem
                    clear
                    style={{flex:1}}
                    value = {this.state.ssn}
                    onChange = {
                        ssn => { this.setState ({ssn,});}
                    }
                    placeholder = "Social Security Number"
                >
                </InputItem>
                <Text></Text>
                <Text style={{ fontWeight: 'bold', textAlign: "center" }}>
                    Bio
                </Text>
                <InputItem
                    clear
                    style={{ flex: 1 }}
                    value={this.state.ssn}
                    onChange={
                        ssn => { this.setState({ ssn, }); }
                    }
                    placeholder="Bio"
                >
                </InputItem>
                <Button type="primary" inline size="small">primary</Button>
            </View>
        );
    }
}


export default AboutScreen