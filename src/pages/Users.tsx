import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/hook/hook";
import { cn } from "@/lib/utils";
import { increment } from "@/redux/counterSlice";
import { taskSelector } from "@/redux/tasks";
import { Modal2 } from "@/shadComponent/Modal2";
// import { Modal } from "@/shadComponent/Modal";
export default function Users() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.count);
  const taskSe = useAppSelector(taskSelector);
  console.log(taskSe);
  const handleSelector = () => {
    dispatch(increment());
  };
  return (
    <div>
      This is users
      <Button onClick={handleSelector}>Click</Button>
      <h1>{count}</h1>
      {/* <Modal></Modal> */}
      <Modal2></Modal2>
      {/* <p>{JSON.stringify(taskSe)}</p>
       */}
      <ul>
        {taskSe.map((task) => (
          <li  className={cn(" bg-red-500 m-10 p-10 text-center ")}>
            <div
              className={cn("w-10 h-10 rounded-full text-gray-500 bg-yellow-700", {
                "bg-green-500": task.priority === "low",
                "bg-yellow-500": task.priority === "medium",
                "bg-orange-500": task.priority === "high",
              })}
            >saha</div>
            <p>{task.title}</p>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
