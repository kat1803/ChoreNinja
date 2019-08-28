import React from "react";
import { View, Text, Image  } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Button, InputItem, List, WingBlank, Flex, WhiteSpace } from '@ant-design/react-native';
import { Card} from "react-native-elements";

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
               <Card>
                <Text style={{ fontWeight: 'bold'}}>
                    Social Security Number
                </Text>
                <InputItem
                    clear
                    style={{flex:1}}
                    value = {this.state.ssn}
                    onChange = {
                        ssn => { this.setState ({ssn,});}
                    }
                    placeholder = "XXX-XX-XXXX"
                >
                </InputItem>
                <Text></Text>
                <Text style={{ fontWeight: 'bold'}}>
                    Bio
                </Text>
                <InputItem
                    clear
                    style={{ flex: 1 }}
                    value={this.state.ssn}
                    onChange={
                        ssn => { this.setState({ ssn, }); }
                    }
                    placeholder="Please decribe briefly about yourself"
                >
                </InputItem>
                <Button type="primary" >Argree to join</Button>
                </Card>
            </View>
        );
    }
}


export default AboutScreen