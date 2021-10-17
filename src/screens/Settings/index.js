import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View,Text } from 'react-native';
import SettingsComponent from '../../components/SettingsComponent';

const Setting = () =>{
    const [email,setEmail]= React.useState();
    const [modalVisible, setModalVisible]= React.useState(false);
    const [sortBy, setSortBy] = React.useState(null);

    const saveSetting = (key, value) => {
      AsyncStorage.setItem(key, value);
    };

    const settingsOptions = [
        {title: 'My Info', subTitle: 'Setup your profile', onPress: () => {}},
        {title: 'Accounts', subTitle: 'oo', onPress: () => {}},
        {
          title: 'Default account for new contacts',
          subTitle: email,
          onPress: () => {},
        },
        {title: 'Contacts to display', subTitle: 'All contacts', onPress: () => {}},
        {
          title: 'Sort by',
          subTitle: sortBy,
          onPress: () => {
            setModalVisible(true);
          },
        },
        {title: 'Name format', subTitle: 'First name first', onPress: () => {}},
        {title: 'Import', subTitle: '00', onPress: () => {}},
        {title: 'Export', subTitle: '00', onPress: () => {}},
        {title: 'Blocked numbers', subTitle: '00', onPress: () => {}},
        {title: 'About RNContacts', subTitle: '00', onPress: () => {}},
      ];

      const prefArr = [
        {
          name: 'First Name',
          selected: sortBy === 'First Name',
    
          onPress: () => {
            saveSetting('sortBy', 'First Name');
            setSortBy('First Name');
            setModalVisible(false);
          },
        },
        {
          name: 'Last Name',
          selected: sortBy === 'Last Name',
          onPress: () => {
            saveSetting('sortBy', 'Last Name');
            setSortBy('Last Name');
            setModalVisible(false);
          },
        },
      ];
    
const getSettings = async ()=>{
    const user = await AsyncStorage.getItem('user');
    console.log(user);
    setEmail(JSON.parse(user).email);
    const sortPref = await AsyncStorage.getItem('sortBy');
    if (sortPref) {
      setSortBy(sortPref);
    }
   
}

      React.useEffect(()=>{
    getSettings();
},[])
    return(
      <SettingsComponent 
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      settingsOptions={settingsOptions}
      prefArr={prefArr} />
    )
}

export default Setting;