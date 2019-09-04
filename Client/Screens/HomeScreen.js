import React from "react";
import { View, Text, DatePickerIOS, ScrollView } from "react-native";
import { Platform, StyleSheet, Image } from "react-native";
import { Card,CheckBox } from 'react-native-elements';
import { TextInput, Button} from "react-native-paper";

import { connect } from 'react-redux';

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
    }
    // Call redux dispatcher to make API call for POST request
    this.props.reduxHandlePost(newpost)
    // // Copy the current post array
    // var newPosts = Object.assign(this.state.posts);

    // // Add new post into the posts array
    // newPosts.push(newpost)
    this.setState({ name: "", price: "", description: "", due_date: "", addNewPost: false});
  }

  handleDelete(idx) {
    var posts = this.state.posts;
    posts.splice(idx, 1);
    this.setState({ posts: posts });
  }

  componentWillMount(){
    this.props.reduxFetchPost("UserIDHere")
  }

  render() {
    console.log("this.props.posts", this.props.posts)
    return (
      <View>
        {
          this.state.addNewPost ?
          (
            <View >
            <Card>
            <View >
              <TextInput
              style={{backgroundColor:'rgb(250,250,250)'}}
                underlineColorAndroid="transparent"
                numberOfLines={1}
                label='Job Name'
                onChangeText={name => this.setState({ name })}
                value={this.state.name}
              />
              <TextInput
              style={{backgroundColor:'rgb(250,250,250)'}}
                underlineColorAndroid="transparent"
                numberOfLines={1}
                label='Job Description'
                onChangeText={description => this.setState({ description })}
                value={this.state.description}
              />
              <TextInput
              style={{backgroundColor:'rgb(250,250,250)'}}
                underlineColorAndroid="transparent"
                numberOfLines={1}
                label='Time (24hrs)'
                onChangeText={due_date => this.setState({ due_date })}
                value={this.state.due_date}
              />
              <TextInput
              style={{backgroundColor:'rgb(250,250,250)'}}
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
            </View>
          ) :
            <Button style={{ width: 100, alignSelf: 'flex-end', backgroundColor: '#01479b', margin: 10 }} mode="contained" onPress={() => this.setState({addNewPost: true})}>New Job</Button>
        }
        
        <ScrollView>
        {
          this.props.posts &&
            this.props.posts.map((post,idx) => (
            <View key={idx} contentContainerStyle={styles.MainContainer}>
              <Card>
              <Text>Job Name: {post.name}</Text>
              <Text>Job Description: {post.description}</Text>
              <Text>Time: {post.due_date}</Text>
              <Text>Price: ${post.price}</Text>
              <Button style={{width:70, margin:7, alignSelf:'center'}}mode="outlined">Edit</Button>
              </Card>
              <Button style={{width:100, alignSelf:'flex-end', backgroundColor:'#F42244', margin:10}} mode="contained" onPress={() => this.handleDelete(idx)}>Delete</Button>
            </View>
          ))
        }
        </ScrollView>
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
    }),
    reduxFetchPost: (id) =>  dispatch({
      type: 'FETCH_POST',
      value: id,
    })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);


