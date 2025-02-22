"use client"
import { Provider } from "react-redux";
import { store } from "@/store";
import { useEffect } from "react";
import { setFavorites } from "./pokemon/pokemonsSlice";

interface Props{
    children: React.ReactNode;
}

export default function Providers({children}: Props) {
 useEffect(() => {
    const favorites=JSON.parse(localStorage.getItem("favorites-pokemons") || "{}");
    store.dispatch(setFavorites(favorites));
 }, []);

  return (
    <Provider store={store}>{children}</Provider>
  )
}
