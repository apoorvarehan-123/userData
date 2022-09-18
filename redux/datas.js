import axios from 'axios';

 export const  makeGetRequests = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(
      (response) => {
           return response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  