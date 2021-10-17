import React from 'react'
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import colors from '../../../assets/theme/colors';
import styles from './styles';

const Message = ({
    message,
    info,
    success,
    primary,danger,retry,retryFn,
    onDismiss
    
}) => {
    const [dismiss, setDismiss]= useState(true);
    const getBgColor=()=>{
        
        if(info){
            return colors.secondary;
        }
        else if(danger){
            return colors.danger;
        }
        else if(primary){
            return colors.primary;
        }  else if(success){
            return colors.blue;
        }
        }
    return (
        <>
        {dismiss?
        <TouchableOpacity
         style={[styles.wrapper,{backgroundColor:getBgColor()}]}>

                <View style={[{flexDirection:'row',justifyContent:'space-between'},]}>
                
                 <Text style={{color:colors.white,}}>{message}</Text>
                 
                     {retry && !typeof onDismiss ==='function' && (
                      <TouchableOpacity onPress={retryFn}> 
                      <Text style={{color:colors.white,}}> Retry</Text> 
                </TouchableOpacity> )}

                     {typeof onDismiss==='function' && (
                     <TouchableOpacity onPress={()=>{
                         setDismiss(false);
                         {onDismiss}
                     }}
                      >
                     <Text style={{color:colors.white,}}>
                         Cross</Text>
                         </TouchableOpacity>
                         )}
                
                </View>
          
        
        </TouchableOpacity>
        :null}
        </>
    )
}

export default Message;
