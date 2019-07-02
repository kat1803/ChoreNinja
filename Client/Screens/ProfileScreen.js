import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import {StyleSheet,Image,TouchableOpacity} from "react-native";
import { AppRegistry } from "react-native";
import Grid from 'react-native-grid-component';
class ProfileScreen  extends React.Component {
    render() {
        return (
                <View style={styles.container}>
                    <View style={styles.header}></View>
                    <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                    <View style={styles.body}>
                      <View style={styles.bodyContent}>
                        <Text style={styles.name}> Wu Tang </Text>
                        <Text style={styles.name}> Wu Tang </Text>
                      
                     <View style={styles.footer}></View>
                        <TouchableOpacity style={styles.buttonContainer}>
                          <Text>Invite Friend to get $10 off</Text>  
                        </TouchableOpacity>              
                        <TouchableOpacity style={styles.buttonContainer}>
                          <Text>Join Ninja Team</Text> 
                        </TouchableOpacity>
                      </View>
                  </View>
                </View>
              );
            }
          }
          
          const styles = StyleSheet.create({
            header:{
              backgroundColor: "#00BFFF",
              height:200,
            },
            footer:{
              flex: 1,
              alignItems: 'center',
              padding:30,
            },
            avatar: {
              width: 130,
              height: 130,
              borderRadius: 63,
              borderWidth: 4,
              borderColor: "white",
              marginBottom:10,
              alignSelf:'center',
              position: 'absolute',
              marginTop:130
            },
            name:{
              fontSize:22,
              color:"#FFFFFF",
              fontWeight:'600',
            },
            body:{
              marginTop:40,
            },
            bodyContent: {
              flex: 1,
              alignItems: 'center',
              padding:30,
            },
            name:{
              fontSize:28,
              color: "#696969",
              fontWeight: "600"
            },
            buttonContainer: {
              marginTop:10,
              height:45,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom:20,
              width:250,
              borderRadius:30,
              backgroundColor: "#00BFFF",
            },
          });
           
          
          //export default CustomerProfileScreen
export default ProfileScreen