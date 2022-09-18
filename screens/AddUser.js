import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { addUser } from "../redux/features/Users";
import { useDispatch, useSelector } from "react-redux";
8;
const AddUser = ({ navigation }) => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [arrayLength, setarrayLength] = useState(userList.length / 10);

  function number_test(n) {
    var result = Number.isInteger(n);

    if (!result) {
      let decimal = n.toFixed(1);
      let string = String(decimal);
      let myarr = string.split(".")[1];
      console.log(Number(myarr) + 1);
      return Number(myarr) + 1;
    } else {
      console.log(n + 1);
      return n + 1;
    }
  }

  const adduser = () => {
    // let UserData = {};
    // UserData.userid = number_test(arrayLength);
    if (title && description) {
      // UserData.id = userList[userList.length -1].id +1;
      // UserData.body = description;
      // UserData.title = title;
      dispatch(
        addUser({
          userid: number_test(arrayLength),
          id: userList[userList.length - 1].id + 1,
          title,
          body: description,
        })
      );
    }
   navigation.goBack()
  };

  return (
    <View>
      <View
        style={{
          paddingHorizontal: 12,
          paddingVertical: 10,
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
      <KeyboardAvoidingView>
        <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
          <View
            style={{
              marginVertical: 20,
              backgroundColor: "#D1D1D1",
              paddingVertical: 10,
              borderRadius: 4,
            }}
          >
            <Text style={{ fontSize: 30, fontWeight: "400", marginLeft: 10 }}>
              ADD USER
            </Text>
          </View>

          <View style={{ paddingVertical: 15, paddingHorizontal: 10 }}>
            <Text
              style={{ fontSize: 16, marginBottom: 10, fontWeight: "bold" }}
            >
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
              placeholder="Description"
              placeholderTextColor="pink"
              value={title}
              onChangeText={(text) => setTitle(text)}
            />
          </View>
          <View style={{ paddingVertical: 15, paddingHorizontal: 10 }}>
            <Text
              style={{ fontSize: 16, marginBottom: 10, fontWeight: "bold" }}
            >
              Description
            </Text>
            <TextInput
              value={description}
              eh
              style={{
                borderWidth: 0.6,
                padding: 10,
                borderRadius: 3,
                fontWeight: "600",
                fontSize: 14,
              }}
              placeholder="Description"
              placeholderTextColor="pink"
              onChangeText={(text) => setDescription(text)}
            />
          </View>
          <TouchableOpacity
            onPress={adduser}
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
            <Text style={{ color: "white" }}>Done</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default AddUser;

const styles = StyleSheet.create({});
