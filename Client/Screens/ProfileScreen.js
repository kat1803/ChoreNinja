import React from "react";
import { View, Text } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import {
  StyleSheet,
  Image,
  FlatList,
  AppRegistry,
  Component,
  TouchableOpacity
} from "react-native";
import { Divider } from 'react-native-elements';

// Formatted with the following command:
// Nhis-MacBook-Pro:Screens kathryn$ prettier --write ProfileScreen.js


class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.Header}>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>
            Master Profile
          </Text>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../assets/crow.png")}
          />
        </View>
        <View style={styles.Body}>
          <Image
            style={{
              width: 100,
              height: 100,
              overflow: "hidden",
              borderRadius: 80
            }}
            source={require("../assets/snoopdogg.jpg")}
          />
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>Snoop Dogg</Text>
        </View>

<View>
        <Card >
          <ListItem style={{borderBottomColor: "#000000"}} title="Address:"/>

          <ListItem title="Payment Type :"/>
          <ListItem title="Email address:"/>
          <ListItem title="Message :"/>
          <ListItem title="Change Password :"/>
          <ListItem title=""/>
          <Button style={{alignItems: 'center', alignContent: 'center'}} title="Edit"></Button>
        </Card>
        <Button style={{alignItems: 'center', alignContent: 'center', paddingTop: 30}} title="Invite your friend to get $10 off" type="outline" />
        <Button style={{alignItems: 'center', alignContent: 'center', paddingTop: 30}} title="Log out" type="outline" />
      </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  Header: {
    margin: "2%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 5, //change the size of the purple line
    borderBottomColor: "#e4c5e9",
    backgroundColor:"#e4c5e9"
  },
  Body: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderBottomColor: "#D3D3D3"
  },
 Info: {
   borderBottomColor: "black"
 }
});

export default ProfileScreen;
