import {createSlice} from "@reduxjs/toolkit";

 const countSlice = createSlice({
    name:"Counter",
    initialState: {
        count: 0
    },
    reducers:{
        increment:(state)=>{
            state.count += 1
        }
    }
});
export const {increment} = countSlice.actions
export default countSlice.reducer;