import React, {useEffect} from 'react';
import {Text, View, TouchableOpacity,Image,SafeAreaView,ImageBackground,BackHandler,
} from 'react-native';
import styles from './styles';


type navigation = {
    navigate:(where:string) => void;
}

type objReceiveType = {
    navigation:navigation
}
const DoneScreen = (props:objReceiveType) =>{
    const {navigation} = props;
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
        return ()=> {
            backHandler.remove()
           };
    },[])
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../image/backgroud.jpg')}
        resizeMode="cover"
        style={styles.container}>
        <View>
          <Image style={styles.logo} source={require('../image/logo.png')} />
          <Text style={styles.textDone}>DON</Text>
          <ImageBackground
            source={require('../image/Done.png')}
            resizeMode="cover"
            style={styles.Done}></ImageBackground>
          <View
            style={{flexDirection: 'row', alignSelf: 'center', marginTop: 20}}>
            <Text style={styles.textEnjoy}> Enjoy your noodles</Text>
            <Image style={styles.Tim} source={require('../image/Tim.png')} />
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
              <Image
                style={styles.buttonback}
                source={require('../image/buttonback.png')}
               />
              
            </TouchableOpacity>
            <Text style={styles.text_getthembelow}>Get them below</Text>
            <Image
              style={styles.next_getthembelow}
              source={require('../image/nextdown.png')}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default DoneScreen;