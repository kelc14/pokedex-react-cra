import React from "react";
import list from "./pokemonList";

import Pokedex from "./Pokedex.js";

// import "./App.css";

function App() {
  return (
    <div className="App">
      <Pokedex pokemon={list} />
    </div>
  );
}

export default App;
