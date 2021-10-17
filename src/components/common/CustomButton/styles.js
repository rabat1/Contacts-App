import { StyleSheet } from "react-native"
import colors from "../../../assets/theme/colors";

export default StyleSheet.create({
  
wrapper:{
    height:42,
    marginVertical:5,
    borderRadius:5,
    alignItems:'center',
    paddingHorizontal:5,
    justifyContent:'space-evenly'
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