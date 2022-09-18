import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';


var userresult;

const Data = () => {
	const [UserResults, setUserResults] = useState();
	const dispatch = useDispatch(); 
	
	useEffect(() => {
	  function makeGetRequest() {
		  axios.get("https://jsonplaceholder.typicode.com/posts").then(
			(response) => {
				 setUserResults(response.data);
				 useDispatch(response.data);
			},
			(error) => {
			  console.log(error);
			}
		  );
		}
		makeGetRequest();
	}, [])
	
	if(UserResults){
		userresult=UserResults
	}

  return (
	<View></View>
  )
}

export default Data;
export {userresult};

const styles = StyleSheet.create({})