import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Searchbar, IconButton, Appbar } from 'react-native-paper';

class NinjaHomepage extends React.Component {
    state = {
        firstQuery: '',
    };

    render() {
        const { firstQuery } = this.state;
        return (
            <View>
                <Appbar.Header>
                    <Appbar.Content
                        title = "Ninja HomePage :)"
                    />
                    <Appbar.Action icon="notifications" onPress = {() => console.log('Pressed')}/>
                    <Appbar.Action icon="inbox" onPress={() => console.log('Pressed')} />
                </Appbar.Header>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Searchbar
                        placeholder="Search"
                        style = {{width: 350}}
                        onChangeText={query => { this.setState({ firstQuery: query }); }}
                        value={firstQuery}
                    />
                    <IconButton
                        icon="filter"
                        size={20}
                        onPress={() => console.log('Pressed')}
                    />
                </View>
            </View>
        );
    }
}


export default NinjaHomepage