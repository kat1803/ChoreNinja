// export default Message
import Firebase from '../Firebase/firebase'
import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { View, Text, Switch } from "react-native";
import { List, Button } from 'react-native-paper';

class Message extends React.Component {
  state = {
	messages: [],
	conID : '',
	conIDs: ['Conversation1', 'Conversation2']
  }

  changeConID = (conID) =>{
	this.setState({ conID, messages: [] })
	  if (this.firebaseService != null){
		  this.firebaseService.refOff()
		  this.firebaseService = null
		}
	  this.firebaseService = new Firebase(conID)
	  this.firebaseService.refOn(message => {
		// console.log("each", message)
		// console.log("this.state.messages",this.state.messages)
		// console.log("this.state.conID",this.state.conID)
		this.setState(previousState =>({ messages: [...previousState.messages, message] }))
		// this.setState(previousState =>({ messages: GiftedChat.append(previousState.messages, message) }))
	});
	// firebaseService.refOff();
	// firebaseService.setConversation(conID)
	// console.log(firebaseService.ref)
	// firebaseService.refOnValue(message => {
	// 	console.log("whole", message)
	// 	this.setState({ conID, messages: message})
	// });
}

// componentDidMount(){
// 	if (this.state.conID != ''){
// 		firebaseService.refOn(message => {
// 			console.log("each", message)
// 			this.setState(previousState =>({ messages: GiftedChat.append(previousState.messages, message) }))
// 		});
// 	}
//   }

  componentWillUnmount() {
	this.firebaseService.refOff();
  }

  render() {
	const { conID, conIDs, messages } = this.state
	// console.log(conID, conIDs, messages)

	  if (conID != ''){
		return (
		  <View style={{ flex: 1 }}>
			<Button mode="contained" onPress={() => this.changeConID('')}>
			  Back
			</Button>
			<GiftedChat
			  messages={this.state.messages}
			  onSend={this.firebaseService.send}
			  user={{
				_id: 1,
			  }}
			/>
		  </View>)
	  } else{
		return (
		  <View>
			{
			  conIDs.map((conID, idx) => {
				return <List.Item
				  key={idx}
				  onPress={() => this.changeConID(conID)}
				  title={conID}
				  description={conID}
				  left={props => <List.Icon {...props} icon="folder" />}
				/>
			  })
			}
		  </View>)
	  }
  }
}

export default Message