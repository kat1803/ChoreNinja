import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Card } from 'react-native-elements';
import { Button } from "react-native-paper";
import { connect } from "react-redux";


class NinjaOngoingExpired extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			pagetitle: "Ninja Homepage",
			tasks: [
				{ id: 1, Job: "Laundry", Field: "Laundry", Description: "I need someone to pick up my laundry at my home and do it.", Date: '02/23/19', Time: "3pm-5pm", status: "In Progress" },
				{ id: 2, Job: "Lawn Cleaning", Field: "Garden", Description: "I need someone to come to my home and clean up my lawn.", Date: '08/23/19', Time: "3pm-5pm", status: "Completed" },
				{ id: 3, Job: "Pick up dog", Field: "Transportation", Description: "I need someone to pick up my dog at airport and send him home.", Date: '02/23/19', Time: "3pm-5pm", status: "In Progress" }
			],
			status: '',

		}
	}
	
	handleCheckComplete = (idx) =>{
		var posts = this.props.myJobs;
		var post = posts[idx];
		let edittedPost = {
			end_date: new Date().toISOString().slice(0,19).replace('T', " "),
		};
		this.props.reduxEditPost(edittedPost, post._id)
	}
	
	componentWillMount(){
		this.props.reduxFetchMyJob()
	}

	appearMessage = () => {
		console.log('pressed');
	}

	render() {
		return (
			<ScrollView>
				<View style={{ flex: 1 }}>
					<Text style={{ alignSelf: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 'bold' }}>
						{/* <Image style={{ width:45, height:45, margin:5}} source={require("../assets/tasks.png")}/> My tasks:  */}
						MY TASKS
					</Text>
					{
						this.props.myJobs &&
						this.props.myJobs.map((job, idx) => {
						return (
							<Card
								key={idx}
								title={job.name}
								image={require('../assets/examplejob.png')}
							>
								{
									job.end_date ? 
									<Text style={{ fontStyle: 'italic', textAlign: 'center', fontSize: 20, backgroundColor: '#C0C0C0', margin: 7 }}>Completed</Text> 
								: 
									<Text style={{ fontStyle: 'italic', textAlign: 'center', fontSize: 20, backgroundColor: '#90EE90', margin: 7 }}>Ongoing</Text>
								}
								{/* Job Description */}
								<View >
									<Text style={{ fontSize: 18, fontWeight: "bold" }}>
										Description:{" "}
									</Text>
									<Text style={{ fontSize: 20, fontStyle: "italic" }}>
										{job.description}
									</Text>
								</View>

								{/* Due Date */}
								<View style={{ flexDirection: "row" }}>
									<Text style={{ fontSize: 18, fontWeight: "bold" }}>
										Date:{" "}
									</Text>
									<Text style={{ fontSize: 20, fontStyle: "italic" }}>
										{job.due_date}
									</Text>
								</View>

								{/* Time */}
								<View style={{ flexDirection: "row" }}>
									<Text style={{ fontSize: 18, fontWeight: "bold" }}>
										Time: between {" "}
									</Text>
									<Text style={{ fontSize: 20, fontStyle: "italic" }}>
										{job.start_time}
									</Text>
									<Text style={{ marginLeft: 20, fontSize: 18, fontWeight: "bold" }}>
										and {" "}
									</Text>
									<Text style={{ fontSize: 20, fontStyle: "italic" }}>
										{job.end_date}
									</Text>
								</View>

								{/* Price of the Job */}
								<View style={{ flexDirection: "row" }}>
									<Text style={{ fontSize: 18, fontWeight: "bold" }}>
										Price:{" "}
									</Text>
									<Text style={{ fontSize: 20, fontStyle: "italic" }}>
										$ {job.price}
									</Text>
								</View>

								{/* Job Zipcode */}
								<View style={{ flexDirection: "row" }}>
									<Text style={{ fontSize: 18, fontWeight: "bold" }}>
										Zip Code{" "}
									</Text>
									<Text style={{ fontSize: 20, fontStyle: "italic" }}>
										{job.zipcode}
									</Text>
								</View>

								{/* Payment Method
								<View style={{ flexDirection: "row" }}>
									<Text style={{ fontSize: 18, fontWeight: "bold" }}>
										Payment Method: {" "}
									</Text>
									<Text style={{ fontSize: 20, fontStyle: "italic" }}>
										{task.paymentMethod}
									</Text>
								</View>
								<Text/> */}
								{
									!job.end_date &&
										<Button
											style={{ width: 150, alignSelf: 'center', margin: 10 }}
											mode="contained"
											onPress={() => this.handleCheckComplete(idx)}
										>
											<Text>Complete</Text>
										</Button>
								}
							</Card>
						)
					}
					)}
				</View>
			</ScrollView >

		);
	}
}

//export default NinjaHomepage
const mapStateToProps = state => {
	return {
	  myJobs: state.posts.myJobs,
	  user: state.auth.user
	};
  };
  
  const mapDispatchToProps = dispatch => {
	return {
	  reduxFetchMyJob: () =>
		dispatch({
		  type: "FETCH_MY_JOB",
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
  )(NinjaOngoingExpired);
