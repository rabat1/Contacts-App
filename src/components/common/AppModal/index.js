import React from 'react'
import { TouchableOpacity,Modal, Text, View, ScrollView } from 'react-native'
import Icon from '../Icon';
import styles from './styles';
import PropTypes from 'prop-types'

const AppModal = ({modalVisible, title,setModalVisible, modalBody, modalFooter,closeOnTouchOutside}) => {
    return (
        <Modal visible={modalVisible} transparent>
            <TouchableOpacity style={styles.wrapper} 
            onPress={()=>{
              if(closeOnTouchOutside)
              setModalVisible(false)
            
            }}
            >
                <View style={styles.modalView}>
                    <ScrollView>

                <View style={styles.headerModal}>
                  <TouchableOpacity onPress={()=>setModalVisible(false)}>
                <Icon size={25} name='close' type='evil' />
                </TouchableOpacity>
                <Text style={styles.title}>{title || 'RnCobtacts'}</Text>
                <View />
                <View />
                </View>


            <View style={styles.footerSeparator} />

            <View style={styles.body}>{modalBody}</View>
            {modalFooter}

            {!modalFooter && (
              <View>
                <>
                  <View style={styles.footerSeparator} />
                  <View style={styles.footerItems}>
                    <View style={styles.footer}>
                      <Text style={styles.footerText}>Privacy Policy</Text>
                      <View style={styles.termsView} />
                      <Text style={styles.footerText}>Terms of Service</Text>
                    </View>
                  </View>
                </>
              </View>
            )}

                    </ScrollView>
                </View>

            </TouchableOpacity>
        </Modal>
    )
};
AppModal.propTypes = {
  closeOnTouchOutside: PropTypes.bool,
};

AppModal.defaultProps = {
  closeOnTouchOutside: true,
};

export default AppModal;

