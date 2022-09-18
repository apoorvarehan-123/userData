import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import React,{useState,useEffect} from "react";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { updateUser, userSlice } from "../redux/features/Users";
import { useRoute } from "@react-navigation/native";

const EditUserScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const route = useRoute();
const [userid, setuserid] = useState('');
useEffect(() => {
  setuserid(route.params.item.id)
}, [])

console.log('rote.params',route.params);

  const [title, setTitle] = useState(route.params.item.title);
  const [description, setDescription] = useState(route.params.item.body);
const update =() =>{
  dispatch(
    updateUser({
     id:userid,
      title,
      body: description,
    })
  );

  navigation.goBack();
}
 
  return (
    <View style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
      <View
        style={{
          width: 40,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ width: 40, marginLeft: 5 }}
        >
          <AntDesign name="closecircle" size={28} color="#585656" />
        </TouchableOpacity>
      </View>
      <View style={{ paddingVertical: 15, paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 16, marginBottom: 10, fontWeight: "bold" }}>
          Title
        </Text>
        <TextInput
          style={{
            borderWidth: 0.6,
            padding: 10,
            borderRadius: 3,
            fontWeight: "600",
            fontSize: 14,
          }}
          value={title}
          placeholder="title"
          placeholderTextColor="pink"
          onChangeText={(text) =>  setTitle(text)}
        />
      </View>
      <View style={{ paddingVertical: 15, paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 16, marginBottom: 10, fontWeight: "bold" }}>
          Description
        </Text>
        <TextInput
          style={{
            borderWidth: 0.6,
            padding: 10,
            borderRadius: 3,
            fontWeight: "600",
            fontSize: 14,
          }}

          value={description}
          onChangeText={(text) => setDescription(text)}
          placeholder="Description"
          placeholderTextColor="pink"
        />
      </View>
      <TouchableOpacity
      onPress={update}
        style={{
          backgroundColor: "black",
          paddingHorizontal: 29,
          height: 38,
          borderRadius: 22,
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 18,
        }}
      >
        <Text style={{ color: "white" }}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditUserScreen;

const styles = StyleSheet.create({});
