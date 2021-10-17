import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CONTACT_CREATE, CONTACT_DETAIL, CONTACT_LIST, SETTINGS } from '../constants/routeNames';
import Contactlist from '../screens/Contacts';
import ContactDetails from '../screens/ContactDetails';
import CreateContact from '../screens/CreateContact';
import Setting from '../screens/Settings';
import { Text } from 'react-native';

 
const HomeNavigator=()=>{
    const HomeStack = createNativeStackNavigator();
    return(
<HomeStack.Navigator initialRouteName={CONTACT_LIST}>
    <HomeStack.Screen name={CONTACT_LIST} component={Contactlist}
    //options={{headerLeft:()=><Text>nav</Text>}} better to go contact scree addition
    ></HomeStack.Screen>
    <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetails}></HomeStack.Screen>
    <HomeStack.Screen name={CONTACT_CREATE} component={CreateContact}></HomeStack.Screen>
    <HomeStack.Screen name={SETTINGS} component={Setting}></HomeStack.Screen>
</HomeStack.Navigator>
)
}
export default HomeNavigator;