import { Outlet } from "react-router"
import Navbar from "./components/ui/navbar/Navbar"



function App() {
 

  return (
    <div className="px-20">
      
     
     <Navbar></Navbar>
     <Outlet></Outlet>
   
    </div>
  )
}

export default App
