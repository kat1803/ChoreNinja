import React, {Component} from 'react';
import { View, Button } from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import { Card} from "react-native-elements";

import { connect } from "react-redux";
class MenuNavBar extends Component {
    handleSignOut = () =>{
        console.log("Signout hit")
        this.props.signout()
    }
    render(){
        return(
            <View >
                <Card style={{flex:1}}>
                <View style={{
                    }}>
                    <Button
                    title="Ninja Home"
                    onPress={() => this.props.navigation.navigate('Ninja Home')}
                    />
                </View>
                
                <View style={{  }}>
                    <Button
                    title="Task Screen"
                    onPress={() => this.props.navigation.navigate('Task')}
                    />
                </View>
                <View style={{  }}>
                    <FAIcon
                        name="user"
                        size={30}
                        color='#0091EA'
                        />
                    <Button
                    title="Ninja Bio"
                    onPress={() => this.props.navigation.navigate('Ninja')}
                    />
                </View>
                <View style={{ }}>
                    <Button
                    title="About"
                    onPress={() => this.props.navigation.navigate('About')}
                    />
                </View>
                <Button title="Signout" onPress={this.handleSignOut} />
                </Card>
            </View>
        )
    }
}

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
  