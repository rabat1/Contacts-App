import React,{useState} from 'react'
import { View, Text, TextInput } from 'react-native'
import colors from '../../../assets/theme/colors';
import styles from './styles';

const Input = ({label,onChangeText,error,icon,iconPosition, style, value, ...props}) => {
   const [focus, setFocus] = useState(false)
   
   const getFlexDirection=()=>{
        if(icon && iconPosition){
            if(iconPosition=='left'){
                return 'row';
            } else if(iconPosition=='right'){
                return 'row-reverse';
            }
        }
    }
    const getBorderColor=()=>{
        if(error){
            return colors.danger;
        }
        if(focus){
            return colors.secondary;
        }
       
        else return colors.grey;
    }
    return (
        <View style={styles.inputContainer}>

            {label&&<Text>{label}</Text>}

         <View style={[styles.wrapper,{alignItems:icon?'center':'baseline'},
         {borderColor:getBorderColor(),
                flexDirection: getFlexDirection()}]}>
                 <View >{icon&&icon}</View>
                    <TextInput 
                    onChangeText={onChangeText}
                    value={value}
                    style={[styles.textInput,style]}
                    onFocus={()=>setFocus(true)}
                    onBlur={()=>setFocus(false)}
                    {...props}
                    />
                </View>

           {error && <Text style={styles.error}>{error}</Text>}
        </View>
    )
}

export default Input;
