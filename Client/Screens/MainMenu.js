import React from "react";
import { View, Text, Switch, TouchableHighlight } from "react-native";
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
import AboutScreen from "./AboutScreen";
import NinjaBio from "./NinjaBio";
import NinjaOngoingExpired from "./NinjaOngoingExpired";
import NinjaHome from "./NinjaHomepage";
import NinjaJoinScreen from "./NinjaJoinScreen";
import Rating from "./Rating";
import MenuNavBar from "./MenuNavBar";
//importing icon
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MCIIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { connect } from "react-redux";
import { withInAppNotification } from 'react-native-in-app-notification';
import firebaseService from '../Firebase/firebase'

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
          name="home"
          size={30}
          color='#1B58B5'
        />
      )
    })
  },
  "Message": {
    screen: Message,
    navigationOptions: () => ({
      tabBarIcon: () => (
        <FAIcon
          name="envelope"
          size={30}
          color='#1B58B5'
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
          color='#1B58B5'
        />
      ),
    })
  },
  Profile: {
    screen: NinjaBio,
    navigationOptions: () => ({
      tabBarIcon: () => (
        <FAIcon
          name="user"
          size={30}
          color='#1B58B5'
        />
      )
    })
  },
  "Menu": {
    screen: MenuNavBar,
    navigationOptions: () => ({
      tabBarIcon: () => (
        <FAIcon
          name="bars"
          size={30}
          color='#1B58B5'
        />
      )
    })
  },
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
          color='#1B58B5'
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
          color='#1B58B5'
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
          color='#1B58B5'
        />
      )
    })
  },
  "Message": {
    screen: Message,
    navigationOptions: () => ({
      tabBarIcon: () => (
        <FAIcon
          name="envelope"

          size={30}
          color='#1B58B5'
        />
      )
    })
  },
  "Menu": {
    screen: MenuNavBar,
    navigationOptions: () => ({
      tabBarIcon: () => (
        <FAIcon
          name="bars"
          size={30}
          color='#1B58B5'
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
    this.state = { isNinja: true, firstLogin: true };
  }

  handleToggle(isNinja) {
    this.setState(state => ({
      isNinja: isNinja
    }));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.auth.user._id != nextProps.auth.user._id) {
      this.props.showNotification({
        title: `Welcome ${nextProps.auth.user.first_name}!`,
        message: `Let's get some work done!!!`,
        onClose: () => console.log("closeit")
      });
      firebaseService.setUser(nextProps.auth.user)
      firebaseService.refNotificationOn(message => {
        this.props.showNotification({
          title: `Horay ${nextProps.auth.user.first_name}!`,
          message: `${message.text}`,
          onClose: () => console.log("closeit")
        });
      });
    }
  }


  componentWillUnmount() {
    firebaseService.refNotificationOff()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {
          this.props.auth.user ?
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 55, marginLeft: 15 }}>
              <Text style={{ color: '#1B58B5', width: 250, height: 50, fontSize: 35, fontWeight: "bold" }}>Chore Ninja</Text>
              <SwitchSelector style={{ flex: 1, marginBottom: 4, marginRight: 10, width: 240, marginTop: 5 }}
                initial={0}
                onPress={this.handleToggle.bind(this)}
                textColor={'#01579D'} //'#7a44cf'
                selectedColor={'#FFFFFF'}
                buttonColor={'#1B58B5'}
                borderColor={'#01579B'}
                hasPadding
                options={[
                  { label: "Master", value: true },
                  { label: "Ninja", value: false }

                ]}
              />
            </View>
            :
            <SignupScreen signup={this.props.signup} signin={this.props.signin} googleSignin={this.props.googleSignin} />
        }
        {
          this.props.auth.user ?
            this.state.isNinja ? (<AppMainContainerCustomer />) : this.props.auth.user.is_ninja ? (<AppMainContainerNinja />) : <NinjaJoinScreen />
            :
            null
        }
      </View>
    );
  }
}


const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (email, password) =>
      dispatch({
        type: "SIGN_UP",
        value: { email, password }
      }),
    signin: (email, password) =>
      dispatch({
        type: "SIGN_IN",
        value: { email, password }
      }),
    //   googleSignin: () =>
    // 	dispatch({
    // 	  type: "SIGN_IN_GOOGLE",
    // 	}),
    signout: () =>
      dispatch({
        type: "SIGN_OUT",
      }),
  };
};

export default withInAppNotification(connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMenu));
