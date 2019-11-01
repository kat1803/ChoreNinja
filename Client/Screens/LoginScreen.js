import React from "react";
import { View, Text, Image } from "react-native";
import { Button, InputItem, List, WingBlank, Flex } from '@ant-design/react-native';


class HomeScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    render() {
        return (
            <View style={{ flex: 1}}>
                <Image
                  style={{width: 400, height: 400, marginBottom: 10, alignSelf:"center"}}
                  source={require('../assets/logo_transparent.png')}
                />
              <InputItem
                clear
                value={this.state.username}
                onChange={username => {
                  this.setState({
                    username,
                  });
                }}
                placeholder="Username"
              >
                Username 
              </InputItem>
              <InputItem
                clear
                type='password'
                value={this.state.password}
                onChange={password => {
                  this.setState({
                    password,
                  });
                }}
                placeholder="Password"
              >
                Password 
              </InputItem>
              <WingBlank style={{ marginBottom: 15, marginTop: 10 }}>
                  <Flex>
                    <Flex.Item style={{ paddingLeft: 1, paddingRight: 1 }}>
                        <Button type="primary">Sign In</Button>
                    </Flex.Item>
                    <Flex.Item style={{ paddingLeft: 1, paddingRight: 1 }}>
                        <Button type="primary">Sign Up</Button>
                    </Flex.Item>
                  </Flex>
                </WingBlank>
                <Text style={{textAlign: "center", fontSize: 18}}>Or</Text>
                <Button type="primary" style={{marginTop: 25}}>Log in With Facebook</Button>
                <Button type="warning" style={{marginTop: 20}}>Log in With Google</Button>
                <Text style={{textAlign: "center", fontSize: 18, marginTop: 50}}>Forgot your password? Click here</Text>
            </View>
        );
    }
}


export default HomeScreen