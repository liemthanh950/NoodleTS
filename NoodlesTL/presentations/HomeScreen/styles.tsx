import {
    StyleSheet,
} from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imagebackgroud: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    logo: {
      width: 150,
      height: 120,
      alignSelf: 'center',
      marginTop: 20,
    },
    textwelcome: {
      alignSelf: 'center',
      fontSize: 40,
      fontFamily: 'SVN-Nexa Rust Slab Black Shadow',
      color: '#C71A1A',
    },
    media: {
      alignSelf: 'center',
      width: 320,
      height: 190,
      marginTop: 15,
    },
    imageQR: {
      width: 40,
      height: 50,
    },
    textQR: {
      fontWeight: 'bold',
      marginLeft: 5,
      fontSize: 18,
      alignSelf: 'center',
      color: '#ae0808',
    },
    cameraQR: {
      width: 110,
      height: 140,
      borderRadius: 10,
      marginLeft: 120,
    },
    next: {
      width: 50,
      height: 30,
      marginRight: 20,
      marginTop: 40,
    },
  });
  export default styles;