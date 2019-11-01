import React from "react";
import { View, Text, Switch} from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
} from "react-navigation";
import SwitchSelector from "react-native-switch-selector";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import Notification from "./Notification";
import Message from "./Message";
import MessageList from "./MessageList";
import ProfileScreen from "./ProfileScreen";
import AboutScreen from "./AboutScreen";
import NinjaBio from "./NinjaBio";
import NinjaOngoingExpired from "./NinjaOngoingExpired";
import NinjaHome from "./NinjaHomepage";
import NinjaJoinScreen from "./NinjaJoinScreen";
import Rating from "./Rating";
import NinjaEditBio from "./NinjaEditBio";
import MenuNavBar from "./MenuNavBar";
//importing icon
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MCIIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { connect } from "react-redux";

const ninjaImage = require('../assets/ninja1.png');
const userImage = require('../assets/users.png');

//Main Navigation
const AppMainNavigatorCustomer = createBottomTabNavigator({
  //Login: LoginScreen,
  Home: {
    screen: HomeScreen, 
    navigationOptions: () => ({
      tabBarIcon: () => (
        <FAIcon
          name = "home"
          size = {30}
          color='#01579B'
        />
      )
    })
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: () => ({
      tabBarIcon: () => (
        <FAIcon
          name = "user"
          size = {30}
          color='#01579B'
        />
      )
    })
  },
  // 'MessageList': MessageList,
  Message: {
    screen: Message,
    navigationOptions: () => ({
      tabBarIcon: () => (
        <FAIcon
          name="envelope"
          size={30}
          color='#01579B'
        />
      )
    }),
    tabBarOptions: {
      showLabel: false
    }
  },
  "Notification": {
    screen: Notification,
    navigationOptions: () => ({
      tabBarIcon: () => (
        <FAIcon
          name="bell"
          size={30}
          color='#01579B'
        />
      ),
    })
  }, 
  'ABOUT': {
    screen: AboutScreen,
    navigationOptions: () => ({
      tabBarIcon: () => (
        <FAIcon
          name="info"
          size={30}
          color='#0277BD'
        />
      )
    })
  },
  
  //Signup: SignupScreen, //this is sign up for customer first join the app
  // NinjaJoin: {
  //   screen: NinjaJoinScreen,
  //   navigationOptions: () => ({
  //     tabBarIcon: () => (
  //       <MCIIcon
  //         name = "ninja"
  //         size={30}
  //         color= '#01479b'
  //       />
  //     )
  //   })
  // }, 
});

// Ninja Navigation
const AppMainNavigatorNinja = createBottomTabNavigator({
 'HOME': {
    screen: NinjaHome,
    navigationOptions: () => ({
      tabBarIcon: () => (
        <FAIcon
          name="home"
          size={30}
          color='#0277BD'
        />
      )
    })
  },
  "TASK": {
    screen: NinjaOngoingExpired,
    navigationOptions: () => ({
      tabBarIcon: () => (
        <FAIcon
          name="briefcase"
          size={30}
          color='#0277BD'
        />
      )
    })
  },
  'BIO': {
    screen: NinjaBio,
    navigationOptions: () => ({
      tabBarIcon: () => (
        <FAIcon
          name="user"
          size={30}
          color='#0277BD'
        />
      )
    })
  },
  'ABOUT': {
    screen: AboutScreen,
    navigationOptions: () => ({
      tabBarIcon: () => (
        <FAIcon
          name="info"
          size={30}
          color='#0277BD'
        />
      )
    })
  },
  NinjaJoin: {
    screen: NinjaJoinScreen,
    navigationOptions: () => ({
      tabBarIcon: () => (
        <MCIIcon
          name="ninja"
          size={30}
          color='#0277BD'
        />
      )
    })
  }, 
  Rating: Rating,
  "Menu": {
    screen: MenuNavBar,
    navigationOptions: () => ({
      tabBarIcon: () => (
        <FAIcon
          name="bars"
          size={30}
          color='#0277BD'
        />
      )
    })
  },
});

const AppMainContainerCustomer = createAppContainer(AppMainNavigatorCustomer);
const AppMainContainerNinja = createAppContainer(AppMainNavigatorNinja);


class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isNinja: true };
  }

  handleToggle(isNinja) {
      console.log("sub");
    this.setState(state => ({
      isNinja: isNinja
    }));
  }


  render() {
    console.log(this.props.user)
    return (
		// dont fuck with this line
		<View style={{ flex: 1 }}>
			{
				this.props.user.user ?
						<View style={{ flexDirection:"row", justifyContent:"space-between", marginTop:55, marginLeft:15}}>
              <Text style={{ color:'#01579B', width: 250, height: 50, fontSize:35, fontWeight:"bold"}}>Chore Ninja</Text>
							<SwitchSelector style={{ flex: 1, marginBottom:4, marginRight:10, width:200, marginTop: 5}}
								  initial={0}
								  onPress={this.handleToggle.bind(this)}
								  textColor={'#01479b'} //'#7a44cf'
								  selectedColor={'#80d8ff'}
								  buttonColor={'#01479b'}
                  borderColor={'#01579B'}
								  hasPadding
								  options={[
									{ label: "Master", value: true },
									{ label: "Ninja", value: false} 
						  
							  ]} 
							/>
						</View>
				:
					<SignupScreen signup={this.props.signup} signin={this.props.signin}/>
			} 
			{
				this.props.user.user ?
					this.state.isNinja ? (<AppMainContainerCustomer />) : (<AppMainContainerNinja />)
				:
				null
			}
		</View> 
    );
  }
}


const mapStateToProps = state => {
	return {
	  user: state.auth.user
	};
  };
  
const mapDispatchToProps = dispatch => {
	return {
	  signup: (email, password) =>
		dispatch({
		  type: "SIGN_UP",
		  value: {email, password}
		}),
	  signin: (email, password) =>
		dispatch({
		  type: "SIGN_IN",
		  value: {email, password}
		}),
	  signout: () =>
		dispatch({
		  type: "SIGN_OUT",
		}),
	};
  };

export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(MainMenu);
  