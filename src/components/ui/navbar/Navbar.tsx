import { ModeToggle } from "@/provider/ModeToggle";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className="flex justify-between">
      <h1 className="mr-10">This is Navbar</h1>
     <div>
       <Link to="/task" className="mr-10">Task</Link>
      <Link to="/users">Users</Link>
     </div>
      <ModeToggle></ModeToggle>
    </div>
  )
}
