import { Text, View, Image, Button, TouchableOpacity, Platform, Pressable,StyleSheet } from 'react-native';
import React, {useState} from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Switch } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const ToggleSwitch = () => {

  
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => {setIsSwitchOn(!isSwitchOn); console.log('switchOnn')};

  return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;           
};

const Header = () => {
  const navigation = useNavigation();
  const [headerbg, setheaderbg] = useState(ToggleSwitch);
  
  return (
<View className=" py-1 px-4 flex-row justify-between items-center" style={{shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3, 
},
shadowOpacity: 0.27,
shadowRadius: 4.65,

levation: 6,
marginBottom: headerbg ? 25 :5
}} >
  <TouchableOpacity style={styles.login}
  onPress={() => navigation.navigate('AddUser')}
  >
    <Text className="text-white">Ardd User</Text>
  </TouchableOpacity>
<ToggleSwitch/>
    </View>
  )   
}

export default Header
const styles = StyleSheet.create({
  login:{
    backgroundColor:'black',
    paddingHorizontal:15,
    paddingVertical:6,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:3,
    shadowColor: "black",
shadowOffset: {
	width: 0,
	height: 8,
},
shadowOpacity: 0.44,
shadowRadius: 10.32,
elevation: 16,
  }
})
