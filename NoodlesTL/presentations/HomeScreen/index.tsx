import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import styles from './styles';

import { Text, View, TouchableOpacity,Image, SafeAreaView, ImageBackground,
} from 'react-native';


interface ParametersType {
    id:string,
  }
  type ParamToNewScreen = (where:string, params?:ParametersType) => void;
  
  
  interface ScanCode {
    data:string,
  }
  

  const Home = (props:{navigation:{navigate:ParamToNewScreen }}) => {
    const {navigation} =props
    const onSuccess = async (a:ScanCode) => {
      if (a.data) {
        navigation.navigate('InformationScreen', 
        { id: a.data })
      }
    };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../image/backgroud.jpg')}
        resizeMode="cover"
        style={styles.container}>
        <View>
          <Image style={styles.logo} source={require('../image/logo.png')} />
          <Text style={styles.textwelcome}>WELCOME</Text>
          <Image style={styles.media} source={require('../image/media.png')} />
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Image style={styles.imageQR} source={require('../image/QR.png')} />
            <Text style={styles.textQR}>Follow the arrow to scan card</Text>
          </View>
          <View
            style={{flexDirection: 'row', alignSelf: 'center', marginTop: 50}}>
            <QRCodeScanner
              ref={node => {
                if (node) {
                  node.reactivate();
                }
              }}
              onRead={onSuccess}
              cameraType="back"
              cameraStyle={{width: 100, height: 100}}
              containerStyle={{
                alignItems: 'center',
                marginLeft: 90,
                marginTop: 20,
              }}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('InformationScreen')}>
              <Image
                style={styles.next}
                source={require('../image/next.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default Home;