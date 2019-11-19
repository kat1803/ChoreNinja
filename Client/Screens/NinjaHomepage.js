import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { connect } from "react-redux";
import { Searchbar, Button } from "react-native-paper";
import NinjaJoinScreen from "./NinjaJoinScreen";
import firebaseService from '../Firebase/firebase'

class NinjaHomepage extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
	  firstQuery: "",
	  posts: [],
	};
  }

  handleAcceptJob = (idx) =>{
	var posts = this.props.allPosts;
	var post = posts[idx];
	let edittedPost = {
		name: post.name,
		price: post.price,
		description: post.description,
		due_date: post.due_date,
		start_time: post.start_time,
		end_time: post.end_time,
		zipcode: post.zipcode,
		ninja: {
			id: this.props.user._id,
			username: this.props.user.username
		},
	};
	let conID = `${post.name} - ${this.props.user.first_name}`
	
	// Init the conversation between the ninja and the master
	firebaseService.createConversation(conID, this.props.user._id)
	firebaseService.createNotification(post, post.master.id, this.props.user._id)
	
	this.props.addConversation(conID, post.master.id, this.props.user._id, "Hi! I would like to take the job!")
	this.props.reduxEditPost(edittedPost, post._id)
	// this.props.navigation.navigate("Message")
  }

  componentWillMount(){
	this.props.reduxFetchAllPost()
  }

  render() {
	const { firstQuery } = this.state;
	return (
	  <ScrollView>
		{
			this.props.user.is_ninja ?
				<View style= {{flex: 1}}>
				  <View
					style={{
					  flexDirection: "row",
					  alignItems: "center",
					  justifyContent: "space-between",
					  margin: 10
					}}
				  >
					<Searchbar
					  placeholder="Search"
					  style={{ width: 300, flex: 1 }}
					  onChangeText={firstQuery => {
						this.setState({ firstQuery });
					  }}
					  onSubmitEditing={()=>this.props.searchPost(firstQuery)}
					  value={firstQuery}
					/>
				  </View>
				  { this.props.allPosts &&
					this.props.allPosts.map((post, idx) => (
					  <Card
						key={idx}
						title={post.name == "" ? "No Title" : post.name.trim()}
						image={require("../assets/examplejob.png")}
					  >
						{/* Job Description */}
						<View >
						  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
							Description:{" "}
						  </Text>
						  <Text style={{ fontSize: 20, fontStyle: "italic" }}>
							{post.description}
						  </Text>
						</View>
						<Text />

						{/* Date */}
						<View style={{ flexDirection: "row" }}>
						  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
							Date: {" "}
						  </Text>
						  <Text style={{ fontSize: 20, fontStyle: "italic" }}>
								{new Date(post.due_date).toISOString().slice(8, 10)}-
                    			{new Date(post.due_date).toISOString().slice(5, 7)}-
                    			{new Date(post.due_date).toISOString().slice(0, 4)}
						  </Text>
						</View>
						<Text />

						{/* Time */}
						<View style={{ flexDirection: "row" }}>
						  	<Text style={{ fontSize: 18, fontWeight: "bold" }}>
								Time: btw {" "}
						  	</Text>
						  	<Text style={{ fontSize: 20, fontStyle: "italic" }}>
								{new Date(post.start_date).toISOString().slice(11, 16)}
						 	</Text>
						  	<Text style={{ fontSize: 18, fontWeight: "bold" }}>{" & "}</Text>
						  	<Text style={{ fontSize: 20, fontStyle: "italic" }}>
								{new Date(post.due_date).toISOString().slice(11, 16)}
						  	</Text>
						</View>
						<Text/>

						{/* Price */}
						<View style={{ flexDirection: "row" }}>
						  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
							Price: {" "}
						  </Text>
						  <Text style={{ fontSize: 20, fontStyle: "italic" }}>
							$ {post.price}
						  </Text>
						</View>
						<Text />

						{/* Zip Code */}
						<View style={{ flexDirection: "row" }}>
						  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
							Zip Code: {" "}
						  </Text>
						  <Text style={{ fontSize: 20, fontStyle: "italic" }}>
							{post.zipcode}
						  </Text>
						</View>
						<Text />

						{/* Posted Date */}
						<View style={{ flexDirection: "row" }}>
							<Text style={{ fontSize: 12, fontWeight: "bold" }}>
								Posted On: {" "}
							</Text>
							<Text style={{ fontSize: 12, fontStyle: "italic" }}>
								{new Date(post.post_date).toISOString().slice(8, 10)}-
                    			{new Date(post.post_date).toISOString().slice(5, 7)}-
                    			{new Date(post.post_date).toISOString().slice(0, 4)}
							</Text>
						</View>
						<Text />

						<View
						  style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignSelf: 'center'
						  }}
						>
						  <Button
							style={{
							  width: 150,
							  margin: 7,
							  backgroundColor: "#008000",
							}}
							mode="contained"
							onPress={() => this.handleAcceptJob(idx)}
						  >
							<Text>ACCEPT JOB</Text>
						  </Button>
						</View>
					  </Card>
					))}
				</View>
			:
				<NinjaJoinScreen/>
		}
	  </ScrollView>
	);
  }
}

//export default NinjaHomepage
const mapStateToProps = state => {
  return {
	allPosts: state.posts.allPosts,
	user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
	addConversation: (conversationId, masterId, ninjaId, lastMessage) =>
		dispatch({
		  type: "ADD_CONVERSATION",
		  value: {conversationId, masterId, ninjaId, lastMessage}
		}),
	reduxFetchAllPost: () =>
	  dispatch({
		type: "FETCH_ALL_POST",
	  }),
	reduxEditPost: (post, id) =>
	  dispatch({
		type: "EDIT_POST",
		value: {post, id}
	  }),
	searchPost: (name) =>
	  dispatch({
		type: "SEARCH_POST",
		value: {name}
	  })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NinjaHomepage);