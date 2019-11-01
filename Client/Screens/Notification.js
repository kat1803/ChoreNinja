import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
// import { Card, Radio, InputItem, List, WingBlank, WhiteSpace, Flex, Checkbox } from '@ant-design/react-native';
import { Button, Title, Card, List } from "react-native-paper";
// const CheckboxItem = Checkbox.CheckboxItem;

class Notification extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notify: [
                { id: 1, title: "Laundry", ninja: "John" },
                { id: 2, title: "Lawn Cleaning", ninja: "Hung Tang" },
                { id: 3, title: "Lawn Mowing", ninja: "Ben" },
                { id: 4, title: "Car Wash", ninja: "James" },
                { id: 5, title: "Dog Day Care", ninja: "Bob" },
                { id: 6, title: "Pick me Up", ninja: "Nhi" },
                { id: 7, title: "Recycle My Bottle", ninja: "Goh" },
                { id: 8, title: "Pickup at Airport", ninja: "Liang" },
                { id: 9, title: "Recycle My Bottle", ninja: "Goh" },
                { id: 10, title: "Pickup at Airport", ninja: "Liang" },
            ],
        }
    }
    render() {
        return (
                <View>
                    <Title style={{ fontSize: 25, alignSelf: 'center'}}>Notifications</Title>
                    <View style={styles.lineStyle}/>
                    <ScrollView>
                        {this.state.notify.map((notify, i) => {
                            return (
                                <List.Item
                                    style={{ flex: 1 }}
                                    key={i}
                                    title={notify.ninja + ' accepted your ' + notify.title + ' job'}
                                    titleStyle={{ fontWeight: 'bold' }}
                                    description={'You will be contact by ' + notify.ninja + ' shortly'}
                                    left={props => <List.Icon {...props} icon='mail'/>}
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


export default Notification;