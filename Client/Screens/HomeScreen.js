import React from "react";
import { View, Text, DatePickerIOS } from "react-native";
import { Platform, StyleSheet, Image } from "react-native";
import { Card,CheckBox } from 'react-native-elements';
import { TextInput, Button} from "react-native-paper";

import { connect } from 'react-redux';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: "", 
      time: "", 
      price: "", 
      posts: [], 
    };
   
  }

  handlePost() {
    let newpost = {
      name: "asdaf",
    }
    this.props.reduxHandlePost(newpost)
    var post = this.state.text;
    var newpost = {
      text: this.state.text,
      time: this.state.time,
      price: this.state.price,
    }
    // Copy the current post array
    var newPosts = Object.assign(this.state.posts);

    // Add new post into the posts array
    newPosts.push(newpost)

    this.setState({ text: "",time: "",price: "", posts: newPosts});
  }
  handleDelete(idx) {
    var posts = this.state.posts;
    posts.splice(idx, 1);
    this.setState({ posts: posts });
  }



  render() {


    return (
      <View>
        <Card>
        <View >
          <TextInput
          style={{backgroundColor:'#EDEFF6'}}
            underlineColorAndroid="transparent"
            numberOfLines={1}
            label='Job Description'
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />

          <TextInput
          style={{backgroundColor:'#EDEFF6'}}
            underlineColorAndroid="transparent"
            numberOfLines={1}
            label='Time (24hrs)'
            onChangeText={time => this.setState({ time })}
            value={this.state.time}
          />
          <TextInput
          style={{backgroundColor:'#EDEFF6'}}
            underlineColorAndroid="transparent"
            numberOfLines={1}
            label='Price'
            onChangeText={price => this.setState({ price })}
            value={this.state.price}
          />
          <CheckBox
            title='Cash payment'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={this.state.checked}
            onPress={() => this.setState({checked: !this.state.checked})}
          />
           <CheckBox
            title='Other method'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={this.state.checked}
            onPress={() => this.setState({checked: !this.state.checked})}
          />
        </View>

        </Card>
        <Button style={{width:100, alignSelf:'flex-end', backgroundColor:'#01479b', margin:10}} mode="contained" onPress={() => this.handlePost()}>Post</Button>

        {this.state.posts.map((post,idx) => (
          
          <View key={idx} style={styles.MainContainer}>
            <Card>
            <Text>Job Description: {post.text}</Text>
            <Text>Time: {post.time}</Text>
            <Text>Price: ${post.price}</Text>
            <Button style={{width:70, margin:7, alignSelf:'center'}}mode="outlined">Edit</Button>
            </Card>
            <Button style={{width:100, alignSelf:'flex-end', backgroundColor:'#F42244', margin:10}} mode="contained" onPress={() => this.handleDelete(idx)}>Delete</Button>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({


  MainContainer: {
    justifyContent: "center",
    
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


const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    reduxHandlePost: (post)=> dispatch({
      type:'ADD_POST',
      value: post,
    }),
    reduxDeletePost: (id) =>  dispatch({
      type: 'DELETE_POST',
      value: id,
    })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);


