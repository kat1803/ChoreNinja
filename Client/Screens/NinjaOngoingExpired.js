import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Card } from 'react-native-elements';
import { Button } from "react-native-paper";

class NinjaOngoingExpired extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pagetitle: "Ninja Homepage",
            tasks: [
                { id: 1, Job: "Laundry", Field: "Laundry", Description: "I need someone to pick up my laundry at my home and do it.", Date: '02/23/19', Time: "3pm-5pm", status: "In Progress" },
                { id: 2, Job: "Lawn Cleaning", Field: "Garden", Description: "I need someone to come to my home and clean up my lawn.", Date: '08/23/19', Time: "3pm-5pm", status: "Completed" },
                { id: 3, Job: "Pick up dog", Field: "Transportation", Description: "I need someone to pick up my dog at airport and send him home.", Date: '02/23/19', Time: "3pm-5pm", status: "In Progress" }
            ],
            status: '',

        }
    }
    appearMessage = () => {
        console.log('pressed');
    }

    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <Text style={{ alignSelf: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 'bold' }}>
                        {/* <Image style={{ width:45, height:45, margin:5}} source={require("../assets/tasks.png")}/> My tasks:  */}
                        MY TASKS
                    </Text>
                    {this.state.tasks.map((task, i) => {
                        return (
                            <Card
                                key={i}
                                title={task.Job}
                                image={require('../assets/examplejob.png')}
                            >
                                {/* task.status == 'Completed' || task.status == 'completed' */}
                                {/* Status: if expires show red, else show  */}
                                {task.status == 'Completed' || task.status == 'completed' ? 
                                    <Text style={{ fontStyle: 'italic', textAlign: 'center', fontSize: 20, backgroundColor: '#FF0000', margin: 7 }}>{task.status}</Text> 
                                : 
                                    <Text style={{ fontStyle: 'italic', textAlign: 'center', fontSize: 20, backgroundColor: '#90EE90', margin: 7 }}>{task.status}</Text>
                                }
                                {/* <Text style={{ fontStyle: 'italic', textAlign: 'center', fontSize: 20, backgroundColor: '#80D8FF', margin: 7 }}>{task.status}</Text> */}
                                
                                {/* Job Description */}
                                <View >
                                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                                        Description:{" "}
                                    </Text>
                                    <Text style={{ fontSize: 20, fontStyle: "italic" }}>
                                        {task.description}
                                    </Text>
                                </View>
                                <Text />

                                {/* Job Field */}
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                                        Field:{" "}
                                    </Text>
                                    <Text style={{ fontSize: 20, fontStyle: "italic" }}>
                                        {task.field}
                                    </Text>
                                </View>
                                <Text />

                                {/* Due Date */}
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                                        Date:{" "}
                                    </Text>
                                    <Text style={{ fontSize: 20, fontStyle: "italic" }}>
                                        {task.due_date}
                                    </Text>
                                </View>
                                <Text />

                                {/* Start Time */}
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                                        Time: between {" "}
                                    </Text>
                                    <Text style={{ fontSize: 20, fontStyle: "italic" }}>
                                        {task.start_time}
                                    </Text>
                                    <Text style={{ marginLeft: 20, fontSize: 18, fontWeight: "bold" }}>
                                        and {" "}
                                    </Text>
                                    <Text style={{ fontSize: 20, fontStyle: "italic" }}>
                                        {task.end_time}
                                    </Text>
                                </View>
                                <Text />

                                {/* Price of the Job */}
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                                        Price:{" "}
                                    </Text>
                                    <Text style={{ fontSize: 20, fontStyle: "italic" }}>
                                        $ {task.price}
                                    </Text>
                                </View>
                                <Text />

                                {/* Job Zipcode */}
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                                        Zip Code{" "}
                                    </Text>
                                    <Text style={{ fontSize: 20, fontStyle: "italic" }}>
                                        {task.zipcode}
                                    </Text>
                                </View>
                                <Text />

                                {/* Payment Method */}
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                                        Payment Method: {" "}
                                    </Text>
                                    <Text style={{ fontSize: 20, fontStyle: "italic" }}>
                                        {task.paymentMethod}
                                    </Text>
                                </View>
                                <Text/>
                                <Button
                                    style={{ width: 150, alignSelf: 'center', margin: 10 }}
                                    mode="contained"
                                    // onPress={() => this.setState({ status: 'Completed' })}
                                >
                                    <Text>Complete</Text>
                                </Button>
                            </Card>

                        )
                    }
                    )}
                </View>
            </ScrollView >

        );
    }
}


export default NinjaOngoingExpired