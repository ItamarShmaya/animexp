import "./CharactersAndActors.css";
import CharacterActorCard from "./CharacterActorCard/CharacterActorCard";

const CharactersAndActors = ({ characters }) => {
  const renderCards = () => {
    const charactersArray = [];
    let i = 0;
    while (charactersArray.length < 10) {
      // console.log(characters);
      const japVoiceActor = characters[i].voice_actors.find(
        (actor) => actor.language.toLowerCase() === "japanese"
      );
      if (japVoiceActor) {
        charactersArray.push(
          <CharacterActorCard
            key={characters[i].character.mal_id}
            char={characters[i].character}
            role={characters[i].role}
            voiceActor={japVoiceActor}
          />
        );
      }
      i++;
    }
    return charactersArray;
  };
  return (
    <>
      <h1 className="characters-header">Characters & Voice Actors</h1>
      <div className="characters-container">{renderCards()}</div>
    </>
  );
};
export default CharactersAndActors;
