import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { InputItem } from '@ant-design/react-native';
import { Button, TouchableRipple, TextInput } from "react-native-paper";
import { connect } from "react-redux";

class NinjaJoinScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            register: false,
            first_name: '',
            last_name: '',
            email: '',
            phone_number: '',
            is_ninja: "true"
        }
	}

	handleSignUpNinja = () =>{
		let updateUser = Object.assign({}, this.state,{_id: this.props.user._id})
		this.props.signUpNinja(updateUser)
	}
	
	componentWillMount(){
		const {first_name, last_name, email, phone_number} = this.props.user
		this.setState({
			first_name: first_name ? first_name : "",
			last_name: last_name ? last_name : "",
			email: email ? email : "",
			phone_number: phone_number ? phone_number : "",
		})
	}
    render() {
        // const { navigate } = this.props.navigation;
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
                                label="First Name"
                                onChangeText={first_name => this.setState({ first_name })}
                                value={this.state.first_name}
                                placeholder= "John"
                            />
                            <TextInput
                                style={{ marginLeft: 5, marginRight: 5, marginTop: 2 }}
                                mode="outlined"
                                underlineColorAndroid="transparent"
                                numberOfLines={1}
                                label="Last Name"
                                onChangeText={last_name => this.setState({ last_name })}
                                value={this.state.last_name}
                                placeholder= "Doe"
                            />
                            <TextInput
                                style={{ marginLeft: 5, marginRight: 5, marginTop: 10 }}
                                mode="outlined"
                                underlineColorAndroid="transparent"
                                numberOfLines={1}
                                label="Email"
                                onChangeText={email => this.setState({ email })}
                                value={this.state.email}
                                placeholder="choreninja@gmail.com"
                            />
                            <TextInput
                                style={{ marginLeft: 5, marginRight: 5, marginTop: 10 }}
                                mode="outlined"
                                underlineColorAndroid="transparent"
                                numberOfLines={1}
                                label="Phone Number"
                                onChangeText={phone_number => this.setState({ phone_number })}
                                value={this.state.phone_number}
                                placeholder="888-111-111"
                            />
                            
                            <Button
                                style={{
                                    width: 150,
                                    alignSelf: "center",
                                    backgroundColor: "#01479b",
                                    margin: 20
                                }}
                                mode="contained"
                                onPress={() => this.handleSignUpNinja()}
                            >
                                SIGN UP
                            </Button>
                    </View>
                }
            </ScrollView>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
		signUpNinja: (payload) =>
		dispatch({
		  type: "UPDATE_PROFILE",
		  value: payload
		}),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NinjaJoinScreen); 