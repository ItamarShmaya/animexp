import "./Card.css";

const Card = ({ anime, index }) => {
  const { title, images, rank, name } = anime;
  return (
    <div
      className="card-container"
      style={{
        backgroundImage: `url(${images.jpg.image_url})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="card-content-wrapper">
        <div className="card-top">
          <div className="card-rank">#{rank || index + 1}</div>
        </div>
        <div className="card-bottom">
          <h2>{title || name}</h2>
        </div>
      </div>
    </div>
  );
};
export default Card;
