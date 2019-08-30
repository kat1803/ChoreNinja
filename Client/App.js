import React, {Component} from 'react';
import { AppRegistry,Text, View } from 'react-native';
import MainMenu from './Screens/MainMenu'; 
import { AppLoading, Font } from 'expo';
import { Provider as PaperProvider } from 'react-native-paper';

//Configure db.js with mongoose API 
var dbConfig = require('./Authentication/db.js');
var mongoose = require('mongoose');
mongoose.connect(dbConfig.url);

//Configuring Passport
var passport = require('passport');
var expressSession = require('express-session');
app.use(expressSession({ secret: 'myChoreNinjaSecretKey' }));
app.use(passport.initialize());
app.use(passport.session());

//Serialize and Deserialize to keep the user credentials private
passport.serializeUser(function(user, done)){
	done(null, user._id);
};

passport.deserializeUser(function(id,done))
{
	User.findById(id, function(err, user))
	{
		User.findById(id, function(err, user))
		{
			done(err, user);
		}
	};
};
export default class App extends Component {
	state = {
		isReady: false,
	  };

	async componentDidMount() {
		await Font.loadAsync(
		  'antoutline',
		  // eslint-disable-next-line
		  require('@ant-design/icons-react-native/fonts/antoutline.ttf')
		);
	
		await Font.loadAsync(
		  'antfill',
		  // eslint-disable-next-line
		  require('@ant-design/icons-react-native/fonts/antfill.ttf')
		);
		// eslint-disable-next-line
		this.setState({ isReady: true });
	  }
  render() {
	const {  isReady } = this.state;
    if (!isReady) {
      return <AppLoading />;
    }
    return (
	<PaperProvider>
		<MainMenu />
	</PaperProvider>
    );
  }
}
AppRegistry.registerComponent('choreNinja', () => App);