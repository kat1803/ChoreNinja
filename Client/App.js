import React, {Component} from 'react';
import { AppRegistry,Text, View } from 'react-native';
import MainMenu from './Screens/MainMenu'; 
import { AppLoading, Font } from 'expo';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './Screens/HomeScreen';
//Imports: Dependencies
import { Provider } from 'react-redux';
//import redux store
import {Store} from './Screens/store/store';


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
	// <PaperProvider>
	// 		{/* <MainMenu /> */}
	
	// </PaperProvider>
	<Provider store={Store}>
		<HomeScreen />
	</Provider>
    );
  }
}
AppRegistry.registerComponent('choreNinja', () => App);