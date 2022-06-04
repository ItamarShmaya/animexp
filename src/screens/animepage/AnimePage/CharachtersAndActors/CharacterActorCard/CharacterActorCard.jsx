import "./CharacterActorCard.css";

const CharacterActorCard = ({ char, role, voiceActor }) => {
  const { mal_id, images, name } = char;
  const { language, person } = voiceActor;

  return (
    <div className="character-actor-card">
      <div className="character block">
        <img alt={mal_id} src={images.jpg.image_url} />
        <div className="some-info">
          <span className="name">{name}</span>
          <span className="role">{role}</span>
        </div>
      </div>
      <div className="actor block">
        <div className="some-info">
          <span className="name">{person.name}</span>
          <span className="language">{language}</span>
        </div>
        <img alt={person.mal_id} src={person.images.jpg.image_url} />
      </div>
    </div>
  );
};
export default CharacterActorCard;
