"use client";

import { useAppSelector } from "@/store";
import PokemonCard from "../pokemons/pokemonCard";
import { SimplePokemon } from "../pokemons/interfaces/pokemonInterface";
import { useEffect, useState } from "react";

export default function FavoriteGrid() {
  const [pokemones, setPokemon] = useState<{
    favorite: { [key: string]: SimplePokemon };
    }>();
  const pokemon = useAppSelector((state) => state.pokemon);

  useEffect(() => {
     console.log("gola")
  }, []);

  if (!pokemon || Object.keys(pokemon).length === 0) {
    return <p>No hay favoritos</p>;
  }
  
  return (
    <>
      {Object.keys(pokemon.favorite).map((key) => {
        const poke: SimplePokemon = pokemon.favorite[key];
        return <PokemonCard key={key} pokemon={poke} />;
      })}
    </>
  );
}
