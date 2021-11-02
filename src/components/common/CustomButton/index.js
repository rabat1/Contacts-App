import React from 'react'
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import colors from '../../../assets/theme/colors';
import styles from './styles';

const CustomButton = ({
    title,
    disabled,
    secondary,primary,danger,
    loading,
    onPress,
    style
}) => {
    const getBgColor=()=>{
        if(disabled){
            return colors.grey;
        }
        if(secondary){
            return colors.secondary;
        }
        else if(danger){
            return colors.danger;
        }
        else if(primary){
            return colors.primary;
        }
        }
    return (
        <TouchableOpacity onPress={onPress}
         style={[styles.wrapper,{backgroundColor:getBgColor()},style]}>
                <View style={[styles.loadingSection]}>
                 {loading&& <ActivityIndicator color={primary?colors.blue:colors.secondary}/>}   
                {title&&<Text style={{color: disabled?'black':colors.white, paddingLeft: loading?5:0}}>{loading ? 'Please wait': title}</Text>}

                </View>
          
        
        </TouchableOpacity>
    )
}

export default CustomButton;
