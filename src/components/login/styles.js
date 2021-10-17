import { StyleSheet } from "react-native"
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
    
logoImage:{
  width:70,
  height:70,
  alignSelf:'center',
  margin:10,
},
subTitle:{
   paddingTop:12,
  textAlign:"center",
},
title:{
 fontSize:21,
 fontWeight:'500',
 textAlign:"center",
 color:colors.primary
},
form:{
    paddingTop:20,
},
createSection:{
 flexDirection:'row'
},
linkBtn:{
paddingLeft:15,
color:colors.primary
},
infoText:{
fontWeight:'600',
}

});