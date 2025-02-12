
import { getPokemonResponse, SimplePokemon } from "@/components";
import PokemonCard from "@/components/particular/pokemons/pokemonCard";


const getPokemons = async (limit = 20,offset = 0): Promise<SimplePokemon[]> => {
  const dataResult: getPokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const data = dataResult.results.map(pokemon => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name
  }))

  return data;
};

export default async function PokemonPage() {
  const pokemons = await getPokemons(151, 0);
  return (
    <>
      <div className="text-2xl">Choose your Pokemon</div>
      <div className="flex flex-wrap gap-10">
        {pokemons.map((pokemon,index) => (
         <PokemonCard key={index} pokemon={pokemon}/>
        ))}
      </div>
    </>
  );
}
