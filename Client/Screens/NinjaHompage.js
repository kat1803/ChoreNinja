import React from "react";
import { View, Text, Button, Image } from "react-native";
import { Card } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Searchbar, IconButton, Appbar } from 'react-native-paper';

class NinjaHomepage extends React.Component {
    state = {
        firstQuery: '',
        Ninjas: [
            {id: 1,Title: "Software Engineer", JobDecription:"Build a e-commerce website", Price: "$20/hr"},
            {id: 2,Title: "Front-End Developer", JobDecription:"Build a UI/UX for e-commerce website", Price: "$18/hr"},
            {id: 3,Title: "driver", JobDecription:"pick me up at the airport", Price: "$50/trip"},
        ]
    };

    render() {
        const { firstQuery } = this.state;
        return (
            <View>
                <Appbar.Header>
                    <Appbar.Content
                        title = "Ninja Home"
                    />
                    <Appbar.Action icon="notifications" onPress = {() => console.log('Pressed')}/>
                    <Appbar.Action icon="inbox" onPress={() => console.log('Pressed')} />
                </Appbar.Header>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Searchbar
                        placeholder="Search"
                        style = {{width: 300}}
                        onChangeText={query => { this.setState({ firstQuery: query }); }}
                        value={firstQuery}
                    />
                    <Button
                        title="filter"
                        icon="filter"
                        size={20}
                        onPress={() => console.log('Pressed')}
                    />
                </View>
        
                {this.state.Ninjas.map((n,i)=>{
                    return (
                        <Card key={i} flexDirection="row" >
                            <View>
                            <Image style={{ width: 100, height: 100, overflow: 'hidden', borderRadius: 80 }}
                             source={require('../assets/HungcarriesTaiwanFlag.jpeg')} />
                            </View>
                            <View >
                                <Text>{n.Title}</Text>
                                <Text>{n.JobDecription}</Text>
                                <View>
                                    <Text>{n.Price}</Text>
                                    <Button 
                                        title="Accept Job"
                                        onPress={() => console.log("Accept Job")}
                                    />
                                </View>
                                
                            </View>
                             
                        </Card>

                    )
                })}
                
            </View>
        );
    }
}


export default NinjaHomepage
