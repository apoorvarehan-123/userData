import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import UserData from "../componnts/UserData";
import Header from "../componnts/Header";

const Home = () => {
  return (
    <View className=" p-3 ">
        <Header/>
     <UserData/>

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
   
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  button:{
    paddingVertical: 10,
    paddingHorizontal:20,
    flex:1,
    marginRight:5,
    justifyContent:'center',
    alignItems:'center'
  }
});
