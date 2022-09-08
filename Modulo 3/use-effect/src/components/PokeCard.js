import React, { useState, useEffect } from "react";
import axios from "axios";

const PokeCard = (props) => {
  const [atualPokemon, setAtualPokemon] = useState({});

  useEffect(() => {
    pegaPokemon(props.pokemon);
  }, [props.pokemon]);

  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((response) => {
        setAtualPokemon(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <React.fragment>
      <p>{atualPokemon.name}</p>
      <p>{atualPokemon.weight} Kg</p>
      {atualPokemon.types && <p>{atualPokemon.types[0].type.name}</p>}
      {atualPokemon.sprites && (
        <img
          src={atualPokemon.sprites.front_default}
          alt={atualPokemon.name}
        />
      )}
    </React.fragment>
  );
};

export default PokeCard;
