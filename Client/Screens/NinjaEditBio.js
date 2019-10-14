import React from "react";
import { View, Text, Image } from "react-native";
import { Card } from "react-native-elements";
import { Button, TouchableRipple, TextInput } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

class NinjaEditBio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: [
                {
                    id: 1,
                    title: "HT Corporation",
                    description:
                        "HTCorp is one of the Worlds Best Personal Service Company. It was establish in the year 1890.We cover all field on Accounting, Engineering, and Law.",
                    rating: "98% positive",
                    jobCompleted: "20",
                    skills: "Accounting, Engineering, and Law",
                    telephone: "4088881234",
                    email: "ask_help@HTCorp.com"
                },
            ]
        }
    };

    render(){
        return (
            <ScrollView>
                <Card>
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", padding: 10}}> Edit Your Bio </Text>

                        {/* Title */}
                        <TextInput
                        style={{ backgroundColor: "rgb(250,250,250)", padding: 10 }}
                        underlineColorAndroid="transparent"
                        numberOfLines={1}
                        label="Title"
                        onChangeText={title => this.state({ title })}
                        value={this.state.title}
                        />

                        {/* Description */}
                        <TextInput
                            style={{ backgroundColor: "rgb(250,250,250)", padding: 10 }}
                            underlineColorAndroid="transparent"
                            numberOfLines={1}
                            label="Description"
                            onChangeText={description => this.state({ description })}
                            value={this.state.description}
                        />

                        {/* Skills */}
                        <TextInput
                            style={{ backgroundColor: "rgb(250,250,250)", padding: 10  }}
                            underlineColorAndroid="transparent"
                            numberOfLines={1}
                            label="Skills"
                            onChangeText={skills => this.state.edit({ skills })}
                            value={this.state.edit.skills}
                        />

                        {/* Telephone */}
                        <TextInput
                            style={{ backgroundColor: "rgb(250,250,250)", padding: 10  }}
                            underlineColorAndroid="transparent"
                            numberOfLines={1}
                            label="Telephone"
                            onChangeText={telephone => this.state({ telephone })}
                            value={this.state.telephone}
                        />

                        {/* Email */}
                        <TextInput
                            style={{ backgroundColor: "rgb(250,250,250)", padding: 10  }}
                            underlineColorAndroid="transparent"
                            numberOfLines={1}
                            label="Email"
                            onChangeText={email => this.state({ email })}
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
                        >
                            Save
                        </Button>

                    </View>
                </Card>
            </ScrollView>
        );
    }
}

export default NinjaEditBio;