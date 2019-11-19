import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
// import { Card, Radio, InputItem, List, WingBlank, WhiteSpace, Flex, Checkbox } from '@ant-design/react-native';
import { Button, Title, Card, List } from "react-native-paper";
// const CheckboxItem = Checkbox.CheckboxItem;
import { connect } from "react-redux";
import firebaseService from '../Firebase/firebase'
class Notification extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
			messages: []
        }
	}

	componentWillMount(){
		  firebaseService.setUser(this.props.auth.user)
		  firebaseService.refNotificationOnValue(messages => {
			  this.setState({messages})
		  });
	}

	componentWillUnmount(){
		firebaseService.refNotificationOff()
	}

    render() {
        return (
                <View>
                    <Title style={{ fontSize: 25, alignSelf: 'center'}}>Notifications</Title>
                    <View style={styles.lineStyle}/>
                    <ScrollView>
                        {this.state.messages.map((message, i) => {
                            return (
                                <List.Item
                                    style={{ flex: 1 }}
                                    key={i}
                                    title={message.text.substring(0,16)}
                                    description={message.text.substring(17)}
                                    titleStyle={{ fontWeight: 'bold' }}
                                    // description={this.calAgoTime(message.createAt)}
                                    left={props => <List.Icon {...props} icon='notifications'/>}
                                />
                            );
                        })}    
                    </ScrollView>                   
                </View>
        )
    }
}

// {
//     this.state.tasks.map((task, i) => {
//         return (

const styles = StyleSheet.create({
    lineStyle:{
        borderWidth: 0.5,
        borderColor: 'black',
        margin: 10,
    }
})

const mapStateToProps = state => {
	return {
	  auth: state.auth
	};
  };
  
const mapDispatchToProps = dispatch => {
	return {
	};
  };

export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(Notification);