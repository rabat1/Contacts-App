import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import { HOME_NAVIGATOR } from '../constants/routeNames';
import SideMenu from './sidemenu';
import { GlobalContext } from '../context/Provider';


const getDrawerContents=(navigation, authDispatch)=>{
    return(
    <SideMenu navigation={navigation} authDispatch={authDispatch}/>
    )}
const DrawerNavigator=()=>{
    const DrawerStack = createDrawerNavigator();
    const {authDispatch} = React.useContext(GlobalContext);
    return(
<DrawerStack.Navigator drawerContent={({navigation})=>getDrawerContents(navigation, authDispatch)}
 >
    <DrawerStack.Screen  options={{headerShown: false}}
    name={HOME_NAVIGATOR} component={HomeNavigator} ></DrawerStack.Screen>
   
</DrawerStack.Navigator>
)
}
export default DrawerNavigator;