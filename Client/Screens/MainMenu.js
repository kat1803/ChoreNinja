import React from "react";
import { View, Text, Switch } from "react-native";
import {
  createDrawerNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import SwitchSelector from "react-native-switch-selector";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import CustomerOnGoingScreen from "./CustomerOnGoingScreen";
import Message from "./Message";
import MessageList from "./MessageList";
import ProfileScreen from "./ProfileScreen";
import AboutScreen from "./AboutScreen";
import NinjaBio from "./NinjaBio";
import NinjaOngoingExpired from "./NinjaOngoingExpired";
import NinjaHomepage from "./NinjaHomepage";
import NinjaJoinScreen from "./NinjaJoinScreen";
import NinjaSignUp from "./NinjaSignUp";

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
    return (
        // dont fuck with this line
      <View style={{ flex: 1 }}>
      
        <SwitchSelector style={{marginTop:50, marginBottom:4, width:150,alignSelf: 'center'}}
  initial={0}
  onPress={this.handleToggle.bind(this)}
  textColor={'#7a44cf'} //'#7a44cf'
  selectedColor={'#e1bee7'}
  buttonColor={'#7a44cf'}
  borderColor={'#7a44cf'}
  hasPadding
  options={[
    { label: "Ninja", value: true}, 
    { label: "Master", value: false} 
  ]}
/>

        {this.state.isNinja ? (
          <AppMainContainerNinja />
        ) : (
          <AppMainContainerCustomer />
        )}
      </View>
    );
  }
}
//<AppMainContainer/>
//Main Navigation of the Application
const AppMainNavigatorCustomer = createBottomTabNavigator({
  //Login: LoginScreen,
  Home: HomeScreen,
  Profile: ProfileScreen,

  // 'MessageList': MessageList,
  Message: Message,
  C_OnGoing: CustomerOnGoingScreen,
  Signup: SignupScreen,
  NinjaSignUp: NinjaSignUp
});

const AppMainNavigatorNinja = createBottomTabNavigator({
  NinjaHomepage: NinjaHomepage,
  NinjaOngoingExpired: NinjaOngoingExpired,
  Ninjabio: NinjaBio,
  NinjaHomepage: NinjaHomepage,
  NinjaJoin: NinjaJoinScreen,
  About: AboutScreen
});

const AppMainContainerCustomer = createAppContainer(AppMainNavigatorCustomer);
const AppMainContainerNinja = createAppContainer(AppMainNavigatorNinja);

export default MainMenu;
