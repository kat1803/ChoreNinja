import React from "react";
import { View, Text } from "react-native";
import { Card, ListItem, Icon } from "react-native-elements";
import {Image, StyleSheet} from "react-native";
import { Button, TouchableRipple} from "react-native-paper";

// Formatted with the following command:
// Nhis-MacBook-Pro:Screens kathryn$ prettier --write ProfileScreen.js


class ProfileScreen extends React.Component {
    constructor(props){
      super(props)
      this.state = {
          edit: false,
          name:'',
          address:'',
          Payment:''
          
      }
    }
    handleEdit() {
      alert("Edit button clicked");
      this.setState({
        edit: true
      })
    }
  render(){
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
    return (
      <View style={{ flex: 1 }}>
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
          
          {!this.state.edit ? 
          <View>
          <Card >
            <ListItem style={{borderBottomColor: "#000000"}} title="Address:"/>
            <ListItem title="Payment Type :"/>
            <ListItem title="Email address:"/>
            <ListItem title=""/>
            <Button style={{width:100, alignSelf:'center', backgsroundColor:'#01479b', margin:10}} mode="contained"
            clicked={this.handleEdit}>Edit</Button>
          </Card>
          <Button style={{alignSelf:'center', margin:10}} mode="outlined">Invite your friend to join</Button>

          </View> :<View>
          <Card >
                            <InputItem
                                 clear
                                 style={{flex:1}}
                                 value = {this.state.ssn}
                                 onChange = {
                                     ssn => { this.setState ({ssn,});}
                                 }
                                 placeholder = "XXX-XX-XXXX"
                             >
                             </InputItem>
          <Button style={{width:100, alignSelf:'center', backgroundColor:'#01479b', margin:10}} mode="contained"
                >Save</Button>
        </Card>
      </View>}
    </View>
    </View>)
    
      
    
  }
}



    
export default ProfileScreen;

/* <View style={styles.Header}>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>
            Master Profile
          </Text>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../assets/crow.png")}
          />
        </View>
*/