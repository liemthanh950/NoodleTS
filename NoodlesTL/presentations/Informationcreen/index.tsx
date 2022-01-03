import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch, RootStateOrAny} from 'react-redux';
import { Text, View, TouchableOpacity, Image, SafeAreaView, ImageBackground,
} from 'react-native';

import styles from './styles';
import firebase from '../../firebase/firebase'



const InformationScreen = ({route}: { route: any },{navigation}:{navigation:any}) => {

    console.log('route', route.params)
    const Hover = useSelector((state:RootStateOrAny) => state.NoodlesReducer.hover);
 

    const [selectedHover1, setSelectedHover1] = useState(false);
    const [selectedHover2, setSelectedHover2] = useState(false);
    const [selectedHover3, setSelectedHover3] = useState(false);
    const [comeBack, setComeBack] = useState(false);



    const [data, setData] = useState(route.params);
    useEffect(() => {
        setNoodles({
            noodles1: route.params.Noodles1,
            noodles2: route.params.Noodles2,
            noodles3: route.params.Noodles3,
        });
    }, []);

    const setNoodles = (noodles: any) => dispatch({
        type: 'SET_NOODLES',
        payload: noodles
    })
    const setNoodles1 = (noodles: any) => dispatch({
        type: 'SET_NOODLES1',
        payload: noodles
    })
    const setNoodles2 = (noodles: any) => dispatch({
        type: 'SET_NOODLES2',
        payload: noodles
    })
    const setNoodles3 = (noodles: any) => dispatch({
        type: 'SET_NOODLES3',
        payload: noodles
    })
    const dispatch = useDispatch();

    const handleGetNoodles = async () => {
        if (!selectedHover1 && !selectedHover2 && !selectedHover3) {

        } else {
            //handle redux
            if (selectedHover1) {
                await setNoodles1(false)
                setSelectedHover1(false)
            }
            if (selectedHover2) {
                await setNoodles2(false)
                setSelectedHover2(false)
            }
            if (selectedHover3) {
                await setNoodles3(false)
                setSelectedHover3(false)
            }
            navigation.navigate('DoneScreen')
        }
    }
    const handleUpdateStatusOfNoodles = async () => {
        await firebase
            .database()
            .ref()
            .child('noodles')
            .child(route.params.Id)
            .update({
                Noodles1: selectedHover1 ? !selectedHover1 : route.params.Noodles1,
                Noodles2: selectedHover2 ? !selectedHover2 : route.params.Noodles2,
                Noodles3: selectedHover3 ? !selectedHover3 : route.params.Noodles3,
            })
            .then(() => {
                console.log('update');
            })
    }
  return (
        <SafeAreaView style={styles.container}>
          <ImageBackground
            source={require('../image/backgroud.jpg')}
            resizeMode="cover"
            style={styles.container}>
            <View>
              <Image
                style={styles.logo}
                source={require('../image/logo.png')}
              />
              <Text style={styles.textinformation}>INFORMATION</Text>
              <ImageBackground
                source={require('../image/BGcard.png')}
                resizeMode="cover"
                style={styles.BGcard}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={styles.user}
                    source={require('../image/user.jpg')}
                  />
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 10,
                        marginLeft: 40,
                      }}>
                      <Text style={styles.textfullname}>Full Name:</Text>
                      <Text style={styles.textname}>{data.fullname}</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginLeft: 40,
                        marginTop: 5,
                      }}>
                      <Text style={styles.textfullname}>Birthday:</Text>
                      <Text style={styles.textbirthay}> {data.birthay}</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginLeft: 40,
                        marginTop: 5,
                      }}>
                      <Text style={styles.textfullname}>Gender: </Text>
                      <Text style={styles.textgender}>{data.gender}</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginLeft: 40,
                        marginTop: 5,
                      }}>
                      <Text style={styles.textfullname}>Department:</Text>
                      <Text style={styles.textdepartment}>
                        {data.department}
                      </Text>
                    </View>
                  </View>
                </View>
              </ImageBackground>

              <View style={styles.css_noodles}>
                <View>
                  {Hover.hover1 ? (
                    <TouchableOpacity
                      onPress={() => {
                        setSelectedHover1(!selectedHover1);
                      }}>
                      {selectedHover1 == true && (
                        <Image
                          style={styles.hover}
                          source={require('../image/hover.png')}
                        />
                      )}
                      <Image
                        style={styles.noodles}
                        source={require('../image/noodles.png')}
                      />
                    </TouchableOpacity>
                  ) : (
                    <View>
                      <Image
                        style={styles.unavailableNoodles}
                        source={require('../image/unavailableNoodles.png')}
                      />
                      <Text style={styles.css_unavailableText}>
                        Unavailable
                      </Text>
                    </View>
                  )}
                </View>
                <View>
                  {Hover.hover2 ? (
                    <TouchableOpacity
                      onPress={() => {
                        setSelectedHover2(!selectedHover2);
                      }}>
                      {selectedHover2 == true && (
                        <Image
                          style={styles.hover}
                          source={require('../image/hover.png')}
                        />
                      )}
                      <Image
                        style={styles.noodles}
                        source={require('../image/noodles.png')}
                      />
                    </TouchableOpacity>
                  ) : (
                    <View>
                      <Image
                        style={styles.unavailableNoodles}
                        source={require('../image/unavailableNoodles.png')}
                      />
                      <Text style={styles.css_unavailableText}>
                        Unavailable
                      </Text>
                    </View>
                  )}
                </View>

                <View>
                  {Hover.hover3 ? (
                    <TouchableOpacity
                      onPress={() => {
                        setSelectedHover3(!selectedHover3);
                      }}>
                      {selectedHover3 == true && (
                        <Image
                          style={styles.hover}
                          source={require('../image/hover.png')}
                        />
                      )}
                      <Image
                        style={styles.noodles}
                        source={require('../image/noodles.png')}
                      />
                    </TouchableOpacity>
                  ) : (
                    <View>
                      <Image
                        style={styles.unavailableNoodles}
                        source={require('../image/unavailableNoodles.png')}
                      />
                      <Text style={styles.css_unavailableText}>
                        Unavailable
                      </Text>
                    </View>
                  )}
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  marginTop: 10,
                }}>
                <Text
                  style={{color: '#D91313', fontWeight: 'bold', fontSize: 15}}>
                  {Hover.remain}
                </Text>
                <Text style={{color: '#9C6666', fontSize: 15}}>
                  {' '}
                  cups of noodles left this month
                </Text>
              </View>
            </View>
            {
            Hover.remain > 0 &&
                (
                    <TouchableOpacity onPress={handleUpdateStatusOfNoodles}>
              <Image
                style={styles.buttonget}
                source={require('../image/buttonget.png')}
              />
            </TouchableOpacity>
                )
              }
              {
                Hover.remain == 0 &&
                (
                    <TouchableOpacity onPress={handleGetNoodles}>
                <Image
                  style={styles.buttoncomeback}
                  source={require('../image/buttoncomeback.png')}  />
             
             </TouchableOpacity>
                )
            }
          </ImageBackground>
        </SafeAreaView>
                )}
export default InformationScreen;