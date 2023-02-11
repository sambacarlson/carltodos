import { createSlice } from "@reduxjs/toolkit";
import { UI_CONTROLS } from "../zflow_controls";


const initialState = {...UI_CONTROLS}

const uiControlSlice = createSlice({
  name: 'uiControl',
  initialState: initialState,
  reducers: {
    showAlert:(state, action)=>{
      state.showAlert = action.payload
    },
    addNewTask:(state, action)=>{
      state.addNewTask = action.payload
    },
    showUpdateAlert:(state, action)=>{
      state.showUpdateAlert = action.payload
    },
    currentlySelected:(state, action)=>{
      state.currentlySelected = action.payload
    },
    taskDone:(state, action)=>{
      state.taskDone = action.payload
    }
  }
})

export default uiControlSlice.reducer
export const {showAlert, addNewTask, showUpdateAlert, currentlySelected, taskDone} = uiControlSlice.actions