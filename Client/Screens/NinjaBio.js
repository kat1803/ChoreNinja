import React from "react";
import { View, Text, Image } from "react-native";
// import { Card, WingBlank, WhiteSpace } from 'antd-mobile';

class NinjaBio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Ninjaname: "Hung Tang"
    };
  }
  render() {
    // const styles = StyleSheet.create({
    //     container: {
    //       borderRadius: 4,
    //       borderWidth: 0.5,
    //       borderColor: '#d6d7da',
    //     },
    //     title: {
    //       fontSize: 19,
    //       fontWeight: 'bold',
    //     },
    //     activeTitle: {
    //       color: 'red',
    //     },
    //   });
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            borderBottomWidth: 5,
            borderBottomColor: "#e4c5e9",
            backgroundColor:"#e4c5e9",
            margin: "2%", 
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Ninja Bio</Text>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../assets/ninjabio.png")}
          />
        </View>
        <View
          style={{
            //flex: 2,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <Image
            style={{
              width: 160,
              height: 160,
              overflow: "hidden",
            }}
            source={require("../assets/HungcarriesTaiwanFlag.jpeg")}
          />
          <Text style={{ fontWeight: "bold", fontSize: 23 }}>
            {this.state.Ninjaname}
          </Text>
        </View>

        <View
          style={{
            borderRadius: 3,
            borderWidth: 1,
            borderColor: "#d6d7da",
            //flex: 3,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
            padding: 5
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Bio:</Text>
          <Text>
            I am software engineer student at SJSU. This is choreNinja, our
            senior project
          </Text>
          <Text style={{ fontWeight: "bold" }}>Special skills:</Text>
          <Text>
            Web application development, Android development, Front-end
            development
          </Text>
          <Text style={{ fontWeight: "bold" }}>Side skill:</Text>
          <Text>
            Translator, nail technician, Teaching assistant, Peer Mentor, Hotel
            management
          </Text>
          <Text style={{ fontWeight: "bold" }}>Tool:</Text>
          <Text>a Laptop, a mobile phone</Text>
          <Text style={{ fontWeight: "bold" }}>Rating:</Text>
          <Text>98% positive</Text>
          <Text style={{ fontWeight: "bold" }}>Job done:</Text>
          <Text>20</Text>
        </View>
      </View>
    );
  }
}

export default NinjaBio;
