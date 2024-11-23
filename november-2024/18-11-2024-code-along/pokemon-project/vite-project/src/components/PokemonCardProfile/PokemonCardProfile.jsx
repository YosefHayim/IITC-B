import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./PokemonCardProfile.module.css";
import PokemonImg from "../PokemonImage/PokemonImage.jsx";
import PokemonNameAndId from "../PokemonNameAndId/PokemonNameAndId.jsx";
import getTypeBackground from "../../utils/getBackgroundType.js";

const PokemonCardProfile = ({ pokemonUrl }) => {
  const [pokemon, setPokemon] = useState(null);

  const fetchData = async (pokemonUrl) => {
    try {
      const { data } = await axios.get(pokemonUrl);
      setPokemon(data);
    } catch (error) {
      console.error(`Error occurred while fetching API data`, error);
    }
  };

  useEffect(() => {
    fetchData(pokemonUrl);
  }, []);

  console.log(pokemon);

  return (
    pokemon && (
      <div
        key={pokemon.name}
        className={styles.PokemonCard}
        style={{
          backgroundImage: `url(${getTypeBackground(
            pokemon.types[0]?.type.name ||
              pokemon.types[1]?.type.name ||
              "default"
          )})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <PokemonNameAndId pokemonName={pokemon.name} pokemonId={pokemon.id} />
        <PokemonImg
          pokemonName={pokemon.name}
          pokemonImg={pokemon.sprites.other.home.front_default}
        />
      </div>
    )
  );
};

export default PokemonCardProfile;
