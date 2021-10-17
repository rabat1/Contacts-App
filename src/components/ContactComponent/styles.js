import { StyleSheet } from "react-native"
import colors from "../../assets/theme/colors";


export default StyleSheet.create({
    item:{
        flexDirection:'row',
        paddingHorizontal:10,
        paddingVertical:7,
        alignItems:'center',
    },
    itemContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingRight:20,
        alignItems:'center',
    },
    name:{
        fontSize:16,
     
    },
    phoneNumber:{
            opacity:0.6,
    },
    itemSeperator:{
        height:0.5,
        opacity:0.7,
        backgroundColor:colors.grey,
        width:'95%',
        alignSelf:'center'
    },
    editContactButton:{
        backgroundColor:'black',
        width:55,
        height:55,
        borderRadius:100,
        justifyContent:'center',alignItems:'center',
        position:"absolute",
        bottom:45,
        right:10,

    }
})