import { useNavigation, useRoute } from '@react-navigation/core';
import React, {useEffect, useState,useRef}from 'react';
import { View,Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import colors from '../../assets/theme/colors';
import Icon from '../../components/common/Icon';
import ContactDetailComponent from '../../components/ContactDetailComponent';
import { CONTACT_LIST } from '../../constants/routeNames';
import deleteContact from '../../context/actions/contacts/deleteContact';
import editContact from '../../context/actions/contacts/editContact';
import { GlobalContext } from '../../context/Provider';
import uploadImage from '../../helpers/uploadImage';

const ContactDetails = () =>{
    const {params: {item ={}}={}} = useRoute();
    const {setOptions, navigate} = useNavigation();
    const [localFile, setLocalFile]= useState(null);
    const [updatingImage, setUpdatingImage]= useState(false);
    const [uploadSucceeded, setUploadSucceeded]= useState(false);
  
    const {contactsDispatch, 
        contactsState:{
            deleteContact:{loading}
        },
      } = React.useContext(GlobalContext);
      const sheetRef= useRef(null);


    useEffect(()=>{
            if(item){
                setOptions({
                    title: item.first_name + " "+item.last_name,
                    headerRight: ()=>{
                        return(
                            <View style={{flexDirection:'row', paddingRight:20}}>
                                <TouchableOpacity>
                               <Icon type='material'
                             color={colors.grey}
                             size={21} name={item.is_favorite?'star':'star-border'}
                               />
                               </TouchableOpacity>

                               <TouchableOpacity 
                               onPress={()=>{
                                Alert.alert(`Delete","Are you sure you wanna Delete? ${item.first_name}`,
                                [{
                                    text:'cancel',
                                    onPress:()=>{}
                                },
                                {
                                    text:'ok',
                                    onPress:()=>{
                                        
                                   deleteContact(item.id)(contactsDispatch)(()=>{
                                    navigate(CONTACT_LIST)
                                });
                                    }
                                },
                            ]
                                );



                               }}
                               style={{paddingLeft:10}}>
                                   {loading?<ActivityIndicator color={colors.primary} />
                                   :
                               <Icon type='material'
                               size={21} name='delete'
                               color={colors.grey}
                               />
                                   }
                               </TouchableOpacity>

                            </View>
                        )
                    }
                });
            }
    },[item,loading])
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
        setLocalFile(image);
        setUpdatingImage(true);
           
        uploadImage(image)((url)=>{
            const {first_name:firstName,
                last_name:lastName,
                phone_number:phoneNumber,
                phone_code:phoneCode,
                country_code:countryCode,
                is_favorite:isFavorite
            
            
            }= item;
            console.log(item)
            editContact({firstName,lastName,phoneNumber,phoneCode,countryCode,isFavorite,contactPicture: url},
                item.id,)(contactsDispatch)(()=>{
             // navigate(CONTACT_DETAIL,{item});
             console.log("hahaha")
             setUpdatingImage(false);
             uploadSucceeded(true);
           
              
            });
          })
          ((err)=>{
            console.log('error upload', err);
            setUpdatingImage(false);
         
          });
        console.log('imahes', image)
      }

    return <ContactDetailComponent
    sheetRef={sheetRef}
    openSheet={openSheet}
    onFileSelected={onFileSelected}
    localFile={localFile}
    updatingImage={updatingImage}
    uploadSucceeded={uploadSucceeded}
    contact={item} />
}
export default ContactDetails;