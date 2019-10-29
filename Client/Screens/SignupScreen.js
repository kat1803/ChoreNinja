import React from "react";
import { View, Text, Image } from "react-native";
import { Radio, InputItem, List, WingBlank, WhiteSpace, Flex, Checkbox } from '@ant-design/react-native';
import { Button, TouchableRipple, TextInput, Title } from "react-native-paper";
import FAIcon from 'react-native-vector-icons/FontAwesome';
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
			signin: true,
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
			<View style={{ flex: 1 }}>
				<Image
                  style={{width: 300, height: 300, alignSelf:"center"}}
                  source={require('../assets/logo_transparent.png')}
                />
			  	<Title style={{ textAlign: "center"}}>{signin ? "Sign In" : "Sign Up"}</Title>
				<View>
					<TextInput
						style={{marginLeft:5, marginRight:5, marginTop:2}}
						mode="outlined"
						underlineColorAndroid="transparent"
						numberOfLines={1}
						label="Email"
						onChangeText={email => this.setState({ email })}
						value={this.state.email}
					/>
					<TextInput
						style={{ marginLeft: 5, marginRight: 5, marginTop: 2 }}
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
							style={{ marginLeft: 5, marginRight: 5, marginTop: 2 }}
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
							style={{ marginLeft: 5, marginRight: 5, marginTop: 2 }}
							mode="outlined"
							underlineColorAndroid="transparent"
							numberOfLines={1}
							label="Last Name"
							onChangeText={lastname => this.setState({ lastname })}
							value={this.state.lastname}
							/>
					}
					<View style={{ flexDirection: 'row', alignSelf: 'center'}}>
						<Button
							onPress={this.handleSubmit}
							mode="outlined"
							// style={{ marginTop: 15, alignSelf: "center", width: 250 }}
							style={{ marginRight: 10, marginTop: 15, width: 180, backgroundColor: "#00B0FF"}}
						>
							{signin ? "Sign In" : "Sign Up"}
						</Button>
						<Button
							onPress={() => this.setState({ signin: !signin })}
							mode="outlined" 
							//style={{ marginTop: 25, alignSelf: "center", width: 250 }}
							style={{ marginLeft: 10, marginTop: 15, width: 180, backgroundColor: "#00B0FF"}}
						>
							{signin ? "Create Account" : "Sign In"}
						</Button>
					</View>
					<Text style={{ marginTop: 15, marginBottom: 15, textAlign: "center", fontSize: 18}}>OR</Text>
					<Button 
						mode="contained" 
						style={{ width:250, alignSelf:"center", backgroundColor:"#176BEF"}}
					> 
						Login With Facebook
					</Button>
					<Button 
						mode="contained" 
						style={{marginTop:10, width:250, alignSelf:"center", backgroundColor:"#FF3E30"}}
					>
						Login With Google
					</Button>
				</View>
			</View>
		);
	}
}


export default SignupScreen