import { createSlice } from '@reduxjs/toolkit'
import {noteList} from '../assets/data'

const initialState = {
  tasks: noteList
}

export const taskSLice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action) => {
       state.tasks.push(action.payload);
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = {...state.tasks[index], ...action.payload};
      }
      
    },
    deleteTask: (state, action) => {
       state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
  },
})

export const { addTask, updateTask, deleteTask } = taskSLice.actions

export default taskSLice.reducer