import React, {Component} from 'react';
import { View, Button } from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import { Card} from "react-native-elements";
class MenuNavBar extends Component {
    render(){
        return(
            <View >
                <Card style={{flex:1}}>
                <View style={{
                    }}>
                    <Button
                    title="Ninja Home"
                    onPress={() => this.props.navigation.navigate('Ninja Home')}
                    />
                </View>
                
                <View style={{  }}>
                    <Button
                    title="Task Screen"
                    onPress={() => this.props.navigation.navigate('Task')}
                    />
                </View>
                <View style={{  }}>
                    <FAIcon
                        name="user"
                        size={30}
                        color='#0091EA'
                        />
                    <Button
                    title="Ninja Bio"
                    onPress={() => this.props.navigation.navigate('Ninja')}
                    />
                </View>
                <View style={{ }}>
                    <Button
                    title="About"
                    onPress={() => this.props.navigation.navigate('About')}
                    />
                </View>
                </Card>
            </View>
        )
    }
}

export default MenuNavBar;