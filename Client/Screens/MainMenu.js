import React from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator, createAppContainer} from 'react-navigation'

import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import AboutScreen from "./AboutScreen";

class MainMenu extends React.Component {
    render() {
        return (
           <AppMainContainer
                // ref={navigatorRef => {
                //     NavigationService.setTopLevelNavigator(navigatorRef)
                // }}
            />
        );
    }
}

//Main Navigation of the Application 
const AppMainNavigator = createDrawerNavigator(
    {
        'Home': HomeScreen,
        'Profile': ProfileScreen,
        'About': AboutScreen,
    },
    // {
    //     contentComponent: customMainComponent,
    //     contentOptions: {
    //         activeTintColor: '#2196f3'
    //     }
    // }
)

const AppMainContainer = createAppContainer(AppMainNavigator);

// const customMainComponent = props => 
// (
//     <SafeAreaView style = {{flex:1}}> 
//         <View>
//             style = {{
//                 height: 150,
//                 backgroundColor: 'Green',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//             }}
//         </View>
//         <ScrollView>
//             <DrawerItems {...props} />
//         </ScrollView>
//     </SafeAreaView>
// )

export default MainMenu 