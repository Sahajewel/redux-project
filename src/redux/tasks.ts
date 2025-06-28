import { createSlice } from "@reduxjs/toolkit";
import type { ITask } from "./types/iTask";
import type { RootState } from "./store";
interface InitialState{
    tasks: ITask[]
}

const initialState:InitialState ={
     tasks:[
    {
        id:"gfhrtwsnmchfg",
        title: "Todo app",
        description: "I am creating a todo app",
        dueDate: "2025-11",
        isComplete:false,
        priority: "High"
    },
    {
        id:"gfhrtwsnffmchfg",
        title: "Food app",
        description: "I am creating a food app",
        dueDate: "2025-10",
        isComplete:false,
        priority: "Low"
    },
    {
        id:"gfhrtwsnffmctthfg",
        title: "Food app",
        description: "I am creating a food app",
        dueDate: "2025-10",
        isComplete:false,
        priority: "Medium"
    }
]
}
const taskSlice = createSlice({
    name:"Task",
    initialState,
    reducers:{}
});
export const taskSelector = (state: RootState)=>{
    return state.todo.tasks
}
export default taskSlice.reducer;