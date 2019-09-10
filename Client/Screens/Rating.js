import React, { Component } from "react";
import { Text, View, ScrollView, SafeAreaView, Platform, StyleSheet, AlertIOS} from "react-native";
import { Card } from "react-native-elements";
import { AirbnbRating } from "react-native-ratings";
import { Button} from "react-native-paper";

class Rating extends Component {
  ratingCompleted( rating ) {
    console.log( `Rating is: ${rating}` );
  }

  savebuttonClickded = () => {
    AlertIOS.alert(
      'Thank you !',
      'You rating for this transaction is saved. ',
      [
        
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ],
      //'secure-text',
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.flex}>
        <View style={styles.headingContainer}>
        </View>
        <ScrollView style={styles.flex} contentContainerStyle={styles.center}>
          <Card title="TRANSACTION RATING" containerStyle={styles.card}>
            <AirbnbRating showRating={true} />
            <Button style={{width:100, alignSelf:'center', backgsroundColor:'#01479b', margin:10}} 
            mode="contained" onPress={this.savebuttonClickded}>SAVE</Button>
          </Card>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create( {
  flex: {
    flex: 1
  },
  center:  {
    justifyContent: 'center',
    alignItems: 'center'
  },
  headingContainer: {
    paddingBottom: 30
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 5,
    fontFamily: Platform.OS === 'ios' ? 'Menlo-Bold' : null,
    color: '#27ae60'
  },
  subtitleText: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Trebuchet MS' : null,
    color: '#34495e'
  },
  card: {
    width: '85%', 
    marginBottom: 20
  },
});

export default Rating;