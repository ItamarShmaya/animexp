import "./AnimePage.css";
import {
  getAnimeById,
  getAnimePicturesById,
} from "../../../apis/jikan/jikan_api_requests";
import { useEffect, useState } from "react";
import AnimeHero from "./AnimeHero/AnimeHero";

const AnimePage = ({ match }) => {
  const [anime, setAnime] = useState(null);
  const [pictures, setPictures] = useState([]);
  useEffect(() => {
    const getAnime = async () => {
      const { data } = await getAnimeById(match.params.id);
      const response = await getAnimePicturesById(match.params.id);
      setPictures(response.data);
      setAnime(data);
    };
    getAnime();
  }, []);

  return (
    <div className="anime-page">
      {anime && <AnimeHero anime={anime} pictures={pictures} />}
    </div>
  );
};
export default AnimePage;
