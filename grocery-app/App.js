import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';

import {useTailwind} from 'tailwind-rn';



export default function App() {
  const tailwind = useTailwind();
  return (
    <TailwindProvider utilities={utilities}>
	 <Text style={tailwind('text-blue-600')}>Hello world</Text>
	</TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
