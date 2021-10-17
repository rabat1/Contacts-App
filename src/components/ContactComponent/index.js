import React from 'react'
import { Text, View, FlatList, TouchableOpacity, ActivityIndicator, Image } from 'react-native'
import AppModal from '../common/AppModal'
import CustomButton from '../../components/common/CustomButton';
import Message from '../common/Message'
import colors from '../../assets/theme/colors';
import Icon from '../common/Icon';
import styles from './styles';
import { useNavigation } from '@react-navigation/core';
import { CONTACT_CREATE } from '../../constants/routeNames';


const ContactComponent = ({sortBy,modalVisible,data,loading,setModalVisible}) => {
    const {navigate}= useNavigation();
    const ListEmptyComponent=()=>{
        return(
        <View style={{ paddingVertical:50, alignSelf:'center'}}>
            <Message message="No Contacts to show" danger />
        </View>
        )
    };
    const renderItem = ({item}) =>{
        console.log(item);
        const {country_code,contact_picture, first_name,last_name, phone_number} = item;

        return(
        <TouchableOpacity style={styles.itemContainer}>

         <View style={styles.item}>

        {contact_picture ?
        (<Image
         style={{width:45, height:45,borderRadius:100}}
         source={{uri:contact_picture}}/>)
         :
             (<View style={{width:45, height:45, 
         backgroundColor:colors.grey,
         flexDirection:'row',justifyContent:'center', alignItems:'center',
         borderRadius:100,
         }}>
             <Text style={[styles.name, {color:colors.white}]}>{first_name[0]}</Text>
             <Text style={[styles.name, {color:colors.white}]}>{last_name[0]}</Text>
            </View>)}
     
        <View style={{paddingHorizontal:20}}>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.name}>{first_name} </Text>
                <Text style={styles.name}>{last_name}</Text>
    
            </View>
            <Text style={styles.phoneNumber}>{`${country_code} ${phone_number}` }</Text>
        </View>

         </View>
         <Icon name='right' type='ant' size={17} color={colors.grey} />
  </TouchableOpacity>)
    }
    return (
        <>
        <View>
           {loading &&
             ( <View style={{ paddingVertical:50, alignSelf:'center'}}>
         
           <ActivityIndicator size='large' color={colors.primary} />
           </View>
             )}
           {!loading &&
           <View style={{paddingVertical:15}}>
           <FlatList
            keyExtractor={(item)=>String(item.id)} 
            data= {sortBy?data.sort((a,b)=>{
                    if(sortBy=== 'First Name'){
                        if(a.first_name < b.first_name){
                            return -1;
                        }
                        else{
                            return 1
                        }

                    }
                    else if(sortBy=='Last Name'){
                        if(a.last_name < b.last_name){
                            return -1;
                        }
                        else{
                            return 1
                        }


                    }
            }):data} 
            renderItem={renderItem}
            ItemSeparatorComponent={()=>
            (
            <View style={styles.itemSeperator}></View>
            )}
            ListEmptyComponent={ListEmptyComponent}
            ListFooterComponent={<View style={{height:100}}></View>}
            /></View>}
           
        </View>

        <TouchableOpacity 
        onPress={()=>{navigate(CONTACT_CREATE)}}
        style={styles.editContactButton}>
            <Icon name='plus' size={20} color={colors.white}/>
        </TouchableOpacity>
        </>
    )
}

export default ContactComponent;

