import React from "react";
import { View, Text, Switch } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
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
import Rating from "./Rating";




//Main Navigation of the Application
const AppMainNavigatorCustomer = createBottomTabNavigator({
  //Login: LoginScreen,
  Home: HomeScreen,
  Profile: ProfileScreen,
  // 'MessageList': MessageList,
  Message: Message,
  C_OnGoing: CustomerOnGoingScreen,
  //Signup: SignupScreen, //this is sign up for customer first join the app
  NinjaJoin: NinjaJoinScreen
});

const AppMainNavigatorNinja = createBottomTabNavigator({
  NinjaHomepage: NinjaHomepage,
  NinjaOngoingExpired: NinjaOngoingExpired,
  Ninjabio: NinjaBio,
  NinjaHomepage: NinjaHomepage,
  About: AboutScreen,
  Rating: Rating
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
    return (
        // dont fuck with this line
      <View style={{ flex: 1}}>
<View style={{flexDirection:"row", justifyContent:"space-between", marginTop:55, marginLeft:15}}>
        <Text style={{color:'#01479b', width: 250, height: 50, fontSize:35, fontWeight:"bold"}}>ChoreNinja</Text>
        <SwitchSelector style={{ marginBottom:4, marginRight:13, width:120, marginTop: 5}}
            initial={0}
            onPress={this.handleToggle.bind(this)}
            textColor={'#01479b'} //'#7a44cf'
            selectedColor={'#80d8ff'}
            buttonColor={'#01479b'}
            borderColor={'#01479b'}
            hasPadding
            options={[
              { label: "Master", value: true},
              { label: "Ninja", value: false} 
    
        ]} />
      
        </View>
        {this.state.isNinja ? (
          <AppMainContainerCustomer />
          
        ) : (
          <AppMainContainerNinja />
        )}
      </View>
    );
  }
}

export default MainMenu;

//old style for the header
 {/* <Text style={{color:'#01479b', marginLeft: 15, marginTop:50, fontSize:35, fontWeight:"bold"}}>ChoreNinja</Text>
        <SwitchSelector style={{ marginBottom:4, marginRight:10, width:120,alignSelf: 'flex-end'}}
            initial={0}
            onPress={this.handleToggle.bind(this)}
            textColor={'#01479b'} //'#7a44cf'
            selectedColor={'#80d8ff'}
            buttonColor={'#01479b'}
            borderColor={'#01479b'}
            hasPadding
            options={[
              { label: "Master", value: true},
              { label: "Ninja", value: false} 
              
            ]}
          /> */}