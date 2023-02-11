import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../1slices/uiControlSlice";
import todoReducer from "../1slices/todoSlice";


const store = configureStore({
  reducer:{
    uiControl: uiReducer,
    todoControl: todoReducer
  }
})

export default store