import React from 'react'
import { View, Text, Image, SafeAreaView, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Container from '../../components/common/container'
import { SETTINGS } from '../../constants/routeNames'
import logoutUser from '../../context/actions/auth/logoutUser'
import styles from './style';
import Icon from '../../components/common/Icon';


const SideMenu = ({navigation, authDispatch}) => {
    const handleLogout =()=>{
        navigation.toggleDrawer();
        Alert.alert("Logout","Are you sure you wanna logout?",
        [{
            text:'cancel',
            onPress:()=>{}
        },
        {
            text:'ok',
            onPress:()=>{
                logoutUser()(authDispatch);
            }
        },
    ]
        );
    }
    const menuItems=[
        {icon:<Icon type='fontisto' name='player-settings' size={22} />, name:'settings', onPress:()=>{navigation.navigate(SETTINGS)}},
        {icon:<Icon type='material' name='logout' size={22} />, name:'logout', onPress:()=>{handleLogout()}}
    ]
    return(
        <SafeAreaView>
            <Container>
            <Image width={21} height={21} source={require('../../assets/images/logo.jpg')} style={styles.logoImage} />
            
             <View style={{paddingHorizontal:70}}>
               {menuItems.map(({icon,name,onPress})=><TouchableOpacity onPress={onPress}
                style={styles.item} key={name}>
           {icon}
            <Text style={styles.itemText}>{name}</Text>
               </TouchableOpacity>)}
               </View>

            </Container>
        </SafeAreaView>
    )
}

export default SideMenu
