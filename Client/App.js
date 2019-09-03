import React, {Component} from 'react';
import { AppRegistry,Text, View } from 'react-native';
import MainMenu from './Screens/MainMenu'; 
import { AppLoading, Font } from 'expo';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './Screens/HomeScreen';
//Imports: Dependencies
import { Provider } from 'react-redux';
//import redux store
import {store} from './Screens/store/store';

// Theme for react-native-paper
const custom_theme = {
	...DefaultTheme,
	roundness: 2,
	colors: {
		...DefaultTheme.colors,
		primary: 'rgb(27,72,150)',
		accent: 'rgb(27,72,150)',
	}
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
	<PaperProvider theme={custom_theme}>
		<Provider store={store}>
			<MainMenu />
		</Provider>
	</PaperProvider>
    );
  }
}
AppRegistry.registerComponent('choreNinja', () => App);