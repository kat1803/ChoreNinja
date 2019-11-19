// export default Message
import firebaseService from '../Firebase/firebase'
import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { View, ScrollView, Text, Switch, StyleSheet } from "react-native";
import { List, Button, Title } from 'react-native-paper';
import { connect } from "react-redux";

class Message extends React.Component {
  state = {
	messages: [],
	conID : ''
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

send = (message) =>{
	firebaseService.send(message)
	this.props.updateConversation(this.state.conID.id, this.state.conID.masterId, this.state.conID.ninjaId, message[0].text)
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
			  onSend={this.send}
			  user={{
				  _id: this.props.user._id,
				  name: `${this.props.user.first_name} ${this.props.user.last_name}`
			  }}
			/>
		  </View>)
	  } else{
		return (
			<View>
				<Title style={{ fontSize: 25, alignSelf: 'center' }}>Messages</Title>
				<View style={styles.lineStyle} />
				<ScrollView>
					{
						this.props.user.conversationId ?
							this.props.user.conversationId.map((conID, idx) => {
								return <List.Item
									key={idx}
									onPress={() => this.changeConID(conID)}
									title={conID.id}
									description={conID.info.lastMessage}
									left={props => <List.Icon {...props} icon="mail" />}
								/>
							})
							:
							<Text>It is lonely here!!</Text>
					}
				</ScrollView>
			</View>
		)
	  }
  }
}

const styles = StyleSheet.create({
	lineStyle: {
		borderWidth: 0.5,
		borderColor: 'black',
		margin: 10,
	}
})

const mapStateToProps = state => {
	return {
	  user: state.auth.user
	};
  };
  
  const mapDispatchToProps = dispatch => {
	return {	
		updateConversation: (conversationId, masterId, ninjaId, lastMessage) =>
			dispatch({
			  type: "UPDATE_CONVERSATION",
			  value: {conversationId, masterId, ninjaId, lastMessage}
			}),
	};
  };
  
  export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(Message);