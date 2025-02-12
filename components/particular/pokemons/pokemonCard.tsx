"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SimplePokemon } from "./interfaces/pokemonInterface";
import { toggleFavorite } from "@/store/pokemon/pokemonsSlice";

interface Props{
  pokemon:SimplePokemon;
}

export default function PokemonCard({pokemon}: Props) {
  const { id, name } = pokemon;
  const isFavorite = useAppSelector((state) => state.pokemon.favorite[id] != undefined);
  const dispatch = useAppDispatch();

  const onToggleFavorite=()=>{
    dispatch(toggleFavorite(pokemon));
  }

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-gray-800 border-b">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            height={32}
            width={32}
            alt="Pokemon Image"
            className="h-24 w-24 text-white rounded-full mx-auto"
            priority={false}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {name}
          </p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemon/${name}`}
              prefetch={false}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Ver mas
            </Link>
          </div>
        </div>
        <div className="border-b">
          <div
            onClick={() => {
              onToggleFavorite();
            }}
            className="px-4 py-2 hover:bg-gray-100 flex cursor-pointer"
          >
            <Heart
              className={isFavorite ? "text-rose-600 " : "text-slate-600"}
              height={25}
              width={25}
            />

            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {isFavorite ? "Favorito" : "No favorito"}
              </p>
              <p className="text-xs text-gray-500">
                Click para cambiar a favorito
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
