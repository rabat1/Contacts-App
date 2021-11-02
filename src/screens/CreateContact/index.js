import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useRef, useState,useEffect } from 'react';
import CreateContactComponent from '../../components/CreateContactComponent';
import { CONTACT_DETAIL, CONTACT_LIST } from '../../constants/routeNames';
import createContacts from '../../context/actions/contacts/createContacts';
import editContact from '../../context/actions/contacts/editContact';
import {GlobalContext} from '../../context/Provider';
import uploadImage from '../../helpers/uploadImage';


const CreateContact = () =>{
  const [form,setForm] = useState({});
  const [uploading,setIsUploading] = useState(false);
  const {params} = useRoute();
  const onChangeText=({name,value})=>{
    setForm({...form,[name]: value});
  };
  const [localFile, setLocalFile]= useState(null);
  const {navigate, setOptions} = useNavigation();
  useEffect(() => {
    if(params?.contact){
      setOptions({title:'Update Contact'});
      const {
        first_name:firstName,
        last_name: lastName,
        phone_number:phoneNumber,
        is_favorite:isFavorite,
        country_code:countryCode,
       
      }= params?.contact;
      setForm((prev)=>{
        return{
          ...prev,
          firstName,
          lastName,
          isFavorite,
          phoneNumber,
          countryCode,
        };
      
      });
      // console.log('fisst name', firstName);
   
      
      if(params?.contact?.contact_picture){
      setLocalFile(params?.contact.contact_picture)
    }
    }
  }, [])

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
  
    if(params?.contact){
      if(localFile?.size) {
        setIsUploading(true);
        uploadImage(localFile)((url)=>{
          setIsUploading(false);
          editContact({...form,contactPicture: url},params?.contact.id,)(contactsDispatch)((item)=>{
            navigate(CONTACT_DETAIL,{item});
            
          });
        })
        ((err)=>{
          console.log('error upload', err);
          setIsUploading(false);
       
        });
      
        
      }
      else{
        editContact(form,params.contact.id)(contactsDispatch)((item)=>{
          navigate(CONTACT_DETAIL,{item});
        })
      }


    }
    else{
if(localFile?.size) {
  setIsUploading(true);
  uploadImage(localFile)((url)=>{
    setIsUploading(false);
 
    createContacts({...form,contactPicture: url})(contactsDispatch)(()=>{
      navigate(CONTACT_LIST);
    });
  })
  ((err)=>{
    console.log('error upload', err);
    setIsUploading(false);
 
  });

  
}
else{
  createContacts(form)(contactsDispatch)(()=>{
      navigate(CONTACT_LIST);
    });
  }
  }
  }
    return(
      <CreateContactComponent   toggleValueChange={toggleValueChange}
      loading={loading || uploading} error={error}
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
