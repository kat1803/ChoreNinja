import React from "react";
import { View, Text, Image, StyleSheet, TouchableHighlight } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { connect } from "react-redux";
import { TextInput, Button } from "react-native-paper";

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
                <Image style={{ width: 200, height: 330 }}
                        source={require("../assets/ninja.png")}/>
                <Text style={styles.Text}>
                    Our all-in-one service platform that instantly connects you with a professional Ninja service provider.
                </Text>
                <Text style={styles.Text}>
                    Ranging from all your basic needs to professional needs. Be more productive with us and join Chore Ninja.
                </Text>
                {/* <Button onPress={this.handleSignOut} color= '#03A9F4'> */}
                <Button
                    style={{
                        alignSelf: "center",
                        backgroundColor: "#1B58B5",
                        margin: 5
                    }}
                    mode="contained"
                    onPress={this.handleSignOut}
                >
                    Sign Out
                </Button>
                {/* <TouchableHighlight onPress={this.handleSignOut} color='#03A9F4'>
                    <Text style={styles.button}> Sign Out </Text>
                </TouchableHighlight> 
                Our all-in-one service platform that instantly connects you with a professional Ninja service provider.
                    Ranging from all your basic needs to professional needs.
                    Be more productive with us and join Chore Ninja.
                */}
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
        fontWeight: "400", 
        fontStyle: 'italic',
        textAlign: 'center',
        fontSize: 15,
        padding: 10,
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