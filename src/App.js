import React from "react";

import PokemonLists from "./PokemonLists";
import CapturedPokemons from "./CapturedPokemons";
import {PokemonProvider} from "./PokemonContext";

function App() {
  return (
    <div className="App">
      <PokemonProvider>
        <PokemonLists />
        <CapturedPokemons />
      </PokemonProvider>
    </div>
  );
}

export default App;
