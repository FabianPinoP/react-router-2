import { useEffect, useState } from "react";
import axios from "axios";
import CardRick from "./CardRick";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const url = "https://rickandmortyapi.com/api/character";
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCharacters(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
    <div className="container characters-grid mt-5 gap-2">

      {characters.map((character) => {
        return (
          <CardRick
            key={character.id}
            img={character.image}
            name={character.name}
            id={character.id}
            className="character-card"
          />
        );
      })}
    </div>
    </>
  );
};

export default Characters;
