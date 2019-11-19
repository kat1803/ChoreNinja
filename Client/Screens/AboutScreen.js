import React from "react";
import { View, Text, Image, StyleSheet, TouchableHighlight } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { connect } from "react-redux";

class AboutScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            signout: false
        }
    }

    handleSignOut = () => {
        this.props.signout();
    }

    render() {
        return (
            <View style={styles.Content}>
                <Image style={{ width: 200, height: 350 }}
                        source={require("../assets/ninja.png")}/>
                <Text style={styles.Text}>
                    Our all-in-one service platform that instantly connects you with a professional Ninja service provider.
                    Ranging from all your basic needs to professional needs. 
                    Be more productive with us and join Chore Ninja. 
                </Text>
                <TouchableHighlight onPress={this.handleSignOut} color='#03A9F4'>
                    <Text style={styles.button}> Sign Out </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Content:{
        alignItems: "center", justifyContent: "center", paddingTop: 50, flex: 1
    },
    Text:{
        alignItems: "center", 
        justifyContent: "center",
        fontWeight: "bold", 
        fontSize: 15,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#1B58B5',
        width: 150,
        alignSelf: 'center',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 12,
        color: 'white',
        fontSize: 20,
        overflow: 'hidden',
        padding: 12,
        margin: 10,
        textAlign: 'center',
    },
})

const mapStateToProps = state => {
    return {
        user: state.auth.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signout: () => dispatch({
            type: "SIGN_OUT",
        }),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (AboutScreen);