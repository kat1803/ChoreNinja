import React from 'react';

import { View, Text, Image } from 'react-native';


const EditProfileScreen = (props) => {
    contructor(props){
        super(props);
        this.state = {
            text: '',
            time: 0,
            price: 0
        }
    }
    render(){
        return (
            <View onPress={props.clicked}>
                <Card>
        <View >
          <TextInput
          style={{backgroundColor:'#EDEFF6'}}
            underlineColorAndroid="transparent"
            numberOfLines={1}
            label='Job Description'
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />

          <TextInput
          style={{backgroundColor:'#EDEFF6'}}
            underlineColorAndroid="transparent"
            numberOfLines={1}
            label='Time (24hrs)'
            onChangeText={time => this.setState({ time })}
            value={this.state.time}
          />
          <TextInput
          style={{backgroundColor:'#EDEFF6'}}
            underlineColorAndroid="transparent"
            numberOfLines={1}
            label='Price'
            onChangeText={price => this.setState({ price })}
            value={this.state.price}
          />
         
        </View>

        </Card>
            </View>
        )
    };

}

export default EditProfileScreen;
