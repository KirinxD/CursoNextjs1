"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounterState, subStract } from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface props {
  value?: number;
}

interface CounterResponse{
  count:number;
}
const getApiCounter=async():Promise<CounterResponse>=>{
  const data=await fetch('/api/services/counter').then(res=>res.json());
  return(data);
}

export const CartCounter = ({ value = 0 }: props) => {
  const count=useAppSelector(state=>state.counter.count)
  const dispatch = useAppDispatch();

 useEffect(() => {
  //dispatch(initCounterState(value));
  getApiCounter().then(({count})=>dispatch(initCounterState(count)))
 }, [dispatch]);
 
  return (
    <>
      <h1 className="text-4xl">Contador: {count}</h1>
      <div className="space-x-2 ">
        <button
          className="bg-slate-600 text-white font-bold rounded-lg py-1 px-4"
          onClick={() => dispatch(addOne())}  
        >
          +
        </button>
        <button
          className="bg-slate-600 text-white font-bold rounded-lg py-1 px-4"
          onClick={() => dispatch(subStract())}
        >
          -
        </button>
      </div>
    </>
  );
};
