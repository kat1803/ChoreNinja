import React from "react";
import { View, Text } from "react-native";
import { Platform, StyleSheet, TextInput, Image } from "react-native";
import { Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", posts: [] };
  }

  handlePost() {
    var post = this.state.text;
    this.setState({ text: "", posts: this.state.posts.concat(post) });
  }
  handleDelete(idx) {
    var posts = this.state.posts;
    posts.splice(idx, 1);
    this.setState({ posts: posts });
  }
  render() {
    return (
      <View>
        <View style={styles.MainContainer}>
          <TextInput
            style={styles.TextInputStyleClass}
            underlineColorAndroid="transparent"
            placeholder={"Job Description."}
            placeholderTextColor={"#9E9E9E"}
            numberOfLines={10}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            multiline={true}
          />
        </View>
        <Button title="Post" onPress={() => this.handlePost()} />

        {this.state.posts.map((post, idx) => (
          <View key={idx} style={styles.MainContainer}>
            <TextInput
              style={styles.TextInputStyleClass}
              underlineColorAndroid="transparent"
              placeholder={"Job Description."}
              placeholderTextColor={"#9E9E9E"}
              numberOfLines={10}
              value={post}
              multiline={true}
              editable={false}
            />
            <Button title="Delete" onPress={() => this.handleDelete(idx)} />
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Header: {
    margin: "2%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 5, //change the size of the purple line
    borderBottomColor: "#e4c5e9",
    backgroundColor:"#e4c5e9"
  },

  MainContainer: {
    justifyContent: "center",
    margin: 5
  },

  TextInputStyleClass: {
    height: 50,
    borderWidth: 4,
    borderColor: "#9E9E9E",
    borderRadius: 20,
    height: 150,
    paddingLeft: 20,
    paddingRight: 10
  }
});

export default HomeScreen;

/*<View style={styles.Header}>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>
            Customer Home
          </Text>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../assets/crow.png")}
          />
        </View>
        */