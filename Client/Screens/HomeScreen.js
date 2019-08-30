import React from "react";
import { View, Text } from "react-native";
import { Platform, StyleSheet, Image } from "react-native";
import { Button} from '@ant-design/react-native';
import { Card } from 'react-native-elements';
import { TextInput } from "react-native-paper";

import { connect } from 'react-redux';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", posts: [] };
  }

  handlePost() {
    let newpost = {
      name: "asdaf",
    }
    this.props.reduxHandlePost(newpost)
    var post = this.state.text;
    this.setState({ text: "", posts: this.state.posts.concat(post) 
  });
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
            underlineColorAndroid="transparent"
            placeholderTextColor={"#9E9E9E"}
            numberOfLines={1}
            label='Time'
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
         
        </View>
        </Card>
        <Button style={{width:100, alignSelf:'center'}}type="primary" onPress={() => this.handlePost()}>Post</Button>

        {this.state.posts.map((post,idx) => (
          
          <View key={idx} style={styles.MainContainer}>
            <Card>
            <TextInput
              style={styles.TextInputStyleClass}
              underlineColorAndroid="transparent"
              placeholder={"Job Description."}
              placeholderTextColor={"#9E9E9E"}
              value={post}
              multiline={true}
              editable={false}
            />
          
            </Card>
            <Button style={{width:100, alignSelf:'center', backgroundColor:'red'}} tyle="primary" onPress={() => this.handleDelete(idx)}>Delete</Button>
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


