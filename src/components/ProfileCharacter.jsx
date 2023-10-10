import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CardRick from "./CardRick";

const ProfileCharacter = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  const url = `https://rickandmortyapi.com/api/character/${id}`;
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCharacter(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);
  return (
    <>
      <div className="mt-5 d-flex justify-content-center">
        {character ? (
          <CardRick
            img={character.image ? character.image : null}
            name={character.name ? character.name : null}
            profile={{
              city: character.location ? character.location.name : null,
              status: character.status ? character.status : null,
              species: character.species ? character.species : null,
            }}
          />
        ) : null}
      </div>
    </>
  );
};

export default ProfileCharacter;
