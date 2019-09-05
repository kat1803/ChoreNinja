import React from "react";
import { View, Text,Image } from "react-native";
import { Card} from "react-native-elements";
import { Button,InputItem } from '@ant-design/react-native';

class NinjaJoinScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            register: false,
            ssn: '',
            bio: ''
        }
    }
    render() {
 
        return (
            <View>
                {
                    !this.state.register ? 
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
                                    <Button type="primary" onPress={() => this.setState({register: true})}>Join Now</Button>
                                </Card>
                            </View>        
                            :
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
                                 placeholder="Please describe briefly about yourself"
                             >
                             </InputItem>
                             <Button type="primary" >Agree to join</Button>
                             </Card>
                         </View>
                    }
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