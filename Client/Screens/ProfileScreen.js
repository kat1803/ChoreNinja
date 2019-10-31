import React from "react";
import { View, Text } from "react-native";
import { Card, ListItem, Icon } from "react-native-elements";
import { Image, StyleSheet } from "react-native";
import { Button, TouchableRipple, TextInput } from "react-native-paper";

// Formatted with the following command:
// Nhis-MacBook-Pro:Screens kathryn$ prettier --write ProfileScreen.js


class ProfileScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: false,
      name: '',
      email: '',
      phone: '',
      description: '',
      rating: ''

    }
  }
  
  handleEdit() {
    // alert("Edit button clicked");
    this.setState({
      edit: false
    })
  }
  render() {
    const styles = StyleSheet.create({
      Header: {
        margin: "2%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 5, //change the size of the purple line
        borderBottomColor: "#e4c5e9",
        backgroundColor: "#e4c5e9"
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
        <View>
          {!this.state.edit ?
            <View>
              <Card
                title={this.state.name == "" ? "No Name" : state.name.trim()}
              >
                <Image
                  style={{
                    width: 250,
                    height: 250,
                    alignSelf: 'center',
                  }}
                  source={require("../assets/businessprofile.png")}
                /> 
                
                {/* Descriptions */}
                <Text style={{ marginTop: 30, fontSize: 20, fontStyle: 'italic' }}>{this.state.description == "" ? "Professional" : this.state.description.trim()}</Text>
                <Text></Text>

                {/* Contact Information */}
                <Text style={{ fontWeight: "bold", fontStyle: 'italic', fontSize: 18 }}>Contact Info: </Text>
                {/* Phone Number */}
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 17 }}> Tel: </Text>
                  <Text style={{ fontSize: 18 }}>{this.state.phone}</Text>
                </View>
                {/* Email */}
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 17 }}> Email: </Text>
                  <Text style={{ fontSize: 18 }}>{this.state.email}</Text>
                </View>
                <Text/>

                <Button 
                  style={{ width: 100, alignSelf: 'center', backgsroundColor: '#01479b', margin: 10 }} mode="contained"
                  onPress={()=> {this.setState({ edit: true })}}
                >
                    EDIT
                </Button>
              </Card>
              {/* <Button style={{ alignSelf: 'center', margin: 10 }} mode="outlined">Invite your friend to join</Button> */}
            </View> 
            : 
              <View>
                <Card
                  title="EDIT BIO"
                >
                  {/* Name */}
                  <TextInput
                    style={{ backgroundColor: "rgb(250,250,250)", padding: 10 }}
                    underlineColorAndroid="transparent"
                    numberOfLines={1}
                    label="Name"
                    onChangeText={description => this.setState({ name })}
                    value={this.state.name}
                  />
                  {/* Description */}
                  <TextInput
                    style={{ backgroundColor: "rgb(250,250,250)", padding: 10 }}
                    underlineColorAndroid="transparent"
                    numberOfLines={1}
                    label="Description"
                    onChangeText={description => this.setState({ description })}
                    value={this.state.description}
                  />

                  {/* Phone */}
                  <TextInput
                    style={{ backgroundColor: "rgb(250,250,250)", padding: 10 }}
                    underlineColorAndroid="transparent"
                    numberOfLines={1}
                    label="Phone"
                    onChangeText={phone => this.setState({ phone })}
                    value={this.state.phone}
                  />

                  {/* Email */}
                  <TextInput
                    style={{ backgroundColor: "rgb(250,250,250)", padding: 10 }}
                    underlineColorAndroid="transparent"
                    numberOfLines={1}
                    label="Email"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                  />

                  <Button
                    style={{
                      width: 100,
                      alignSelf: "center",
                      backgroundColor: "#01479b",
                      margin: 10
                    }}
                    mode="contained"
                    onPress={() => this.handleEdit()}
                  >
                    <Text>Save</Text>
                  </Button>

                </Card>
              </View>
          }
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