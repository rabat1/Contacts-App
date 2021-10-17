import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from '@react-navigation/core';
import React, { useEffect} from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from '../../components/common/Icon';
import ContactComponent from '../../components/ContactComponent';
import getContacts from '../../context/actions/contacts/getContacts';
import {GlobalContext} from '../../context/Provider';
const Contactlist = () =>{
    //in container you can specify your own style if dont wanna apply common container style
    const [sortBy, setSortBy] = React.useState(null);
    const {setOptions, toggleDrawer} = useNavigation();
    const [modalVisible, setModalVisible] = React.useState(false);

     const {contactsDispatch,contactsState:{
        getContacts:{data,loading} 
        },
    } = React.useContext(GlobalContext);

const getSettings = async() =>{
const sortPref = await AsyncStorage.getItem('sortBy');
if(sortPref){
    setSortBy(sortPref);
}
};

useEffect(()=>{
getContacts()(contactsDispatch)
    },[]);
useFocusEffect(React.useCallback(()=>{
        getSettings();
        return()=>{}
    },[]));

React.useEffect(()=>{
        setOptions({headerLeft:()=><TouchableOpacity onPress={()=>{
            toggleDrawer();
        }}><Icon type='material' name='menu' size={25} style={{padding:10}} />
        </TouchableOpacity>})
    },[]);

return(
       <ContactComponent
        modalVisible={modalVisible}
        data={data}
        loading={loading}
        setModalVisible={setModalVisible} 
        sortBy={sortBy}
       />
    )
}
export default Contactlist;