import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { InputItem } from '@ant-design/react-native';
import { Button, TouchableRipple, TextInput } from "react-native-paper";

class NinjaJoinScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            register: false,
            ssn: '',
            bio: '',
            skills: '',
            jobCompleted: '',
            ratings: '',
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                {!this.state.register ?
                    <View style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                        <Card
                            title = "Join Our Team As A Ninja"
                            style={{flex: 1}}
                        >
                            {/* <Text style={{ fontSize: 25, alignItems: 'center' }}>Join Our Team As A Ninja</Text> */}
                            <Image style={{ alignSelf: 'center', width: 120, height: 120 }} source={require("../assets/money.png")} /> 
                            <Text style={{ alignSelf: 'center', fontSize: 20 }}>
                               Earn Extra Money
                            </Text>
                            <Image style={{ marginTop: 10, alignSelf: 'center', width: 95, height: 95 }} source={require("../assets/calendar.png")} />
                            <Text style={{ alignSelf: 'center', fontSize: 20 }}>
                                Flexible Schedule
                            </Text>
                            <Image style={{ marginTop: 10, alignSelf: 'center', width: 120, height: 120 }} source={require("../assets/freedom.png")} /> 
                            <Text style={{ alignSelf: 'center', fontSize: 20, marginBottom: 30 }}>
                                Work Anywhere Anytime
                            </Text>
                            <Button
                                style={{
                                    width: 200,
                                    alignSelf: "center",
                                    backgroundColor: "#01479b",
                                    margin: 10
                                }}
                                mode="contained"
                                onPress={() => this.setState({ register: true })}
                            >
                                JOIN NOW
                            </Button>
                            {/* <Button type="primary" onPress={() => this.setState({ register: true })}>Join Now</Button> */}
                        </Card>
                    </View>
                    :
                    <View style={{ justifyContent: "center" }}>
                            <Image style={{ marginTop: 10, alignSelf: 'center', width: 150, height: 150}} source={require("../assets/ninja2.png")}/>
                            <Text
                                style={{alignSelf: 'center', fontSize: 20, marginTop: 30}}
                            >Sign Up as A Ninja</Text>

                            <TextInput
                                style={{ marginLeft: 5, marginRight: 5, marginTop: 2 }}
                                mode="outlined"
                                underlineColorAndroid="transparent"
                                numberOfLines={1}
                                label="SSN"
                                onChangeText={ssn => this.setState({ snn })}
                                value={this.state.ssn}
                                placeholder= "123 56 7890"
                            />

                            <TextInput
                                style={{ marginLeft: 5, marginRight: 5, marginTop: 10 }}
                                mode="outlined"
                                underlineColorAndroid="transparent"
                                numberOfLines={3}
                                label="Biography"
                                onChangeText={bio => this.setState({ bio })}
                                value={this.state.bio}
                                placeholder="Describe your expertise"
                            />

                            <TextInput
                                style={{ marginLeft: 5, marginRight: 5, marginTop: 10 }}
                                mode="outlined"
                                underlineColorAndroid="transparent"
                                numberOfLines={1}
                                label="Skills"
                                onChangeText={skills => this.setState({ skills })}
                                value={this.state.skills}
                                placeholder="Your skills"
                            />
                            
                            <Button
                                style={{
                                    width: 150,
                                    alignSelf: "center",
                                    backgroundColor: "#01479b",
                                    margin: 20
                                }}
                                mode="contained"
                                onPress={() => navigate('HOME')}
                            >
                                SIGN UP
                            </Button>
                    </View>
                }
            </ScrollView>
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