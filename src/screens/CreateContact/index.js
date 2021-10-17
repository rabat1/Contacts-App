import { useNavigation } from '@react-navigation/core';
import React, { useRef, useState } from 'react';
import CreateContactComponent from '../../components/CreateContactComponent';
import { CONTACT_LIST } from '../../constants/routeNames';
import createContacts from '../../context/actions/contacts/createContacts';
import {GlobalContext} from '../../context/Provider';


const CreateContact = () =>{
  const [form,setForm] = useState({});
  const onChangeText=({name,value})=>{
    setForm({...form,[name]: value});
  };
  const [localFile, setLocalFile]= useState(null);
  const {navigate} = useNavigation();

  const toggleValueChange=()=>{
    console.log('chal raha hai tu');
    setForm({...form, isFavorite: !form.isFavorite})
    console.log(form.isFavorite)
    
  }

  const {contactsDispatch,contactsState:{
    createContacts:{loading,error} 
    },
} = React.useContext(GlobalContext);

const sheetRef= useRef(null);
const closeSheet = ()=>{
  if(sheetRef.current) {
    sheetRef.current.close();
  }
}
const openSheet = ()=>{
  if(sheetRef.current) {
    sheetRef.current.open();
  }
}
  
const onFileSelected =(image)=>{
  closeSheet();
  setLocalFile(image)
  console.log('imahes', image)
}
  const onSubmit=()=>{
  //  console.log('form', form);
    createContacts(form)(contactsDispatch)(()=>{
      navigate(CONTACT_LIST);
    })
  }
    return(
      <CreateContactComponent   toggleValueChange={toggleValueChange}
      loading={loading} error={error}
      onSubmit={onSubmit} onChangeText={onChangeText}
      sheetRef={sheetRef}
      openSheet={openSheet}
      closeSheet={closeSheet}
      onFileSelected={onFileSelected}
      form={form}
      localFile={localFile}
      />
    )
}
export default CreateContact;
