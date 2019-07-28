import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Searchbar, IconButton } from 'react-native-paper';

class NinjaHomepage extends React.Component {
    state = {
        firstQuery: '',
    };

    render() {
        const { firstQuery } = this.state;
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>NinjaHomepage</Text>
                <Searchbar
                    placeholder = "Search"
                    onChangeText = {query => { this.setState({ firstQuery: query}); }}
                    value = {firstQuery}
                />
                <IconButton
                    icon="filter"
                    size={20}
                    onPress = {() => console.log('Pressed')}
                />
                <IconButton
                    icon="inbox"
                    size={20}
                    onPress={() => console.log('Pressed')}
                />
                <IconButton
                    icon="notifications"
                    size={20}
                    onPress={() => console.log('Pressed')}
                />
                

            </View>
        );
    }
}


export default NinjaHomepage