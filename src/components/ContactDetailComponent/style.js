import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  scrollView: {backgroundColor: colors.white},
  container: {flex: 1},
  loading: {paddingLeft: '35%', paddingTop: '5%'},
  imageContainer: {height: 270, width: '100%'},
  detailPhoto: {height: 270, width: '100%', resizeMode: 'cover'},
  names: {fontSize: 23,textAlign:'center'},
  content: {padding: 10,},

  hrLine: {
    height: 10,
    borderColor: colors.grey,
    borderBottomWidth: 0.4,
  },

  topCallOptions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  topCallOption: {
    alignItems: 'center',
  },

  middleText: {
    fontSize: 14,
    color: colors.primary,
    paddingVertical: 5,
  },
  imageView:{width:155, 
    height:155,
    borderRadius:100,
    alignSelf:'center'
},


  middleCallOptions: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 20,
  },

  phoneMobile: {
    flexGrow: 1,
    paddingHorizontal: 30,
  },

  imageView: {
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf: 'center',
  },
});