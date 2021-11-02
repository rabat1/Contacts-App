import React,{useEffect} from 'react'
import { View, Text, Image, Switch } from 'react-native'
import styles from './styles'
import Container from '../common/container'
import CustomButton from '../common/CustomButton'
import Input from '../common/input';
import { DEFAULT_IMAGE_URI } from '../../constants/general'
import ImagePicker from '../common/ImagePicker'
import { TouchableOpacity } from 'react-native-gesture-handler'
const CreateContactComponent = ({
    toggleValueChange,
    onChangeText, onSubmit,form,loading,error,
    sheetRef,
    openSheet,
    closeSheet,
    localFile,
    onFileSelected,
}) => {
    return (
        <View style={styles.container}>
            <Container>
                <Image source={{uri:localFile?.path ||localFile||DEFAULT_IMAGE_URI}} width={150} height={150} 
                style={styles.imageView}
                />
                <TouchableOpacity onPress={openSheet}>
                <Text style={styles.textChoose}>Choose Image</Text>
            </TouchableOpacity>
            <Input
             onChangeText={(value)=>{
                onChangeText({name:'firstName', value:value})
                }}
                error={error?.first_name?.[0]}
                value={form.first_name||""||form.firstName}
            label='First Name' placeholder="Enter Your First name" />
            <Input
            value={form.lastName||""}
             onChangeText={(value)=>{
                onChangeText({name:'lastName', value:value})
                    } }
                    error={error?.last_name?.[0]}
            label='Last Name' placeholder="Enter Your Last name" />
            <Input 
                   value={form.phoneNumber||""}
                   error={error?.phone_number?.[0]}
               label='Phone Number' placeholder="Enter Your Phone No." 
               onChangeText={(value)=>{
                        onChangeText({name:'phoneNumber', value:value})
               }}
               />
            <Input 
            value={form.country_code||form.countryCode}
               error={error?.country_code?.[0]}
            label='Country Code' placeholder="Enter Your Country code" 
            onChangeText={(value)=>{
                     onChangeText({name:'countryCode', value:value})
            }}
            />

            <Input 
              value={form.phoneCode}
            label='Phone Code' placeholder="Enter Your Country code" 
            onChangeText={(value)=>{
                     onChangeText({name:'phoneCode', value:value})
            }}
            />
    <View style={{flexDirection:'row',
    alignItems:'center',paddingVertical:10,
     justifyContent:'space-between'}}>
        <Text>Add to Favourite</Text>
            <Switch 
            trackColor={{}}
            thumbColor={form.isFavorite ? 'black':'blue'}
            ios_backgroundColor='green'
            onValueChange={toggleValueChange}
            value={form.isFavorite}
            
            />
        
    </View>

            <CustomButton disabled={loading} loading={loading} onPress={onSubmit} title='Submit' primary />
            </Container>
            <ImagePicker
            onFileSelected={onFileSelected}
            ref={sheetRef} />
        </View>
    )
}

export default CreateContactComponent
