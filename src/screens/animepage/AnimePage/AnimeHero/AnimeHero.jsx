import { useEffect, useState } from "react";
import "./AnimeHero.css";
import AddToListButton from "../../../../components/AddToListButton/AddToListButton";
import { isAnimeInList } from "../../../../apis/mockapi/mockapi_actions";
import {
  useLoggedInUser,
  useIsUserLoggedIn,
} from "../../../../context/context_custom_hooks";

const AnimeHero = ({ anime, pictures }) => {
  const [bannerBg, setBannerBg] = useState(null);
  const { title, synopsis, images, popularity, score, rank } = anime;
  const { loggedInUser } = useLoggedInUser();
  const { isUserLoggedIn } = useIsUserLoggedIn();

  useEffect(() => {
    setBannerPicture();
  });

  const setBannerPicture = () => {
    for (let i = 0; i < pictures.length; i++) {
      if (pictures[i].jpg.image_url !== images.jpg.image_url) {
        setBannerBg(pictures[i].jpg.image_url);
        break;
      }
    }
  };

  const renderAddToButton = () => {
    if (isUserLoggedIn) {
      if (isAnimeInList(loggedInUser, anime.mal_id)) {
        return <div>Watching</div>;
      }
    }
    return <AddToListButton anime={anime} />;
  };

  return (
    <div className="anime-hero">
      <div
        className="banner"
        style={{
          backgroundImage: `url(${bannerBg || images.jpg.image_url})`,
          backgroundPositionX: "center",
          backgroundPositionY: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="about-anime">
        <div className="poster">
          <img alt={title} src={images.jpg.image_url} />
          <div className="add-to-list-container">{renderAddToButton()}</div>
        </div>
        <div className="anime-info">
          <div className="anime-stats">
            <div className="anime-hero-score">
              Score: <br />
              <i className="fa-solid fa-star"></i> {!score ? "N/A" : score}
            </div>
            <div className="anime-hero-rank">
              Rank: <br /> <i className="fa-solid fa-trophy"></i> #
              {!rank ? "N/A" : rank}
            </div>
            <div className="anime-hero-popularity">
              Popularity: <br /> <i className="fa-solid fa-heart"></i> #
              {!popularity ? "N/A" : popularity}
            </div>
          </div>
          <div className="title-synopsis">
            <div className="anime-hero-title">{title}</div>
            <div className="anime-hero-synopsis">
              <p>Synopsis</p>
              {synopsis}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AnimeHero;
