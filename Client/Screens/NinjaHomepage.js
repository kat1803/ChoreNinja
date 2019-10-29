import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { connect } from "react-redux";
import { Searchbar, Button } from "react-native-paper";

class NinjaHomepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstQuery: "",
      posts: [],
    };
  }

  render() {
    const { firstQuery } = this.state;
    // console.log("INSIDE NINJA HOMEPAGE")
    // console.log(this.props.posts);
    return (
      <ScrollView>
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
            <Button
              title="filter"
              icon="filter"
              size={20}
              onPress={() => console.log("Pressed")}
            >
              Filter
            </Button>
          </View>
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
                    style={{
                      width: 100,
                      margin: 7,
                      backgroundColor: "#008000"
                    }}
                    mode="contained"
                    onPress={() => this.handleAcceptJob(idx)}
                  >
                    <Text>Accept Job</Text>
                  </Button>
                </View>
              </Card>
            ))}
        </View>
      </ScrollView>
    );
  }
}

//export default NinjaHomepage
const mapStateToProps = state => {
  // console.log("I am called, I don't know why");
  // console.log(state.posts.posts);
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
)(NinjaHomepage);

//Header part
/*<Appbar.Header>
                    <Appbar.Content
                        title = "Ninja Home"
                    />
                    <Appbar.Action icon="notifications" onPress = {() => console.log('Pressed')}/>
                    <Appbar.Action icon="inbox" onPress={() => console.log('Pressed')} />
                </Appbar.Header>
                */
