import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Data from './redux/Data'

import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import Home from "./screens/Home";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./Navigation";
import { configureStore } from '@reduxjs/toolkit'
import userSlice from './redux/features/Users'


const store = configureStore({
    reducer:{
       users:userSlice,
    }
  })
  



const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};


export default function App() {





  return (
    <NavigationContainer>
       <Provider store ={store}>
      <PaperProvider theme={theme}>
        <SafeAreaView
          className="flex-1 bg-white "
          style={{ marginTop: Platform.OS === "android" ? 25 : 0 }}
        >
          <View className="flex-1 bg-gray-300 ">
            <Navigation />
            <Data/>
          </View>
        </SafeAreaView>
      </PaperProvider>
       </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
