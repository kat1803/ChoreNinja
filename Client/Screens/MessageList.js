import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import { TouchableRipple, Text } from 'react-native-paper';
import Avatar from './Avatar/Avatar';

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    nameView: {
        flex: 1,
        paddingHorizontal: 8,
        justifyContent: 'center'
    },
    head: {
        fontSize: 16,
        color: 'black',
        textAlign: 'left'
    },
    sub: {
        color: 'grey',
        paddingTop: 4
    },
    icon: {
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    hView: {
        backgroundColor: 'white'
    },
    header: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'grey',
        paddingVertical: 12,
        paddingHorizontal: 16
    },
    groupView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12
    },
    grpIcn: {
        paddingHorizontal: 16
    },
    grpText: {
        fontSize: 15
    }
});

class MessageItem extends Component {
    onPress = () => {
        console.log('Pressed');
    };
    render() {
        const { name, picture, LastMessage } = this.props.item;

        return (
            <TouchableRipple
                onPress={this.onPress}
                rippleColor="rgba(0, 0, 0, .32)"
            >
                <View style={styles.item}>
                    <Avatar uri={picture.thumbnail} />
                    <View style={styles.nameView}>
                        <Text style={styles.head}>
                            {name.first[0].toUpperCase() +
                                name.first.slice(1) +
                                ' ' +
                                name.last[0].toUpperCase() +
                                name.last.slice(1)}
                        </Text>
                        <Text style={styles.sub}>{LastMessage.message}</Text>
                    </View>
                </View>
            </TouchableRipple>
        );
    }
}

export default class MessageList extends Component {
    onPress = () => {
        console.log('Pressed');
    };
    render() {
		let data = [
			{
				name: {
					first: "phuc",
					last: "le",
				},
				picture: {
					thumbnail: '../assets/ninjabio.png'
				},
				LastMessage: {
					message: "Still coming?"
				}
			},
			{
				name: {
					first: "phuc",
					last: "le",
				},
				picture: {
					thumbnail: '../assets/ninjabio.png'
				},
				LastMessage: {
					message: "Still coming?"
				}
			},
			{
				name: {
					first: "phuc",
					last: "le",
				},
				picture: {
					thumbnail: '../assets/ninjabio.png'
				},
				LastMessage: {
					message: "Still coming?"
				}
			},
			{
				name: {
					first: "phuc",
					last: "le",
				},
				picture: {
					thumbnail: '../assets/ninjabio.png'
				},
				LastMessage: {
					message: "Still coming?"
				}
			},
		]
        return (
			<div>
				{/* {
					data.map((item)=> <MessageItem item ={item}/>)
				} */}
				<Text>Hello</Text>
				{/* <MessageItem item ={{
				name: {
					first: "phuc",
					last: "le",
				},
				picture: {
					thumbnail: '../assets/ninjabio.png'
				},
				LastMessage: {
					message: "Still coming?"
				}
			}}/> */}
			</div>
        );
    }
}
