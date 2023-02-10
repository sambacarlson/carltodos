import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../1slices/uiControlSlice";


const store = configureStore({
  reducer:{
    uiControl: uiReducer
  }
})

export default store