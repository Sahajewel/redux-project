import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/hook/hook";
import { increment } from "@/redux/counterSlice";
import { taskSelector } from "@/redux/tasks";
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
      {/* <p>{JSON.stringify(taskSe)}</p>
       */}
      {taskSe.map((task) => (
        <ul>
          <div className="bg-red-500 m-10 p-10 text-center">
            <li>{task.title}</li>
            <li>{task.description}</li>
          </div>
        </ul>
      ))}
    </div>
  );
}
