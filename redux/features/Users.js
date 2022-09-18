import { createSlice } from "@reduxjs/toolkit";
import Data from '../Data'
import { userresult } from "../Data";



export const userSlice = createSlice({
  name: "users",
  initialState: {
    value:userresult,
  },
  reducers: {
  
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.value= state.value.filter((user) => user.id !==action.payload.id)
    },
    updateUser: (state, action) => {
      state.value.map((user) =>{
        if(user.id ===action.payload.id){
          user.title = action.payload.title,
          user.body = action.payload.body
        }
      })
    },
  },
});


export const {addUser,deleteUser,updateUser} = userSlice.actions;
export default userSlice.reducer;