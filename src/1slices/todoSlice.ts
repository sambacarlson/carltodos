import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  id: '',
  category: '',
  feedback: '',
  task: 'new task',
  status: ''
}

const todoSlice = createSlice({
  name: 'todoControl',
  initialState: initialState,
  reducers: {
    createTodo: (state, action)=>{
      state.task = action.payload
    },
    updateTodo: (state, action)=>{
      state.id = action.payload
    },
    deleteTodo: (state, action)=>{
      state.id = action.payload
    }
  }
})

export default todoSlice.reducer
export const {createTodo, updateTodo, deleteTodo} = todoSlice.actions