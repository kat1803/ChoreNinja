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
      name: "",
      price: "",
      description: "",
      due_date: "",
      posts: [],
      addNewPost: false
    };
  }

  handlePost() {
    var newpost = {
      name: this.state.name,
      price: this.state.price,
      description: this.state.description,
      due_date: this.state.due_date,
      start_time: this.state.start_time,
      end_time: this.state.end_time
    };
    // Call redux dispatcher to make API call for POST request
    this.props.reduxHandlePost(newpost);
    // // Copy the current post array
    // var newPosts = Object.assign(this.state.posts);

    // // Add new post into the posts array
    // newPosts.push(newpost)
    this.setState({
      name: "",
      price: "",
      description: "",
      due_date: "",
      addNewPost: false
    });
  }

  handleDelete(idx) {
    var posts = this.state.posts;
    posts.splice(idx, 1);
    this.setState({ posts: posts });
  }

  componentWillMount() {
    this.props.reduxFetchPost("UserIDHere");
  }

  render() {
    console.log("this.props.posts", this.props.posts);
    return (
      <ScrollView>
        <View>
          {this.state.addNewPost ? (
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
                      style={{ backgroundColor: "rgb(250,250,250)", width: 175 }}
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
              </Card>
              <Button
                style={{
                  width: 100,
                  alignSelf: "flex-end",
                  backgroundColor: "#01479b",
                  margin: 10
                }}
                mode="contained"
                onPress={() => this.handlePost()}
              >
                Post
            </Button>
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
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>Field:{" "}</Text>
                  <Text style={{ fontSize: 20, fontStyle: "italic" }}>Empty</Text>
                </View>
                <Text></Text>

                {/* Job Description */}
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>Description:{" "}</Text>
                  <Text style={{ fontSize: 20, fontStyle: "italic" }}>{post.description}</Text>
                </View>
                <Text></Text>

                {/* Due Date */}
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>Time:{" "}</Text>
                  <Text style={{ fontSize: 20, fontStyle: "italic" }}>{post.due_date}</Text>
                </View>
                <Text></Text>

                {/* Price of the Job */}
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>Price:{" "}</Text>
                  <Text style={{ fontSize: 20, fontStyle: "italic" }}>$ {post.price}</Text>
                </View>
                <Text></Text>

                {/* Job Zipcode */}
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>Zip Code {" "}</Text>
                  <Text style={{ fontSize: 20, fontStyle: "italic" }}>95112</Text>
                </View>
                <Text></Text>

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Button
                    style={{ width: 100, margin: 7, }}
                    mode="outlined"
                  >
                    <Text>Edit</Text>
                  </Button>

                  <Button
                    style={{ width: 100, margin: 7, backgroundColor: "#F42244" }}
                    mode="contained"
                    onPress={() => this.handleDelete(idx)}
                  >
                    <Text>Delete</Text>
                  </Button>
                </View>
              </Card>
            ))}
        </View>
      </ScrollView >
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
