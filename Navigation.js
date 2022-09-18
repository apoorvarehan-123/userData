import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import AddUser from './screens/AddUser';
import EditUserScreen from './screens/EditUserScreen';


const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <Stack.Navigator   screenOptions={{
           headerShown: false,
         }}>
    <Stack.Screen  name="Home" component={Home} />
    <Stack.Screen  name="AddUser" component={AddUser} />
    <Stack.Screen  name="EditUserScreen" component={EditUserScreen} />
  </Stack.Navigator>
  )
}

export default Navigation

const styles = StyleSheet.create({})