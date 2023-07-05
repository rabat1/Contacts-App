import React from 'react'
import { View, Text, ScrollView,TouchableOpacity,Image} from 'react-native';
import ImageComponent from './ImageComponent';
import Container from '../common/container';
import style from './style';
import { CONTACT_CREATE } from '../../constants/routeNames';
import CustomButton from '../common/CustomButton';
import Icon from '../common/Icon';
import colors from '../../assets/theme/colors';
import { useNavigation } from '@react-navigation/core';
import { DEFAULT_IMAGE_URI } from '../../constants/general';
import ImagePicker from '../common/ImagePicker';

const ContactDetailComponent = ({contact, localFile,uploadSucceeded, openSheet,sheetRef,onFileSelected,updatingImage}) => {
    const {country_code,contact_picture, first_name,last_name, phone_number} = contact;
    const {navigate} = useNavigation();
    return (
      <ScrollView style={style.scrollView}>
        <View style={style.container}>
              {(contact_picture || uploadSucceeded) && 
              (
              <ImageComponent src={contact_picture || localFile?.path} />
              )}
                
        {!contact_picture && !uploadSucceeded && (
        <View style={{alignItems:'center', paddingVertical:20,}}>
        <Image source={{uri:localFile?.path||DEFAULT_IMAGE_URI}} width={150} height={150} 
                        style={style.imageView}
                />
                <TouchableOpacity onPress={()=>{openSheet();}}>
                  
                  <Text>{updatingImage?"Updating...":'Add Photo'}</Text>
                </TouchableOpacity>
                </View>
    )
            }
          <View style={style.content}>
          <Text style={style.names}>{first_name + ' ' + last_name}</Text>
        </View>

        <View style={style.hrLine} />

        <View style={style.topCallOptions}>
          <TouchableOpacity style={style.topCallOption}>
            <Icon
              type="ionicon"
              name="call-outline"
              color={colors.primary}
              size={27}
            />
            <Text style={style.middleText}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.topCallOption}>
            <Icon
              type="materialCommunity"
              name="message-text"
              color={colors.primary}
              size={27}
            />
            <Text style={style.middleText}>Text</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.topCallOption}>
            <Icon
              type="materialCommunity"
              name="video"
              color={colors.primary}
              size={27}
            />
            <Text style={style.middleText}>Video</Text>
          </TouchableOpacity>
        </View>

        <View style={style.middleCallOptions}>
          <Icon
            type="ionicon"
            name="call-outline"
            color={colors.grey}
            size={27}
          />
          <View style={style.phoneMobile}>
            <Text>{phone_number}</Text>
            <Text>Mobile</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              type="materialCommunity"
              name="video"
              color={colors.primary}
              size={27}
            />
            <Icon
              type="materialCommunity"
              name="message-text"
              color={colors.primary}
              size={27}
            //  style={[style.msgIcon]}
            />
          </View>
        </View>
        <CustomButton
          style={{alignSelf: 'flex-end', marginRight: 20, width: 200}}
          primary
          title="Edit Contact"
          onPress={() => {
            navigate(CONTACT_CREATE, {contact, editing: true});
          }}
        />
      </View>
      <ImagePicker
            onFileSelected={onFileSelected}
            ref={sheetRef}
             />
      

      </ScrollView>
    )
}

export default ContactDetailComponent;
