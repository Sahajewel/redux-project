import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/hook/hook";
import { increment } from "@/redux/counterSlice";
export default function Users() {
    const dispatch = useAppDispatch();
   const count = useAppSelector((state) => state.counter.count);

    const handleSelector = ()=>{
        dispatch(increment())
    }
  return (
    <div>
      This is users
      <Button onClick={handleSelector}>Click</Button>
      <h1>{count}</h1>
    </div>
  )
}
