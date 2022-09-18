import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React,{useState,useEffect} from "react";
import { deleteUser } from "../redux/features/Users";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";



const UserData = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const userList = useSelector((state) => state.users.value);
const [loading, setLoading] = useState(true);

useEffect(() => {
  setTimeout(() => {
    setLoading(false)
  }, 1000);
}, [setLoading])



const [skeltenListData, setSkeltenListData] = useState([1,2,3,4,5,6,7])

  return (
    <>
  {loading ?(
    skeltenListData.map(item =>(
      <View className="bg-white p-2," style={{ marginBottom: 10 }}>
      <View className="mt-2 px-2 py-3 bg-gray-100 w-40 border-r-4 ml-5 my-2 ">
     
      </View>
      <View className="mt-2 px-2 py-3 bg-gray-100 w-80 border-l-4 ml-5 my-2">
     
     </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("EditUserScreen",{item})}
          className="bg-gray-200 py-4"
          style={styles.button}
        >
         
        </TouchableOpacity>
        <TouchableOpacity
        
        className="bg-gray-400 py-4" style={styles.button}>
  
        </TouchableOpacity>
      </View>
    </View>
    ))

  ):(
    <FlatList
    data={userList}
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View className="bg-white p-2," style={{ marginBottom: 10 }}>
          <View className="mt-2 px-2">
            <Text style={{ fontSize: 14, fontWeight: "bold", marginBottom: 5 }}>
              {item.title}
            </Text>
            <Text style={{ fontSize: 12 }}>{item.body}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("EditUserScreen",{item})}
              className="bg-gray-200"
              style={styles.button}
            >
              <Text>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() =>{dispatch(deleteUser({id:item.id}))}}
            className="bg-red-400" style={styles.button}>
              <Text style={{ color: "white" }}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  )

  }
  
     </>
  );
};

export default UserData;

const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",

    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
