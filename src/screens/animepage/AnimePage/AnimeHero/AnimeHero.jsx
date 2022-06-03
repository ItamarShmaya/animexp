import { useEffect, useState } from "react";
import "./AnimeHero.css";

const AnimeHero = ({ anime, pictures }) => {
  const [bannerBg, setBannerBg] = useState(null);
  const navbar = document.querySelector(".navbar");
  const {
    title,
    synopsis,
    status,
    type,
    year,
    episodes,
    genres,
    images,
    popularity,
    score,
    rank,
    rating,
    source,
    studios,
    themes,
  } = anime;

  useEffect(() => {
    setBannerPicture();
  }, []);

  const setBannerPicture = () => {
    for (let i = 0; i < pictures.length; i++) {
      if (pictures[i].jpg.image_url !== images.jpg.image_url) {
        setBannerBg(pictures[i].jpg.image_url);
        break;
      }
    }
  };

  return (
    <div
      className="anime-hero"
      style={{ height: `calc(100vh - ${navbar.clientHeight}px)` }}
    >
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
        </div>
        <div className="anime-info">
          <div className="anime-stats">
            <div className="anime-hero-score">
              Score: {!score ? "N/A" : score}
            </div>
            <div className="anime-hero-rank">Rank: #{!rank ? "N/A" : rank}</div>
            <div className="anime-hero-popularity">
              Popularity: #{!popularity ? "N/A" : popularity}
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
