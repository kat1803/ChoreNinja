import React from "react";
import { View, Text, Image } from "react-native";
import { Radio, InputItem, List, WingBlank, WhiteSpace, Flex, Checkbox } from '@ant-design/react-native';
import { Button, TouchableRipple, TextInput, Title } from "react-native-paper";
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
			signin: false,
		}
	}
	handleSubmit = () => {
		const {email, password, signin} = this.state
		if (signin){
			this.props.signin(email, password)
		}else{
			this.props.signup(email, password)
			this.setState({ signin: true})
		}
	}
	render() {
		const {signin} = this.state
		return (
			<View style={{ flex: 1}}>
				<Image
                  style={{width: 200, height: 200,alignSelf:"center", marginTop:30}}
                  source={require('../assets/logo_transparent.png')}
                />
			  <Title style={{ textAlign: "center"}}>{signin ? "Please Sign in" : "Sign up with ChoreNinja"}</Title>
				<View>
					<TextInput
					style={{margin:2}}
						mode="outlined"
						underlineColorAndroid="transparent"
						numberOfLines={1}
						label="Email"
						onChangeText={email => this.setState({ email })}
						value={this.state.email}
						/>
					<TextInput
					style={{margin:2}}
						mode="outlined"
						underlineColorAndroid="transparent"
						numberOfLines={1}
						label="Password"
						secureTextEntry={true}
						onChangeText={password => this.setState({ password })}
						value={this.state.password}
						/>
					{
						!signin &&
						<TextInput
						style={{margin:2}}
							mode="outlined"
							underlineColorAndroid="transparent"
							numberOfLines={1}
							label="First Name"
							onChangeText={firstname => this.setState({ firstname })}
							value={this.state.firstname}
							/>
					}
					{
						!signin &&
						<TextInput
						style={{margin:2}}
							mode="outlined"
							underlineColorAndroid="transparent"
							numberOfLines={1}
							label="Last Name"
							onChangeText={lastname => this.setState({ lastname })}
							value={this.state.lastname}
							/>
					}
					<Button onPress={this.handleSubmit} mode="contained" style={{marginTop: 25,alignSelf:"center", width:250}}>{signin ? "Sign in" : "Create account"}</Button>
					<Button onPress={() => this.setState({ signin: !signin})} mode="contained" style={{marginTop: 25, alignSelf:"center", width:400}}>{signin ? "Sign up" : "Already have account"}</Button>
					<Text style={{textAlign: "center", fontSize: 18}}>Or</Text>
					<Button mode="outlined" style={{marginTop: 5, width:250, alignSelf:"center", backgroundColor:"#87CEFA"}}>Log in With Facebook</Button>
                <Button mode="outlined" style={{marginTop:5, width:250, alignSelf:"center", backgroundColor:"#F08080"}}>Log in With Google</Button>
				</View>
			</View>
		);
	}
}


export default SignupScreen