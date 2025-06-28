

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ITask } from "./types/iTask";
import type { RootState } from "./store";
import { v4 as uuidv4 } from 'uuid';

interface InitialState{
    tasks: ITask[]
}

const initialState:InitialState ={
     tasks:[]
}
const taskSlice = createSlice({
    name:"Task",
    initialState,
    reducers:{
      addTask:(state, action: PayloadAction<ITask>)=>{
        const id = uuidv4();
        const taskData = {
            ...action.payload,
            id,
            isComplete:false
        }
        state.tasks.push(taskData)
      }
        
    }
});
export const taskSelector = (state: RootState)=>{
    return state.todo.tasks;
}
export const {addTask} = taskSlice.actions
export default taskSlice.reducer;