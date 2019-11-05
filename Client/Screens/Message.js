// export default Message
import firebaseService from '../Firebase/firebase'
import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { View, Text, Switch } from "react-native";
import { List, Button } from 'react-native-paper';
import { connect } from "react-redux";

class Message extends React.Component {
  state = {
	messages: [],
	conID : '',
	conIDs: ['Conversation1', 'Conversation2']
  }

  changeConID = (conID) =>{
	this.setState({ conID, messages: [] })
	firebaseService.refOff()
	firebaseService.setConversation(conID)
	firebaseService.refOn(message => {
		this.setState(previousState =>({ messages: GiftedChat.append(previousState.messages, message) }))
	});
}

  componentWillUnmount() {
	firebaseService.refOff();
  }

  render() {
	const { conID, conIDs, messages } = this.state

	  if (conID != ''){
		return (
		  <View style={{ flex: 1 }}>
			<Button mode="contained" onPress={() => this.changeConID('')}>
			  Back
			</Button>
			<GiftedChat
			  messages={this.state.messages}
			  onSend={firebaseService.send}
			  user={{
				  _id: this.props.user._id,
				  name: `${this.props.user.first_name} ${this.props.user.last_name}`
			  }}
			/>
		  </View>)
	  } else{
		return (
		  <View>
			{
				this.props.user.conversationId ?
					this.props.user.conversationId.map((conID, idx) => {
						return <List.Item
						  key={idx}
						  onPress={() => this.changeConID(conID)}
						  title={conID}
						//   description={conID}
						  left={props => <List.Icon {...props} icon="chat" />}
						/>
					  })
				:
					conIDs.map((conID, idx) => {
						return <List.Item
						  key={idx}
						  onPress={() => this.changeConID(conID)}
						  title={conID}
						//   description={conID}
						  left={props => <List.Icon {...props} icon="chat" />}
						/>
				  })
			}
		  </View>)
	  }
  }
}

const mapStateToProps = state => {
	return {
	  user: state.auth.user
	};
  };
  
  const mapDispatchToProps = dispatch => {
	return {};
  };
  
  export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(Message);