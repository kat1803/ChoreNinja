import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { StyleSheet } from "react-native"
import { Card } from "react-native-elements";
import { TextInput, Button } from "react-native-paper";

import {connect} from 'react-redux';


class NinjaBio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {         
            first_name: '',
            last_name: '',
            phone_number: '',
            email: '',
            description: '',
            skills: '',
            editBio: false
        };
	}

	handleEdit = () =>{
		let updateUser = Object.assign({}, this.props.user, this.state)
		this.setState({editBio: false})
		this.props.updateBio(updateUser)
	}
	
	componentWillMount(){
		const {first_name, last_name, email, phone_number, description, skills} = this.props.user

		this.setState({ 
			first_name: first_name ? first_name : "",
			last_name: last_name ? last_name : "",
			email: email ? email : "",
			phone_number: phone_number ? phone_number : "",
			description: description ? description : "",
			skills: skills ? skills : "" 
		})
	}

    render() {
        return (
            <ScrollView>
                {this.state.editBio ?
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", padding: 10 }}> Edit Your Bio </Text>

                        <TextInput
                            style={{ backgroundColor: "rgb(250,250,250)", padding: 10 }}
                            underlineColorAndroid="transparent"
                            numberOfLines={1}
                            label="First Name"
                            onChangeText={first_name => this.setState({ first_name })}
                            value={this.state.first_name}
                        />

                        <TextInput
                            style={{ backgroundColor: "rgb(250,250,250)", padding: 10 }}
                            underlineColorAndroid="transparent"
                            numberOfLines={1}
                            label="Last Name"
                            onChangeText={last_name => this.setState({ last_name })}
                            value={this.state.last_name}
                        />

						{
							this.props.user.is_ninja &&
								<TextInput
									style={{ backgroundColor: "rgb(250,250,250)", padding: 10 }}
									underlineColorAndroid="transparent"
									numberOfLines={1}
									label="Summary"
									onChangeText={description => this.setState({ description })}
									value={this.state.description}
								/>
						}

						{
							this.props.user.is_ninja &&
								<TextInput
									style={{ backgroundColor: "rgb(250,250,250)", padding: 10 }}
									underlineColorAndroid="transparent"
									numberOfLines={1}
									label="Skills"
									onChangeText={skills => this.setState({ skills })}
									value={this.state.skills}
								/>
						}

                        {/* Phone */}
                        <TextInput
                            style={{ backgroundColor: "rgb(250,250,250)", padding: 10 }}
                            underlineColorAndroid="transparent"
                            numberOfLines={1}
                            label="Phone number"
                            onChangeText={phone_number => this.setState({ phone_number })}
                            value={this.state.phone_number}
                        />

                        {/* Email */}
                        <TextInput
                            style={{ backgroundColor: "rgb(250,250,250)", padding: 10 }}
                            underlineColorAndroid="transparent"
                            numberOfLines={1}
                            label="Email"
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                        />

                        <Button
                            style={{
                                width: 100,
                                alignSelf: "center",
                                backgroundColor: "#01479b",
                                margin: 10
                            }}
                            mode="contained"
                            onPress={() => this.handleEdit()}
                        >
                            <Text>Save</Text>
                        </Button>
                    </View>
                    :
                    <View>
                            <View style={{ flex: 1, marginTop: 20 }}>
                                <Card
                                    title={`${this.state.first_name} ${this.state.last_name}`}
                                >
                                    <Image
                                        style={{
                                            width: 150,
                                            height: 150,
                                            alignSelf: 'center',
                                        }}
                                        source={require("../assets/businessprofile.png")}
                                    /> 
                                        {/* Descriptions */}
                                        <Text style={{ fontSize: 20, fontStyle: 'italic' }}>{this.state.description}</Text>
                                        <Text></Text>

                                        {/* Ratings */}
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ fontWeight: "bold", fontStyle: 'italic', fontSize: 18 }}>Rating: </Text>
                                            <Text style={{ fontSize: 18 }}>98% positive</Text>
                                        </View>
                                        <Text></Text>

                                        {/* Job Completed */}
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ fontWeight: "bold", fontStyle: 'italic', fontSize: 18 }}>Job Completed: </Text>
                                            <Text style={{ fontSize: 18 }}>20</Text>
                                        </View>
                                        <Text></Text>

                                        {/* Skills */}
                                        <Text style={{ fontWeight: "bold", fontStyle: 'italic', fontSize: 18 }}>Skills: </Text>
                                        <Text style={{ fontSize: 18 }}>{this.state.skills}</Text>
                                        <Text></Text>

                                        {/* Contact Information */}
                                        <Text style={{ fontWeight: "bold", fontStyle: 'italic', fontSize: 18 }}>Contact Info: </Text>
                                        {/* Phone Number */}
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ fontWeight: 'bold', fontSize: 17 }}> Tel: </Text>
                                            <Text style={{ fontSize: 18 }}>{this.state.phone_number}</Text>
                                        </View>
                                        {/* Email */}
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ fontWeight: 'bold', fontSize: 17 }}> Email: </Text>
                                            <Text style={{ fontSize: 18 }}>{this.state.email}</Text>
                                        </View>
                                        <Text></Text>

                                    {/* </View> */}
                                    <Button
                                        style={{ width: 100, alignSelf: 'center', margin: 10 }}
                                        mode="contained"
                                        onPress={() => this.setState({ editBio: true })}
                                    >
                                        <Text>Edit Bio</Text>
                                    </Button>
                                </Card>
                            </View>
                        {/* ))}  */}
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
		updateBio: (payload) =>
		dispatch({
		  type: "UPDATE_PROFILE",
		  value: payload
		}),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NinjaBio); 