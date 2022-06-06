import "./CardsList.css";
import Card from "../Card/Card";
import { NavLink } from "react-router-dom";
import ImageSlide from "../ImageSlide/ImageSlide";

const CardsList = ({ list, type, sliderSettings, cardHeight, cardWidth }) => {
  const renderCards = () => {
    return list.map((anime, i) => {
      return (
        <NavLink
          key={anime.mal_id || anime.entry.mal_id}
          to={`/${type}/${anime.mal_id || anime.entry.mal_id}`}
        >
          <Card
            anime={anime.entry ? anime.entry : anime}
            index={i}
            isReco={anime.entry ? true : false}
            cardHeight={cardHeight}
            cardWidth={cardWidth}
          />
          ;
        </NavLink>
      );
    });
  };

  return (
    <div className="card-list-container">
      <ImageSlide settings={sliderSettings}>{renderCards()}</ImageSlide>
    </div>
  );
};

export default CardsList;
