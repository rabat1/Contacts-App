import { StyleSheet } from "react-native"
import colors from "../../assets/theme/colors";


export default StyleSheet.create({
    container:{
        backgroundColor:colors.white
    },
    imageView:{width:155, 
        height:155,
        borderRadius:100,
        alignSelf:'center'
    },
    textChoose:{
        textAlign:'center',
        color:colors.primary
    }

})