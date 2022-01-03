import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './presentations/HomeScreen';
import InformationScreen from './presentations/Informationcreen';
import DoneScreen from './presentations/DoneScreen';
const Stack = createNativeStackNavigator();

function Navigating() {
  return (
    // <NavigationContainer>
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="InformationScreen" component={InformationScreen} />
      <Stack.Screen name="DoneScreen" component={DoneScreen} />
  
    </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default Navigating;
