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
		zip: post.zipcode,
		ninja: {
			id: this.props.user._id,
			username: this.props.user.username
		},
	};
	console.log(post)
	console.log(post.master)
	console.log(post.master.id)
	
	// Init the conversation between the ninja and the master
	firebaseService.createConversation(post._id, post.master.id, this.props.user._id)
	
	this.props.addConversation(`${post._id}_${post.master.id}_${this.props.user._id}`, post.master.id, this.props.user._id)
	this.props.reduxEditPost(edittedPost, post._id)
	this.props.navigation.navigate("Message")
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
					  onChangeText={query => {
						this.setState({ firstQuery: query });
					  }}
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

						{/* Due Date */}
						<View style={{ flexDirection: "row" }}>
						  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
							Date:{" "}
						  </Text>
						  <Text style={{ fontSize: 20, fontStyle: "italic" }}>
							{post.due_date}
						  </Text>
						</View>
						<Text />

						{/* Time */}
						<View style={{ flexDirection: "row" }}>
						  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
							Time: between {" "}
						  </Text>
						  <Text style={{ fontSize: 20, fontStyle: "italic" }}>
							{post.start_time}
						  </Text>
						  <Text style={{ marginLeft: 20, fontSize: 18, fontWeight: "bold" }}>
							and {" "}
						  </Text>
						  <Text style={{ fontSize: 20, fontStyle: "italic" }}>
							{post.end_time}
						  </Text>
						</View>
						<Text />
						<View style={{ flexDirection: "row" }}>
						  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
							Price:{" "}
						  </Text>
						  <Text style={{ fontSize: 20, fontStyle: "italic" }}>
							$ {post.price}
						  </Text>
						</View>
						<Text />
						<View style={{ flexDirection: "row" }}>
						  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
							Zip Code{" "}
						  </Text>
						  <Text style={{ fontSize: 20, fontStyle: "italic" }}>
							{post.zipcode}
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
	addConversation: (conversationId, masterId, ninjaId) =>
		dispatch({
		  type: "ADD_CONVERSATION",
		  value: {conversationId, masterId, ninjaId}
		}),
	reduxFetchAllPost: () =>
	  dispatch({
		type: "FETCH_ALL_POST",
	  }),
	reduxEditPost: (post, id) =>
	  dispatch({
		type: "EDIT_POST",
		value: {post, id}
	  })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NinjaHomepage);