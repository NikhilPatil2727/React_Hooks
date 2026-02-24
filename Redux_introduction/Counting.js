import { useDispatch, useSelector } from "react-redux"
import { Increment, Decrement, Reset } from "./Slicer1";


export default function Counting(){
     
    const count = useSelector((state)=> state.slice1.count);
    const dispatch = useDispatch();

    console.log(Increment());
    console.log(Decrement());

    return(
        <>
        <h1>Counter is {count}</h1>
        <button onClick={()=>dispatch(Increment())}>Increment</button>
        <button onClick={()=>dispatch(Decrement())}>Decrement</button>
        <button onClick={()=>dispatch(Reset())}>Reset</button>
        </>
    )
}


//in this why we dispatch so store ko pata hona chaiye ki kis 
//slice ka part hai so 
//thats why we export export const {Increment, Decrement, Reset} = reactslicer.actions