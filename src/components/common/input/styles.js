import { StyleSheet } from "react-native"
import colors from "../../../assets/theme/colors";

export default StyleSheet.create({
    inputContainer:{
        paddingVertical:8,
    },
    textInput:{
    flex:1,
    width:'100%',
    
},
wrapper:{
    height:42,
    marginTop:5,
    borderWidth:1,
    borderRadius:10,
    flexDirection:'row',
    paddingHorizontal:5,
    alignContent:'center'
},
error:{
    color:colors.danger,
    paddingTop:4,
    fontSize:12
}

});