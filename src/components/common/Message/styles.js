import { StyleSheet } from "react-native"
import colors from "../../../assets/theme/colors";

export default StyleSheet.create({
  
wrapper:{
    height:42,
    marginVertical:5,
    borderRadius:5,
 paddingVertical:13,
    paddingHorizontal:5,
},
error:{
    color:colors.danger,
    paddingTop:4,
    fontSize:12
},
loadingSection:{
flexDirection:'row'
},

});