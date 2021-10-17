/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import AppNavigator from './src/navigations';
import GlobalProvidor from './src/context/Provider';


const App = () => {
  
  return (
    <GlobalProvidor>
    <AppNavigator></AppNavigator>
    </GlobalProvidor>
  );
};


export default App;
