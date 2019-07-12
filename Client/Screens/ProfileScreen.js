import React from "react";
import { View, Text } from "react-native";
import {StyleSheet,Image,TouchableOpacity} from "react-native";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class ProfileScreen  extends React.Component {
  
    render() {
        return (
                <View style={styles.container}>
                    <View style={styles.header}></View>
                    <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                    <View style={styles.body}>
                      <View style={styles.bodyContent}></View>
                        <Text style={styles.name}> Wu Tang </Text>
                        <Text style={styles.name}> Address: 123 Jacson Ave </Text>
                       
                          <Grid item xs={12}>
                          <Paper className={classes.paper}>xs=12</Paper>
                          </Grid>
                           <TouchableOpacity style={styles.buttonContainer}>
                          <Text>Invite your friend to get 10$ off</Text>  
                        </TouchableOpacity>              
                        <TouchableOpacity style={styles.buttonContainer}>
                          <Text>Join Ninja Team</Text> 
                        </TouchableOpacity>
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
              alignItems: 'center',
              fontSize:22,
              color:"#000000",
              fontWeight:'600',
            },
            body:{
              marginTop:40,
              alignItems: 'center',
            },
            bodyContent: {
              flex: 1,
              alignItems: 'center',
              padding:30,
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