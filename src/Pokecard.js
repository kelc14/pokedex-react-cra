import React from "react";
import "./Pokecard.css";

const Pokecard = ({ id, name, type, EXP }) => {
  return (
    <div className="Pokecard">
      <h2 className="Pokecard-name">{name}</h2>
      <img
        className="Pokecard-image"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt=""
      />
      <p className="Pokecard-type">Type: {type}</p>
      <p className="Pokecard-exp">EXP: {EXP}</p>
    </div>
  );
};

export default Pokecard;
