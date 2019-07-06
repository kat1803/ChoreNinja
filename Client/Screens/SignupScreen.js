import React from "react";
import { View, Text, Image } from "react-native";
import { Radio, Button, InputItem, List, WingBlank, WhiteSpace, Flex, Checkbox } from '@ant-design/react-native';
const CheckboxItem = Checkbox.CheckboxItem;


class SignupScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            firstname:'',
            lastname: '',
            phone: '',
            role:'',
            ninja: false,
            customer: true,
        }
    }
    render() {
        return (
            <View style={{ flex: 1}}>
                <WhiteSpace size="lg"/>
                <WhiteSpace size="lg"/>
                <WhiteSpace size="lg"/>
                <List renderHeader={'Sign up with ChoreNinja'}>
                    <WhiteSpace size="lg"/>
                    <WhiteSpace size="lg"/>
                    <WhiteSpace size="lg"/>
                    <WingBlank size="lg">
                        <Text style={{fontSize: 16}}>First Name</Text>
                    </WingBlank>
                    <InputItem
                        clear
                        value={this.state.firstname}
                        onChange={firstname => {
                            this.setState({
                            firstname,
                            });
                        }}
                        placeholder="First Name"
                    ></InputItem>
                    <WhiteSpace size="lg"/>
                    <WingBlank size="lg">
                        <Text style={{fontSize: 16}}>Last Name</Text>
                    </WingBlank>
                    <InputItem
                        clear
                        value={this.state.lastname}
                        onChange={lastname => {
                            this.setState({
                            lastname,
                            });
                        }}
                        placeholder="Last Name"
                    ></InputItem>
                    <WhiteSpace size="lg"/>
                    <WingBlank size="lg">
                        <Text style={{fontSize: 16}}>Email</Text>
                    </WingBlank>
                    <InputItem
                        clear
                        value={this.state.email}
                        onChange={email => {
                            this.setState({
                            email,
                            });
                        }}
                        placeholder="Email"
                    ></InputItem>
                    <WhiteSpace size="lg"/>
                    <WingBlank size="lg">
                        <Text style={{fontSize: 16}}>Password</Text>
                    </WingBlank>
                    <InputItem
                        clear
                        type="password"
                        value={this.state.password}
                        onChange={password => {
                            this.setState({
                            password,
                            });
                        }}
                        placeholder="Password"
                    ></InputItem>
                    <WhiteSpace size="lg"/>
                    <WingBlank size="lg">
                        <Text style={{fontSize: 16}}>Phone</Text>
                    </WingBlank>
                    <InputItem
                        clear
                        value={this.state.phone}
                        onChange={phone => {
                            this.setState({
                            phone,
                            });
                        }}
                        placeholder="Phone"
                    ></InputItem>
                    <WhiteSpace size="lg"/>
                    <WingBlank size="lg">
                        <Text style={{fontSize: 16}}>Roles</Text>
                    </WingBlank>
                    <CheckboxItem
                        checked={this.state.ninja}
                        style={{ fontSize: 20, color: '#f00' }}
                        onChange={event => {
                          this.setState({ ninja: !this.state.ninja });
                        }}
                    >
                        Ninja
                    </CheckboxItem>
                    <CheckboxItem
                        checked={this.state.customer}
                        style={{ fontSize: 20, color: '#f00' }}
                        onChange={event => {
                          this.setState({ customer: !this.state.customer });
                        }}
                    >
                        Customer
                    </CheckboxItem>
                 </List>
                <WhiteSpace size="lg"/>
                <WhiteSpace size="lg"/>
                <Button type="primary" style={{marginTop: 25}}>Create account</Button>
            </View>
        );
    }
}


export default SignupScreen