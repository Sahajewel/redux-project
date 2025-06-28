import { createSlice } from "@reduxjs/toolkit";
import type { ITask } from "./types/iTask";

const initialState:ITask[] = [
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
    }
]
const taskSlice = createSlice({
    name:"Task",
    initialState,
    reducers:{}
});
export default taskSlice.reducer;