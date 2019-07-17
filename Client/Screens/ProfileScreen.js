import React from "react";
import { View, Text } from "react-native";
import {StyleSheet,Image,TouchableOpacity} from "react-native";


class ProfileScreen  extends React.Component {
    render() {
        return (
          
<View>
            <View style={styles.Header}>
                    <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                        Master Profile
                    </Text>
                    <Image style={{ width: 40, height: 40 }}
                        source={require("../assets/crow.png")}/>
            </View>
            <View style={styles.Body}>
                    <Image style={{ width: 100, height: 100, overflow: 'hidden', borderRadius: 80 }}
                        source={require('../assets/snoopdogg.jpg')} />
                        <Text style={{fontWeight: "bold", fontSize: 25 }}>Snoop Dogg</Text>
            </View>
            <View style={styles.Body}>
                <Text>Address: Hollywood</Text>

            </View>
</View>
          );
        }
      }
      
      const styles = StyleSheet.create({
        Header: {
            marginTop: "5%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderBottomWidth: 1,
            borderBottomColor: "#D3D3D3"
          },
        Body: {
            flexDirection: 'column', 
            alignItems: "center", 
            justifyContent: "center", 
            flexDirection: 'column',
            borderBottomColor: "#D3D3D3"
        }  
       
      });



export default ProfileScreen