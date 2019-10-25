import React from "react";
import { View, Text, Image } from "react-native";
import { Card, colors} from "react-native-elements";
import { Button, TouchableRipple} from "react-native-paper";
import { NinjaEditBio } from "./NinjaEditBio"
// import { Card, WingBlank, WhiteSpace } from 'antd-mobile';

class NinjaBio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Ninjaname: "HT Corporation"
    };
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, marginTop:20 }}>
        <Card
          title={this.state.Ninjaname}
          image={require("../assets/HungcarriesTaiwanFlag.jpeg")}
          containerStyle={{ backgroundColor: '#F5F5F5'}}
        >
        <View
          style={{
            borderRadius: 3,
            borderWidth: 1,
            borderColor: "#d6d7da",
            //flex: 3,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
            padding: 5,
            backgroundColor: '#FFFAFA'
          }}
        >
          {/* <Text style={{ fontWeight: "bold", fontSize: 18 }}>Bio: </Text> */}
          <Text style={{ fontSize: 20, fontStyle:'italic'}}>
            HTCorp is one of the Worlds Best Personal Service Company. It was establish in the year 1890.
            We cover all field on Accounting, Engineering, and Law.
          </Text>
            <Text></Text>

          {/* Ratings */}
          <View style={{flexDirection: 'row'}}>
            <Text style={{ fontWeight: "bold", fontStyle: 'italic', fontSize: 18 }}>Rating: </Text>
            <Text style={{ fontSize: 18 }}>98% positive</Text>
          </View>
            <Text></Text>
          
          {/* Job Completed */}
          <View style={{flexDirection: 'row'}}>
            <Text style={{ fontWeight: "bold", fontStyle: 'italic', fontSize: 18 }}>Job Completed: </Text>
            <Text style={{ fontSize: 18 }}>20</Text>
          </View>
            <Text></Text>

          {/* Skills */}
          <Text style={{ fontWeight: "bold", fontStyle: 'italic', fontSize: 18 }}>Skills: </Text>
          <Text style={{ fontSize: 18 }}> Accounting, Engineering, and Law </Text>
            <Text></Text>

          {/* Contact Information */}
          <Text style={{ fontWeight: "bold", fontStyle: 'italic', fontSize: 18 }}>Contact Info: </Text>
          {/* Phone Number */}
          <View style={{flexDirection: 'row'}}>
              <Text style={{ fontWeight: 'bold', fontSize: 17}}> Tel: </Text>
              <Text style={{ fontSize: 18 }}> (408) 888 1234 </Text>
          </View>
          {/* Email */}
          <View style={{flexDirection: 'row'}}>
            <Text style={{ fontWeight: 'bold', fontSize: 17}}> Email: </Text>
            <Text style={{ fontSize: 18 }}> ask_help@HTCorp.com </Text>
          </View>
            <Text></Text>

        </View>
        <Button 
          style={{width:100, alignSelf:'center', margin:10}} 
          mode="contained"
          onPress = {()=> navigate('NinjaEditBio')}
        >
          Edit Bio
        </Button>
        </Card>
      </View>
    );
  }
}

export default NinjaBio;
