import { configureStore } from '@reduxjs/toolkit'
import userSlice from './features/Users'


export default store = configureStore({
    reducer:{
       users:userSlice,
    }
  })
  