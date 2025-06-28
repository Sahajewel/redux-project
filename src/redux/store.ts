
import {configureStore} from "@reduxjs/toolkit";
import countReducer from "./counterSlice";
import taskReducer from "./tasks";
export const store = configureStore({
    reducer:{
        counter: countReducer,
        todo: taskReducer
    }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;