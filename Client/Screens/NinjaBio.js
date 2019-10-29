import React from "react";
import { View, Text, ScrollView } from "react-native";
import { StyleSheet } from "react-native"
import { Card } from "react-native-elements";
import { TextInput, Button } from "react-native-paper";

import {connect} from 'react-redux';


class NinjaBio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testing: [
                {
                    description: "Test",
                    skills: "Test",
                    email: "Test",
                    phone: "Test",
                    companyName: "Test",
                }
            ],
            auth: [],
            user: [
                {
                    description: "Test",
                    skills: "Test",
                    email: "Test",
                    phone: "Test",
                    companyName: "Test",
                }
            ],
            description:'Testing',
            skills: '',
            email: '',
            phone: '',
            companyName: '',

            editBio: false,
        };
    }

    // handleEdit(){
    //     var users = this.props.users;
    //     var user = users[id];
    //     this.setState({
    //         companyName: user.companyName,
    //         description: user.description,
    //         skills: user.skills,
    //         phoen: user.phone,
    //         email: user.email,
    //     });

    // }

    render() {
        console.log("HERE NINJABIO")

        return (
            <ScrollView>
                {this.state.editBio ?
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", padding: 10 }}> Edit Your Bio </Text>

                        {/* Company Name */}
                        <TextInput
                            style={{ backgroundColor: "rgb(250,250,250)", padding: 10 }}
                            underlineColorAndroid="transparent"
                            numberOfLines={1}
                            label="CompanyName"
                            onChangeText={companyName => this.setState({ companyName })}
                            value={this.state.companyName}
                        />

                        {/* Description */}
                        <TextInput
                            style={{ backgroundColor: "rgb(250,250,250)", padding: 10 }}
                            underlineColorAndroid="transparent"
                            numberOfLines={1}
                            label="Description"
                            onChangeText={description => this.setState({ description })}
                            value={this.state.description}
                        />

                        {/* Skills */}
                        <TextInput
                            style={{ backgroundColor: "rgb(250,250,250)", padding: 10 }}
                            underlineColorAndroid="transparent"
                            numberOfLines={1}
                            label="Skills"
                            onChangeText={skills => this.setState({ skills })}
                            value={this.state.skills}
                        />

                        {/* Phone */}
                        <TextInput
                            style={{ backgroundColor: "rgb(250,250,250)", padding: 10 }}
                            underlineColorAndroid="transparent"
                            numberOfLines={1}
                            label="Phone"
                            onChangeText={phone => this.setState({ phone })}
                            value={this.state.phone}
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
                            onPress={() => this.handleEdit}
                        >
                            <Text>Save</Text>
                        </Button>
                    </View>
                    :
                    <View>
                        {/* {this.props.user && this.props.user.map((user, id) => ( */}
                            <View style={{ flex: 1, marginTop: 20 }}>
                                <Card
                                    // key = {id}
                                    title="TEST"
                                    image={require("../assets/HungcarriesTaiwanFlag.jpeg")}
                                    containerStyle={{ backgroundColor: '#F5F5F5' }}
                                >
                                    <View
                                        style={{
                                            borderRadius: 3,
                                            borderWidth: 1,
                                            borderColor: "#d6d7da",
                                            //flex: 3,
                                            justifyContent: "flex-start",
                                            alignItems: "flex-start",
                                            flexDirection: "column",
                                            padding: 5,
                                            backgroundColor: '#FFFAFA'
                                        }}
                                    >
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
                                        <Text style={{ fontSize: 18 }}></Text>
                                        <Text></Text>

                                        {/* Contact Information */}
                                        <Text style={{ fontWeight: "bold", fontStyle: 'italic', fontSize: 18 }}>Contact Info: </Text>
                                        {/* Phone Number */}
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ fontWeight: 'bold', fontSize: 17 }}> Tel: </Text>
                                            <Text style={{ fontSize: 18 }}></Text>
                                        </View>
                                        {/* Email */}
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ fontWeight: 'bold', fontSize: 17 }}> Email: </Text>
                                            <Text style={{ fontSize: 18 }}></Text>
                                        </View>
                                        <Text></Text>

                                    </View>
                                    <Button
                                        style={{ width: 100, alignSelf: 'center', margin: 10 }}
                                        mode="contained"
                                        onPress={() => this.setState({ editBio: true })}
                                    >
                                        <Text>Edit Bio</Text>
                                    </Button>
                                </Card>
                            </View>
                        {/* ))} */}
                    </View>
                    
                }
            </ScrollView>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         user: state.auth.user
//     };
// };

export default (NinjaBio); 