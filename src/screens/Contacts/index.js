import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from '@react-navigation/core';
import React, { useEffect, useRef} from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from '../../components/common/Icon';
import ContactComponent from '../../components/ContactComponent';
import getContacts from '../../context/actions/contacts/getContacts';
import {GlobalContext} from '../../context/Provider';
import {CONTACT_DETAIL} from '../../constants/routeNames'
const Contactlist = () =>{
    //in container you can specify your own style if dont wanna apply common container style
    const [sortBy, setSortBy] = React.useState(null);
    const {setOptions, toggleDrawer, navigate} = useNavigation();
    const [modalVisible, setModalVisible] = React.useState(false);
    const contactsRef = useRef([])
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

useEffect(()=>{
const prev = contactsRef.current;
contactsRef.current= data;
const newList = contactsRef.current;
if(newList.length - prev.length === 1){
    const newContact = newList.find(
        (item) => !prev.map((i)=> i.id).includes(item.id)
    );
    navigate(CONTACT_DETAIL, {item: newContact});
}
},[data.length])

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