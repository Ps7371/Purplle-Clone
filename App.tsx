import { View, Text } from 'react-native'
import 'react-native-gesture-handler'
import React from 'react'
import {Welcome,Walkthrough,BrandDisplay,CategoryDetails,CategoryDetails1,BrandDisplay1,Cart,Lottie} from './screens';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { AnimTab1,AnimTab2 } from './navigation';
import { Provider } from 'react-redux';
import { mystore } from './mystore';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={mystore}>

    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="Welcome"
      >
     <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={AnimTab1}
        />
         <Stack.Screen   options={{headerShown: false}}  name="Welcome" component={Welcome} />
         <Stack.Screen   options={{headerShown: false}}  name="Walkthrough" component={Walkthrough} />
         <Stack.Screen   options={{headerShown: false}}  name="CategoryDetails" component={CategoryDetails} />
         <Stack.Screen   options={{headerShown: false}}  name="CategoryDetails1" component={CategoryDetails1} />
         <Stack.Screen   options={{headerShown: false}}  name="BrandDisplay" component={BrandDisplay} />
         <Stack.Screen   options={{headerShown: false}}  name="BrandDisplay1" component={BrandDisplay1} />
         <Stack.Screen   options={{headerShown: true}}  name="Cart" component={Cart} />
         <Stack.Screen   options={{headerShown: true}}  name="Lottie" component={Lottie} />
    </Stack.Navigator>
        </Provider>
  </NavigationContainer>
  )
}

export default App