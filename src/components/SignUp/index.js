import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View,Text, Image, TouchableOpacity } from 'react-native';
import Container from '../common/container';
import CustomButton from '../common/CustomButton';
import Input from '../common/input';
import { LOGIN } from '../../constants/routeNames';
import styles from './styles';
import Message from '../common/Message';
import { useState } from 'react/cjs/react.development';

const RegisterComponent = ({onChange,onSubmit,loading,error,form,errors}) => {
    const [secureEntry,setEscureEntry] = React.useState(true);
    const {navigate} = useNavigation();
    return (
        <Container>
            <Image width={21} height={21} source={require('../../assets/images/logo.jpg')} style={styles.logoImage} />
             <View>
                <Text style={styles.title}>Welcom to our app</Text>
                <Text style={styles.subTitle}>Make Your Account : )</Text>
                {error?.error&&
                (
                    <Message
                    retry
                    danger
                    retryFn={()=>{console.log('retry')}
                }   message={error?.error}
                    />
                )}
              
                <View style={styles.form}>
                <Input
                style={{}}
                label="UserName"
            // error="This is required*"
                placeholder='Enter UserName'
                onChangeText={(value)=>onChange({name:'username', value})}
                error={errors.username || error?.username?.[0]}
                />

                <Input
                style={{}}
                label="FirstName"
            // error="This is required*"
                placeholder='Enter UserName'
                onChangeText={(value)=>onChange({name:'firstname', value})}
                error={errors.firstname || error?.firstname?.[0]}
                />
                <Input
                style={{}}
                label="LastName"
                placeholder="Enter last Name"
                error={errors.lastname}
                onChangeText={(value)=>onChange({name:'lastname', value})}
                error={errors.lastname || error?.last_name?.[0]}
                />
                <Input
                style={{}}
                label="Email"
                placeholder="Enter Email"
                error={errors.email}
                onChangeText={(value)=>onChange({name:'email', value})}
                error={errors.email || error?.email?.[0]}
                />
                <Input
                style={{}}
                label="Password"
                icon=
                {
                <TouchableOpacity onPress={()=>{setEscureEntry((prev)=> !prev)}}>
                <Text >{secureEntry?'show': 'hide'}</Text>
                </TouchableOpacity>
                }
                iconPosition='right'
                placeholder="Enter Password"
                secureTextEntry={secureEntry}
                error={errors.password}
                onChangeText={(value)=>onChange({name:'password', value})}
                error={errors.password || error?.password?.[0]}
                />
                <CustomButton title='submit' loading={false} 
                primary 
                onPress={onSubmit}
                loading={loading}
                disabled={loading}
                />
            
                <View style={styles.createSection}>
                    <Text style={styles.infoText}>Already have an account..?</Text>
                    { <TouchableOpacity onPress={()=>{navigate(LOGIN)}}>
                        <Text style={styles.linkBtn}>Login..</Text></TouchableOpacity> }
                </View>

            </View>

            </View>
         
        </Container>
    )
}

export default RegisterComponent;
