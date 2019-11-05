import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import { connect } from "react-redux";
class MenuNavBar extends Component {
    constructor(props){
        super(props)
        this.state ={
            signout: false
        }
    }

    handleSignOut = () =>{
        console.log("Signout hit")
        this.props.signout()
    }
    render(){
        return(
            <View >
               {/* <Image
				      	style={{ marginTop: 50, marginBottom: 20, width: 263, height: 150, alignSelf:"center"}}
				        	// style={{justifyContent: 'center', width: 263, height: 150}}  
				        	source={require('../assets/mainlogo.png')}
                /> */}
                <View style={{flexDirection: "row", margin: 10, borderBottomWidth: 2}}>
                  <View style={{marginRight: 5}}>
                      <FAIcon name="info" size={40} color='#0091EA'/>
                  </View>
                  <View>
                          <TouchableHighlight onPress={() => this.props.navigation.navigate('ABOUT')}>
                          <Text style={{fontSize: 30}}>About</Text>
                        </TouchableHighlight>
                  </View>
                   
                </View>
          
                <TouchableHighlight onPress={this.handleSignOut}>
                       <Text style={styles.button}> Sign out </Text>
                   </TouchableHighlight>
               

            </View>
        )
    }
}
//styles
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0277BD',
    width: 200,
    alignSelf:'center',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    color: 'white',
    fontSize: 24,
    overflow: 'hidden',
    padding: 12,
    margin: 10,
    textAlign:'center',
  },
})

// export default MenuNavBar;
const mapStateToProps = state => {
	return {
	  user: state.auth.user
	};
  };
  
const mapDispatchToProps = dispatch => {
	return {
	  signout: () =>
		dispatch({
		  type: "SIGN_OUT",
		}),
	};
  };



export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(MenuNavBar);
