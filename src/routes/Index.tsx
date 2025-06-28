import  App from "@/App";
import Task from "@/pages/Task";
import Users from "@/pages/Users";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children:[
             {
               index: true,
                element: <Users></Users>
            },
             {
                path: "users",
                element: <Users></Users>
            },
            {
                path: "task",
                element: <Task></Task>
            },
           
        ]
    }
])