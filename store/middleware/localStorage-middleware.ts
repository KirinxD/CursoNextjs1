

import { Middleware } from "@reduxjs/toolkit";
import { RootState } from "..";

export const localStorageMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    next(action);

    if (action.type === "pokemons/toggleFavorite") {
      const { pokemon } = store.getState();
      console.log("pokemonoss");
      console.log(pokemon);
      localStorage.setItem("favorites-pokemons", JSON.stringify(pokemon));
    }
  };
