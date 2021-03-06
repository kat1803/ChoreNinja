import React from "react";
import { View, Text, DatePickerIOS, ScrollView } from "react-native";
import { Platform, StyleSheet, Image } from "react-native";
import { Card, CheckBox } from "react-native-elements";
import { TextInput, Button } from "react-native-paper";

import { connect } from "react-redux";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      date: '',
      start_time: '',
      end_time: '',
      price: '',
      zipcode: '',
      paymentMethod: '',
      posts: [],
      showForm: false,
      editPostId: false,
    };
  }

  handleSave() {
    let newpost = {
      name: this.state.name,
      price: this.state.price,
      description: this.state.description,
      start_date: `${this.state.date} ${this.state.start_time}`,
      due_date: `${this.state.date} ${this.state.end_time}`,
      zipcode: this.state.zipcode,
    };
    this.state.date != "" ? newpost.date = this.state.date : null
    console.log("newpost", newpost)
    if (this.state.editPostId) {
      this.props.reduxEditPost(newpost, this.state.editPostId)
    } else {
      // Call redux dispatcher to make API call for POST request
      this.props.reduxHandlePost(newpost);
    }
    // // Copy the current post array
    // var newPosts = Object.assign(this.state.posts);

    // // Add new post into the posts array
    // newPosts.push(newpost)
    this.setState({
      name: "",
      price: "",
      description: "",
      date: "",
      start_time: "",
      end_time: "",
      zipcode: "",
      zipcodeError: "",
      nameError: "",
      descriptionError: "",
      dateError: "",
      startTimeError: "",
      endTimeError: "",
      priceError: "",
      showForm: false,
      editPostId: false
    });
  }

  handleEdit(idx) {
    var posts = this.props.myPosts;
    var post = posts[idx];
    this.setState({
      name: post.name,
      price: post.price,
      description: post.description,
      date: new Date(post.start_date).toISOString().slice(0, 10),
      start_time: new Date(post.start_date).toISOString().slice(11, 16),
      end_time: new Date(post.due_date).toISOString().slice(11, 16),
      price: post.price.toString(),
      zipcode: post.zipcode,
      //   date: post.date,
      showForm: true,
      editPostId: post._id,
    });
  }

  handleDelete(idx) {

    var posts = this.props.myPosts;
    var post = posts[idx];
    var postId = post._id;

    posts.splice(idx, 1);
    this.setState({ posts: posts });
    this.props.reduxDeletePost(postId)
  }

  componentWillMount() {
    this.props.reduxFetchMyPost();
  }

  render() {
    return (
      <ScrollView>
        <View>
          {this.state.showForm ? (
            <View>
              <Card
                title={this.state.editPostId ? "Edit Post" : "Add New Post"}
              >
                <View>
                  <TextInput
                    style={{ marginTop: 2 }}
                    mode="outlined"
                    underlineColorAndroid="transparent"
                    numberOfLines={1}
                    label="Job Title"
                    placeholder="Title of the Job"
                    onChangeText={name => this.setState({ name })}
                    value={this.state.name}
                  />
                  {!!this.state.nameError && (
                    <Text style={{ color: "red" }}>{this.state.nameError}</Text>
                  )}

                  <TextInput
                    style={{ marginTop: 2 }}
                    mode="outlined"
                    underlineColorAndroid="transparent"
                    numberOfLines={1}
                    label="Job Description"
                    placeholder="Description of the job"
                    onChangeText={description => this.setState({ description })}
                    value={this.state.description}
                  />
                  {!!this.state.descriptionError && (
                    <Text style={{ color: "red" }}>{this.state.descriptionError}</Text>
                  )}

                  <TextInput
                    style={{ marginTop: 2 }}
                    mode="outlined"
                    underlineColorAndroid="transparent"
                    numberOfLines={1}
                    label="Date"
                    placeholder="MM-DD-YYYY"
                    onChangeText={date => this.setState({ date })}
                    value={this.state.date}
                  />
                  {!!this.state.dateError && (
                    <Text style={{ color: "red" }}>{this.state.dateError}</Text>
                  )}

                  <TextInput
                    style={{ marginTop: 2 }}
                    mode="outlined"
                    underlineColorAndroid="transparent"
                    numberOfLines={1}
                    label="Start Time"
                    placeholder="HH:MM"
                    onChangeText={start_time => this.setState({ start_time })}
                    value={this.state.start_time}
                  />
                  {!!this.state.startTimeError && (
                    <Text style={{ color: "red" }}>{this.state.startTimeError}</Text>
                  )}

                  <TextInput
                    style={{ marginTop: 2 }}
                    mode="outlined"
                    underlineColorAndroid="transparent"
                    numberOfLines={1}
                    label="End Time"
                    placeholder="HH:MM"
                    onChangeText={end_time => this.setState({ end_time })}
                    value={this.state.end_time}
                  />
                  {!!this.state.endTimeError && (
                    <Text style={{ color: "red" }}>{this.state.endTimeError}</Text>
                  )}

                  <TextInput
                    style={{ marginTop: 2 }}
                    mode="outlined"
                    underlineColorAndroid="transparent"
                    numberOfLines={1}
                    label="Price"
                    placeholder="$"
                    onChangeText={price => this.setState({ price })}
                    value={this.state.price}
                  />
                  {!!this.state.priceError && (
                    <Text style={{ color: "red" }}>{this.state.priceError}</Text>
                  )}

                  <TextInput
                    style={{ marginTop: 2 }}
                    mode="outlined"
                    underlineColorAndroid="transparent"
                    numberOfLines={1}
                    label="Zipcode"
                    placeholder="Zipcode"
                    onChangeText={zipcode => this.setState({ zipcode })}
                    value={this.state.zipcode}
                  />
                  {!!this.state.zipcodeError && (
                    <Text style={{ color: "red" }}>{this.state.zipcodeError}</Text>
                  )}
                  {/* <CheckBox
                    title="Cash payment"
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checked={this.state.checked}
                    onPress={() =>
                      this.setState({ checked: !this.state.checked })
                    }
                  />
                  <CheckBox
                    title="Other method"
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checked={this.state.checked}
                    onPress={() =>
                      this.setState({ checked: !this.state.checked })
                    }
				  /> */}
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                  <Button
                    style={{
                      width: 100,
                      alignSelf: "center",
                      backgroundColor: "#01479b",
                      margin: 10
                    }}
                    mode="contained"
                    onPress={() => {
                      if (
                        this.state.name.trim() === "" || 
                        this.state.date.trim() === "" ||
                        this.state.description.trim() === "" ||
                        this.state.start_time.trim() === "" ||
                        this.state.end_time.trim() === "" ||
                        this.state.price.trim() === "" ||
                        this.state.zipcode.trim() === "" 
                      ) {
                        if (this.state.name.trim() === "") {
                          this.setState(() => ({ nameError: "Job title required" }))
                        }
                        if (this.state.description.trim() === "") {
                          this.setState(() => ({ descriptionError: "Description required" }))
                        }
                        if (this.state.date.trim() === "") {
                          this.setState(() => ({ dateError: "Date required" }))
                        }
                        if (this.state.start_time.trim() === "") {
                          this.setState(() => ({ startTimeError: "Start Time required" }))
                        }
                        if (this.state.end_time.trim() === "") {
                          this.setState(() => ({ endTimeError: "End Time required" }))
                        }
                        if (this.state.price.trim() === "") {
                          this.setState(() => ({ priceError: "Price required" }))
                        }
                        if (this.state.zipcode.trim() === "") {
                          this.setState(() => ({ zipcodeError: "Zipcode required" }))
                        }
                      }
                      else {
                        this.handleSave();
                      }
                    }}
                  >
                    {this.state.editPostId ? "Save" : "Post"}
                  </Button>
                  <Button
                    style={{
                      width: 100,
                      alignSelf: "center",
                      backgroundColor: "#01479b",
                      margin: 10
                    }}
                    mode="contained"
                    onPress={() => this.setState({
                      name: "",
                      price: "",
                      description: "",
                      date: "",
                      start_time: "",
                      end_time: "",
                      zipcode: "",
                      zipcodeError: "",
                      nameError: "",
                      descriptionError: "",
                      dateError: "",
                      startTimeError: "",
                      endTimeError: "",
                      priceError: "",
                      showForm: false,
                      editPostId: false
                    })}
                  >
                    Cancel
                  </Button>
                </View>

              </Card>
            </View>
          ) : (
              <Button
                style={{
                  width: 325,
                  alignSelf: "center",
                  backgroundColor: "#1B58B5",
                  margin: 5
                }}
                mode="contained"
                icon='add'
                onPress={() => this.setState({ showForm: true })}
              >
                Post a Job
            </Button>
            )}

          {this.props.myPosts &&
            this.props.myPosts.map((post, idx) => (
              <Card
                key={idx}
                title={post.name == "" ? "No Title" : post.name.trim()}
                image={require("../assets/examplejob.png")}
              >
                {/* Job Description */}
                <View style={{ marginRight: 10 }}>
                  {
                    post.end_date ?
                      <Text style={{ fontStyle: 'italic', textAlign: 'center', fontSize: 20, backgroundColor: '#C0C0C0', margin: 7 }}>Completed</Text>
                      : null
                  }
                  {
                    (post.ninja && !post.end_date) ?
                      <Text style={{ fontStyle: 'italic', textAlign: 'center', fontSize: 20, backgroundColor: '#90EE90', margin: 7 }}>Ongoing</Text>
                      : null
                  }
                  {
                    (!post.ninja && !post.end_date) ?
                      <Text style={{ fontStyle: 'italic', textAlign: 'center', fontSize: 20, backgroundColor: '#90EE90', margin: 7 }}>New</Text>
                      : null
                  }
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
                    {/* {new Date(post.due_date).toISOString().slice(0, 10).replace('T', " ")} */}
                    {new Date(post.due_date).toISOString().slice(5, 7)}-
                    {new Date(post.due_date).toISOString().slice(8, 10)}-
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
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    {" & "}
                  </Text>
                  <Text style={{ fontSize: 20, fontStyle: "italic" }}>
                    {new Date(post.due_date).toISOString().slice(11, 16)}
                  </Text>
                </View>
                <Text />

                {/* Price of the Job */}
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    Price: {" "}
                  </Text>
                  <Text style={{ fontSize: 20, fontStyle: "italic" }}>
                    $ {post.price}
                  </Text>
                </View>
                <Text />

                {/* Job Zipcode */}
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
                    {new Date(post.post_date).toISOString().slice(5, 7)}-
                    {new Date(post.post_date).toISOString().slice(8, 10)}-
                    {new Date(post.post_date).toISOString().slice(0, 4)}
                  </Text>
                </View>
                <Text />

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <Button
                    style={{ width: 100, margin: 7 }}
                    mode="outlined"
                    color='#1B58B5'
                    onPress={() => this.handleEdit(idx)}
                  >
                    <Text>Edit</Text>
                  </Button>

                  <Button
                    style={{
                      width: 100,
                      margin: 7,
                      backgroundColor: "#F42244"
                    }}
                    mode="contained"
                    onPress={() => this.handleDelete(idx)}
                  >
                    <Text>Delete</Text>
                  </Button>
                </View>
              </Card>
            ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center"
  },

  TextInputStyleClass: {
    height: 50,
    //borderWidth: 4,
    //borderColor: "#9E9E9E",
    //borderRadius: 20,
    height: 150,
    paddingLeft: 20,
    paddingRight: 10
  }
});

const mapStateToProps = state => {
  return {
    myPosts: state.posts.myPosts,
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    reduxHandlePost: post =>
      dispatch({
        type: "ADD_POST",
        value: { post }
      }),
    reduxDeletePost: id =>
      dispatch({
        type: "DELETE_POST",
        value: { id }
      }),
    reduxFetchMyPost: () =>
      dispatch({
        type: "FETCH_MY_POST",
      }),
    reduxEditPost: (post, id) =>
      dispatch({
        type: "EDIT_POST",
        value: { post, id }
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
