import "./AnimeContent.css";
import AnimeInformation from "../AnimeInformation/AnimeInformation";
import CharactersAndActors from "../CharachtersAndActors/CharactersAndActors";

const AnimeContent = ({ anime, characters }) => {
  return (
    <div className="main-content">
      <AnimeInformation anime={anime} />
      <div className="main-content-right-side">
        <CharactersAndActors characters={characters} />
      </div>
    </div>
  );
};
export default AnimeContent;
