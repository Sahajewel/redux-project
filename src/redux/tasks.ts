

import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { ITask } from "./types/iTask";
import type { RootState } from "./store";


interface InitialState{
    tasks: ITask[]
}

const initialState:InitialState ={
     tasks:[]
}
export type draftTask = Pick<ITask, "title" | "description" | "priority" > &{
  dueDate: string | Date
}
const createTask = (data: draftTask): ITask=>{
  return {
    id:nanoid(), 
    isComplete: false, 
    ...data, 
    dueDate: data.dueDate instanceof Date ? data.dueDate.toISOString() : data.dueDate,
  }
}
const taskSlice = createSlice({
    name:"Task",
    initialState,
    reducers:{
      addTask:(state, action: PayloadAction<ITask>)=>{
      const taskData = createTask(action.payload)
        state.tasks.push(taskData)
      },
      completed:(state, action:PayloadAction<string>)=>{
        state.tasks.forEach((task)=>task.id === action.payload ? task.isComplete = !task.isComplete : task)
      },
      deleteTask : (state, action: PayloadAction<string>)=>{
        state.tasks = state.tasks.filter((task)=>(
          task.id !== action.payload 
        ))
      }
        
    }
});
export const taskSelector = (state: RootState)=>{
    return state.todo.tasks;
}
export const {addTask, completed, deleteTask} = taskSlice.actions
export default taskSlice.reducer;