import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View,Text, Image, TouchableOpacity } from 'react-native';
import Container from '../../components/common/container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/input';
import { REGISTER } from '../../constants/routeNames';
import Message from '../common/Message';
import styles from './styles';


const index = ({error,onChange,onSubmit,loading, form, justSignedUp}) => {
    const [secureEntry,setEscureEntry] = React.useState(true);
  
    const {navigate} = useNavigation();
    return (
        <Container>
            <Image width={21} height={21} source={require('../../assets/images/logo.jpg')} style={styles.logoImage} />
            <View>
                <Text style={styles.title}>Welcom to our app</Text>
                <Text style={styles.subTitle}>Please Login here..!</Text>
               
               
                  
            <View style={styles.form}>

            {justSignedUp && ( <Message 
                 onDismiss={()=>{}}
                 message="Account has been succesfully created"
                  success/>)}


            {error && !error.error && ( <Message 
                 onDismiss={()=>{}}
                 message="Invalid credentials" danger/>)}

            {error?.error&&
                (
                    <Message
                    onDismiss
                    danger
                  message={error?.error}
                    />
                )}
            <Input
            style={{}}
            label="UserName"
           // error="This is required*"
            placeholder='Enter UserName'
            onChangeText={(value)=>onChange({name:'username', value})}
               value={form.username|| null}
                
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
            onChangeText={(value)=>onChange({name:'password', value})}
          
            />
               <CustomButton title='submit' loading={loading} onPress={onSubmit}
            disabled={loading} primary
            />
            <View style={styles.createSection}>
                <Text style={styles.infoText}>Don't have an account..?</Text>
                <TouchableOpacity onPress={()=>{navigate(REGISTER)}}>
                    <Text style={styles.linkBtn}>Register here..</Text></TouchableOpacity>
            </View>
            </View>
            </View>
         
        </Container>
    )
}

export default index
