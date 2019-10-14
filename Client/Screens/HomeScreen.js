import React from "react";
import { View, Text, DatePickerIOS, ScrollView } from "react-native";
import { Platform, StyleSheet, Image } from "react-native";
import { Card, CheckBox } from "react-native-elements";
import { TextInput, Button } from "react-native-paper";
import { deletePost, editPost } from "./sagas/homescreenSaga.js";

import { connect } from "react-redux";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      description: "",
      due_date: "",
      posts: [],
      addNewPost: false,
      editPost: null
    };
  }

  handlePost() {
    console.log("HANDLE POST ", this.state.editPost);
    var newpost = {
      name: this.state.name,
      price: this.state.price,
      description: this.state.description,
      due_date: this.state.due_date,
      start_time: this.state.start_time,
      end_time: this.state.end_time
    };
    if (this.state.editPost != null) {
      console.log("Hello");
      editPost(newpost, this.state.editPost);
    } else {
      console.log("Wut?");

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
      due_date: "",
      addNewPost: false,
      editPost: null
    });
  }

  handleEdit(idx) {
    var posts = this.props.posts;
    var post = posts[idx];
    this.setState({
      name: post.name,
      price: post.price.toString(),
      description: post.description,
      due_date: post.due_date,
      editPost: post._id
    });
  }

  handleDelete(idx) {
    console.log("need to delete ", idx);

    var posts = this.props.posts;
    var post = posts[idx];
    console.log("post to delete ", post);
    var postId = post._id;
    console.log("post id to delete ", postId);

    deletePost(postId);
    posts.splice(idx, 1);
    this.setState({ posts: posts });
  }

  componentWillMount() {
    this.props.reduxFetchPost("UserIDHere");
  }

  render() {
    //console.log("this.props.posts", this.props.posts);
    //console.log(this);
    return (
      <ScrollView>
        <View>
          {this.state.addNewPost || this.state.editPost != null ? (
            <View>
              <Card>
                <View>
                  <TextInput
                    style={{ backgroundColor: "rgb(250,250,250)" }}
                    underlineColorAndroid="transparent"
                    numberOfLines={1}
                    label="Job Title"
                    onChangeText={name => this.setState({ name })}
                    value={this.state.name}
                  />
                  <TextInput
                    style={{ backgroundColor: "rgb(250,250,250)" }}
                    underlineColorAndroid="transparent"
                    numberOfLines={1}
                    label="Job Description"
                    onChangeText={description => this.setState({ description })}
                    value={this.state.description}
                  />
                  <TextInput
                    style={{ backgroundColor: "rgb(250,250,250)" }}
                    underlineColorAndroid="transparent"
                    numberOfLines={1}
                    label="Date"
                    onChangeText={due_date => this.setState({ due_date })}
                    value={this.state.due_date}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      backgroundColor: "rgb(250,250,250)"
                    }}
                  >
                    <TextInput
                      style={{
                        backgroundColor: "rgb(250,250,250)",
                        width: 175
                      }}
                      underlineColorAndroid="transparent"
                      numberOfLines={1}
                      label="Start Time:"
                      onChangeText={start_time => this.setState({ start_time })}
                      value={this.state.start_time}
                    />
                    <TextInput
                      style={{
                        backgroundColor: "rgb(250,250,250)",
                        width: 175,
                        marginLeft: 10
                      }}
                      underlineColorAndroid="transparent"
                      numberOfLines={1}
                      label="End Time:"
                      onChangeText={end_time => this.setState({ end_time })}
                      value={this.state.end_time}
                    />
                  </View>
                  <TextInput
                    style={{ backgroundColor: "rgb(250,250,250)" }}
                    underlineColorAndroid="transparent"
                    numberOfLines={1}
                    label="Price"
                    onChangeText={price => this.setState({ price })}
                    value={this.state.price}
                  />

                  <CheckBox
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
                  />
                </View>
                <Button
                  style={{
                    width: 100,
                    alignSelf: "center",
                    backgroundColor: "#01479b",
                    margin: 10
                  }}
                  mode="contained"
                  onPress={() => this.handlePost()}
                >
                  Post
                </Button>
              </Card>
            </View>
          ) : (
            <Button
              style={{
                width: 250,
                alignSelf: "center",
                backgroundcolor: "#01479b",
                margin: 10
              }}
              mode="contained"
              onPress={() => this.setState({ addNewPost: true })}
            >
              Post a Job
            </Button>
          )}

          {this.props.posts &&
            this.props.posts.map((post, idx) => (
              <Card
                key={idx}
                title={post.name == "" ? "No Title" : post.name.trim()}
                image={require("../assets/examplejob.png")}
              >
                {/* Job Field */}
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    Field:{" "}
                  </Text>
                  <Text style={{ fontSize: 20, fontStyle: "italic" }}>
                    Empty
                  </Text>
                </View>
                <Text />

                {/* Job Description */}
                <View style={{ flexDirection: "row" }}>
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
                    Time:{" "}
                  </Text>
                  <Text style={{ fontSize: 20, fontStyle: "italic" }}>
                    {post.due_date}
                  </Text>
                </View>
                <Text />

                {/* Price of the Job */}
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    Price:{" "}
                  </Text>
                  <Text style={{ fontSize: 20, fontStyle: "italic" }}>
                    $ {post.price}
                  </Text>
                </View>
                <Text />

                {/* Job Zipcode */}
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    Zip Code{" "}
                  </Text>
                  <Text style={{ fontSize: 20, fontStyle: "italic" }}>
                    95112
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
  console.log("I am called, I don't know why");
  return {
    posts: state.posts.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    reduxHandlePost: post =>
      dispatch({
        type: "ADD_POST",
        value: post
      }),
    reduxDeletePost: id =>
      dispatch({
        type: "DELETE_POST",
        value: id
      }),
    reduxFetchPost: id =>
      dispatch({
        type: "FETCH_POST",
        value: id
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
