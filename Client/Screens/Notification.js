import React from "react";
import { ScrollView,View, Text, Image } from "react-native";
import { Card, Radio, Button, InputItem, List, WingBlank, WhiteSpace, Flex, Checkbox } from '@ant-design/react-native';
const CheckboxItem = Checkbox.CheckboxItem;


class Notification extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render() {
		let JobCard = () => {
			return (
					<WingBlank size="lg">
					  <Card>
						<Card.Header
						  title="Job"
						  thumbStyle={{ width: 30, height: 30 }}
						  thumb="http://clipartmag.com/ninja-star-cliparts#ninja-star-cliparts-20.png"
						  extra="Snoop Dog"
						/>
						<Card.Body>
						  <View style={{ height: 42 }}>
							<Text style={{ marginLeft: 16 }}>
							I need someone to pick up my laundry at my home and do it. Price: $15 ~ $20, Date: 02/23/2019m, between 3pm - 5pm 
							</Text>
						  </View>
						</Card.Body>
							<Button type="primary" style={{margin: 25}}>Message</Button>
						<Card.Footer
						  content="On Going"
						  extra="24 mins ago"
						>
						</Card.Footer>
					  </Card>
					</WingBlank>
			)
		}
        return (
            <ScrollView style={{ flex: 1}}>
                <WhiteSpace size="lg"/>
                <WhiteSpace size="lg"/>
                <List renderHeader={'On Going Jobs'}>
	                <WhiteSpace size="lg"/>
                    <JobCard/>
	                <WhiteSpace size="lg"/>
                    <JobCard/>
	                <WhiteSpace size="lg"/>
                    <JobCard/>
	                <WhiteSpace size="lg"/>
                    <JobCard/>
                 </List>
               
            </ScrollView>
        );
    }
}


export default Notification