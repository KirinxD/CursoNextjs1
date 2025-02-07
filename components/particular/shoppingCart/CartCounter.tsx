"use client";
import { useState } from "react";

interface props {
  value?: number;
}
export const CartCounter = ({ value = 0 }: props) => {
  const [contador, setContador] = useState(value);

  return (
    <>
      <h1 className="text-4xl">Contador: {contador}</h1>
      <div className="space-x-2 ">
        <button
          className="bg-slate-600 text-white font-bold rounded-lg py-1 px-4"
          onClick={() => setContador(contador + 1)}
        >
          +
        </button>
        <button
          className="bg-slate-600 text-white font-bold rounded-lg py-1 px-4"
          onClick={() => setContador(contador - 1)}
        >
          -
        </button>
      </div>
    </>
  );
};
