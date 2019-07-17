import React from "react";
import { Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import {  Platform, StyleSheet, View, TextInput } from "react-native";
import { Button} from "react-native";

class HomeScreen extends React.Component {
    render() {
        return (
         <View>
            <View style={styles.MainContainer}>
            <TextInput
               style={styles.TextInputStyleClass}
               underlineColorAndroid="transparent"
               placeholder={"Job Description."}
               placeholderTextColor={"#9E9E9E"}
               numberOfLines={10}
               multiline={true}
             />
           </View>
           <View>
               <Button title="Post"></Button>
               </View>  
           </View>
        );
    }
}

const styles = StyleSheet.create({
    
    MainContainer :{
    marginTop: "25%" ,
     justifyContent: 'center',
     margin:20
       
     },
    
     TextInputStyleClass:{
       textAlign: 'center',
       height: 50,
       borderWidth: 2,
       borderColor: '#9E9E9E',
       borderRadius: 20 ,
       backgroundColor : "#FFFFFF",
       height: 150
        
       }
    
   });
   

export default HomeScreen