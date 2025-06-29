import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useAppDispatch, useAppSelector } from "@/hook/hook";
import { cn } from "@/lib/utils";
import { increment } from "@/redux/counterSlice";
import { completed, deleteTask, taskSelector } from "@/redux/tasks";
import { Modal2 } from "@/shadComponent/Modal2";
import { Trash2 } from "lucide-react";
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
          <li className={cn(" bg-red-900 m-10 p-10 text-center flex justify-between")}>
            <div
              className={cn(
                "w-10 h-10 rounded-full text-gray-500 bg-yellow-700",
                {
                  "bg-green-500": task.priority === "low",
                  "bg-yellow-500": task.priority === "medium",
                  "bg-orange-500": task.priority === "high",
                }
              )}
            >
              saha
            </div>

            <div className="mr-10">
              <p>
                <span className="text-emerald-500">Id :</span> {task.id}
              </p>
              <p
                className={cn(
                  { "line-through": task.isComplete },
                  "text-orange-400"
                )}
              >
                {/* <p className={`text-4xl ${task.isComplete? "line-through" : ""}`}> */}
                <span className="text-emerald-500">Title :</span> {task.title}
              </p>
              <p>
                <span className="text-emerald-500">Description :</span> :
                {task.description}
              </p>
              <p>{task.dueDate}</p>
              <p>
                <span className="text-emerald-500">Priority:</span>{" "}
                {task.priority}
              </p>
              <p>
                <span className="text-emerald-500">Iscompleted:</span>{" "}
                {task.isComplete}
              </p>
            </div>

            <div className="flex justify-between items-center">
              <Checkbox className="mr-4"
                checked={task.isComplete}
                onClick={() => dispatch(completed(task.id))}
              ></Checkbox>
              <Trash2 onClick={() => dispatch(deleteTask(task.id))}></Trash2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
