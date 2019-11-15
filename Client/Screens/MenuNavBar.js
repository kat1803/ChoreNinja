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
        this.props.signout()
    }
    render(){
        return(
            <View >
              <View style={{flexDirection: "row", margin: 10, borderBottomWidth: 2}}>
                <View style={{marginRight: 5}}>
                  <FAIcon name="info" size={30} color='#1B58B5'/>
                </View>
                <View>
                  <TouchableHighlight onPress={() => this.props.navigation.navigate('ABOUT')}>
                    <Text style={{fontSize: 25}}> About</Text>
                  </TouchableHighlight>
                </View>
              </View>
          
              <TouchableHighlight onPress={this.handleSignOut} color= '#03A9F4'>
                <Text style={styles.button}> Sign Out </Text>
              </TouchableHighlight>
            </View>
        )
    }
}
//styles
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1B58B5',
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
