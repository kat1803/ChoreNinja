// export default Message
import firebaseService from '../Firebase/firebase'
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
    firebaseService.setConversation(conID)
    this.setState({ conID, message: [] })
  }

  componentDidMount() {
    firebaseService.refOn(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }
  componentWillUnmount() {
    firebaseService.refOff();
  }

  render() {
    const { conID, conIDs } = this.state
    console.log(conID, conIDs)

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