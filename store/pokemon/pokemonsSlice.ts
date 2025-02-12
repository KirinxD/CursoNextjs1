import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/components";

interface PokemonFavoriteState {
  favorite:{[key: string]: SimplePokemon};
}
/*
const getInicitialState = ():PokemonFavoriteState => {
  const favorites = JSON.parse(localStorage.getItem("favorites-pokemons") || "{}");
  return favorites;
} */

const initialState:PokemonFavoriteState = {
  favorite:{},
  //...getInicitialState()
};

const pokemonsReducer = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavorites:(state,action: PayloadAction<{[key:string]:SimplePokemon}>) => {
      state.favorite = action.payload;
    },

    toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
      //no es recomendable disparar efectos secundarios aca
      const pokemon = action.payload;
      const { id } = pokemon;
      if (!!state.favorite[id]) { //existe
        delete state.favorite[id];
        return;
      }else {
        state.favorite[id] = pokemon;
      }
      localStorage.setItem("favorites-pokemons", JSON.stringify(state.favorite));
    },
  },
});

export const {toggleFavorite,setFavorites} = pokemonsReducer.actions;

export default pokemonsReducer.reducer;
