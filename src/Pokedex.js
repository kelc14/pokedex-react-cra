import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

const Pokedex = ({ pokemon }) => {
  return (
    <div className="Pokedex">
      {/* key (id), id, name, type, base_experience */}
      {pokemon.map((p) => (
        <Pokecard
          key={p.id}
          id={p.id}
          name={p.name}
          type={p.type}
          EXP={p.base_experience}
        />
      ))}
    </div>
  );
};

export default Pokedex;
