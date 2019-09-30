import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Card } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Searchbar, Button } from 'react-native-paper';

class NinjaHomepage extends React.Component {
    state = {
        firstQuery: '',
        tasks: [
            { id: 1, Job: "Laundry", Field: "Laundry", Description: "I need someone to pick up my laundry at my home and do it.", Date: '02/23/19', Time: "3pm-5pm", Price: "20", Zipcode: "95112" },
            { id: 2, Job: "Lawn Cleaning", Field: "Garden", Description: "I need someone to come to my home and clean up my lawn.", Date: '08/23/19', Time: "3pm-5pm", Price: "20", Zipcode: "95112" },
            { id: 3, Job: "Pick up dog", Field: "Transportation", Description: "I need someone to pick up my dog at airport and send him home.", Date: '02/23/19', Time: "3pm-5pm", Price: "20", Zipcode: "95112" }
        ]
    };

    render() {
        const { firstQuery } = this.state;
        return (
            <ScrollView>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 10 }}>
                        <Searchbar
                            placeholder="Search"
                            style={{ width: 300 }}
                            onChangeText={query => { this.setState({ firstQuery: query }); }}
                            value={firstQuery}
                        />
                        <Button
                            title="filter"
                            icon="filter"
                            size={20}
                            onPress={() => console.log('Pressed')}
                        >Filter</Button>
                    </View>
                    {this.state.tasks.map((n, i) => {
                        return (
                            <Card
                                key={i}
                                title={n.Job}
                                image={require('../assets/examplejob.png')}
                            >
                                {/* <View>
                            <Image style={{ width: 100, height: 100, overflow: 'hidden', borderRadius: 80 }}
                             source={require('../assets/HungcarriesTaiwanFlag.jpeg')} />
                            </View> */}
                                {/* <View >
                                <Text>{n.Field}</Text>
                                <Text>{n.JobDecription}</Text>
                                <View>
                                     <Text>{n.Price}</Text>
                                     <Button style={{marginTop:10, alignSelf:'center'}}mode="contained" onPress={() => console.log("Accept Job")}>Accept Job</Button>
                                </View>
                                
                            </View> */}

                                <View key={i}>
                                    <Text style={{ fontStyle: 'italic', textAlign: 'center', fontSize: 20, backgroundColor: '#80D8FF' }}> $ {n.Price}</Text>
                                    <Text></Text>

                                    {/* Field */}
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Field: </Text>
                                        <Text style={{ fontSize: 20, fontStyle: 'italic' }}>{n.Field}</Text>
                                    </View>
                                    <Text></Text>
                                    
                                    {/* Description */}
                                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>Description:</Text>
                                    <Text style={{ fontSize: 20, fontStyle: 'italic' }}>{n.Description}</Text>
                                    <Text></Text>

                                    {/* Time */}
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Time: </Text>
                                        <Text style={{ fontSize: 20, fontStyle: 'italic' }}>{n.Time}</Text>
                                    </View>
                                    <Text></Text>

                                    {/* Zip Code */}
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Zip Code: </Text>
                                        <Text style={{ fontSize: 20, fontStyle: 'italic' }}>{n.Zipcode}</Text>
                                    </View>
                                    <Text></Text>

                                    <Button style={{ marginTop: 10, alignSelf: 'center' }} mode="contained" onPress={() => console.log("Accept Job")}>Accept Job</Button>
                                </View>
                            </Card>
                        )
                    })}
                </View>
            </ScrollView>
        );
    }
}


export default NinjaHomepage

//Header part
/*<Appbar.Header>
                    <Appbar.Content
                        title = "Ninja Home"
                    />
                    <Appbar.Action icon="notifications" onPress = {() => console.log('Pressed')}/>
                    <Appbar.Action icon="inbox" onPress={() => console.log('Pressed')} />
                </Appbar.Header>
                */