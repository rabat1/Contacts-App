import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import AppModal from '../common/AppModal'
import Icon from '../common/Icon'
const SettingsComponent = ({
    setModalVisible,
    modalVisible,settingsOptions,
    prefArr,
}) => {
    
    return (
        <>
        <AppModal 
        modalVisible={modalVisible}
         title='Sort By'
         closeOnTouchOutside={false}
         setModalVisible={setModalVisible}
          modalBody={
          <View>
                {prefArr.map(({name,selected, onPress})=>(
              <>     
                    <View>
                        <TouchableOpacity key={name} onPress={onPress} 
                        style={{flexDirection:'row',
                        alignItems:'center', paddingTop:5,
                        }} >
                            {selected && <Icon name='check'   />}
                            <Text style={{paddingLeft: selected?10:20}}>{name}</Text>
                        </TouchableOpacity>
                    </View>
             </>  
             ))}
                    
         </View>}
          modalFooter={<></>} />
        <ScrollView>
                {settingsOptions.map(({title, subTitle,onPress}, index)=>(
                    <TouchableOpacity onPress={onPress} key={title}>
                        <View
                        style={{paddingHorizontal:20, paddingTop:20, paddingBottom:20,}}
                        >
                            <Text style={{fontSize:17}}>{title}</Text>
                             {subTitle && (
                            <Text style={{fontSize:14,opacity:0.6, paddingTop:5}}>{subTitle}</Text>
                            )}  
                        </View>

                        <View style={{height:0.5, backgroundColor:'grey'}} />

                    </TouchableOpacity>
                ))}
        </ScrollView>
        </>
    )
}

export default SettingsComponent;
