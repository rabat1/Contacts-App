import React, { useContext,useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import { GlobalContext } from '../context/Provider';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native';
import { NavigationRef } from './sidemenu/RootNavigation';
import SplashScreen from 'react-native-splash-screen';
  

const AppNavigator=()=>{
    const {authState:{isLoggedIn},}= useContext(GlobalContext);
   
    const [isAuthenticated,setAuthentication]= useState(isLoggedIn);
    const [authLoaded,setAuthLoaded]= useState(false);

    const getUser = async() =>{
        try {
           const user= await AsyncStorage.getItem('user');
            if(user){
                setAuthentication(true);
                setAuthLoaded(true);
               
            } else{
                setAuthentication(false);
                setAuthLoaded(true);
            }
        } catch (error) {
            
        }
    }
    useEffect(() => {
        
        getUser();
    }, [isLoggedIn])
    // console.log('state==>', isLoggedIn);
    // console.log("authenticate", isAuthenticated);

    useEffect(() => {
        if(authLoaded){
            SplashScreen.hide();
        }
    }, [authLoaded])
    
    return(
        <>
        {authLoaded?<NavigationContainer ref={NavigationRef}>
    {isAuthenticated? <DrawerNavigator />: <AuthNavigator />}
</NavigationContainer>: <ActivityIndicator />}

</>
)
}
export default AppNavigator;