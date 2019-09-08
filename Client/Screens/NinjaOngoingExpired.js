import React from "react";
import { View, Text, Image, Button,ScrollView } from "react-native";
import { Card } from 'react-native-elements';


class NinjaOngoingExpired extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pagetitle: "Ninja Homepage",
            tasks: [
                {id: 1, Job: "Laundry", Field: "Laundry", Description: "I need someone to pick up my laundry at my home and do it.", Date: '02/23/19', Time: "between 3pm-5pm", status: "On Going" },
                {id: 2, Job: "Lawn Cleaning", Field: "Garden", Description: "I need someone to come to my home and clean up my lawn.", Date: '08/23/19', Time: "between 3pm-5pm", status: "Expired" },
                {id: 3, Job: "Pick up dog", Field: "Transportation", Description: "I need someone to pick up my dog at airport and send him home.", Date: '02/23/19', Time: "between 3pm-5pm", status: "On Going" }
               
            ]               

        }
    }
    appearMessage = ()=>{
        console.log('pressed');
    }

    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1, }}>
                    <Text>
                <Image style={{ width: 120, height: 80 }} source={require("../assets/tracking.jpg")}/>My task
                </Text>
                                {this.state.tasks.map((task, i)=>{
                                return (
                                
                                        <Card>
                                        <View key={i}>
                                            <Text>Job:{task.Job}</Text>
                                            <Text>Field: {task.Field}</Text>
                                            <Text>Description: {task.Description}</Text>
                                        
                                            <Text>Time:{task.Time}</Text>
                                            <Text>{task.status}</Text>
                                        </View>
                                    </Card>
                                
                                )
                            })} 
                    </View>
            </ScrollView>
            
        );
    }
}


export default NinjaOngoingExpired