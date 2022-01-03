import {
    StyleSheet,
} from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    logo: {
      width: 120,
      height: 90,
      alignSelf: 'center',
      marginTop: 10,
    },
    textinformation: {
      alignSelf: 'center',
      fontSize: 30,
      marginTop: 10,
      fontFamily: 'SVN-Nexa Rust Slab Black Shadow',
      color: '#C71A1A',
    },
    BGcard: {
      width: 350,
      height: 130,
      alignSelf: 'center',
      marginVertical: 10,
    },
    user: {
      width: 70,
      height: 70,
      marginTop: 30,
      marginLeft: 20,
      borderRadius: 30,
    },
    textfullname: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#880B0B',
    },
    textname: {
      fontSize: 15,
      color: '#880B0B',
      marginHorizontal: 30,
    },
    noodles: {
      width: 60,
      height: 90,
    },
    buttonget: {
      width: 300,
      height: 50,
      marginTop: 60,
      position: 'absolute',
      alignSelf: 'center',
    },
    buttoncomeback: {
      width: 300,
      height: 50,
    },
    css_noodles: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginHorizontal: 50,
      marginTop: 10,
    },
    css_hover: {
      flexDirection: 'row',
      width: 330,
      justifyContent: 'space-around',
      position: 'absolute',
      alignSelf: 'center',
    },
    hover: {
      marginTop: 10,
      width: 80,
      height: 80,
      position: 'absolute',
      marginLeft: -10,
    },
    css_unavailableNoodles: {
      flexDirection: 'row',
      width: 400,
      justifyContent: 'space-around',
      position: 'absolute',
      alignSelf: 'center',
    },
    unavailableNoodles: {
      width: 60,
      height: 100,
    },
    unavailableText: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    css_unavailableText: {
      fontFamily: 'PaytoneOne-Regular',
      fontSize: 15,
      width: 100,
      color: '#C4C4C4',
    },
    textbirthay: {
      marginLeft: 35,
      fontSize: 15,
      color: '#880B0B',
    },
    textgender: {
      marginLeft: 45,
      fontSize: 15,
      color: '#880B0B',
    },
    textdesign: {
      marginLeft: 40,
      fontSize: 15,
      color: '#880B0B',
    },
    textdepartment: {
      marginLeft: 15,
      fontSize: 15,
      color: '#880B0B',
    },
  });
  export default styles;