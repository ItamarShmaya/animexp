import "./AnimePage.css";
import {
  getAnimeById,
  getAnimePicturesById,
  getAnimeCharactersById,
  getAnimeRecommendationsById,
  // getAnimeReviewsById,
} from "../../../apis/jikan/jikan_api_requests";
import { useEffect, useState } from "react";
import AnimeHero from "./AnimeHero/AnimeHero";
import Spinner from "../../../components/Spinner/Spinner";
import AnimeContent from "./AnimeContent/AnimeContent";
import AnimeRecommendations from "./AnimeRecommendations/AnimeRecommendations";
import Trailer from "./Trailer/Trailer";

const AnimePage = ({
  match: {
    params: { id },
  },
}) => {
  const [anime, setAnime] = useState({});
  const [pictures, setPictures] = useState({});
  const [characters, setCharacters] = useState({});
  const [recommendations, setRecommendations] = useState({});

  useEffect(() => {
    let timeOutId;
    const fetchAnimeData = async () => {
      timeOutId = setTimeout(async () => {
        const animeResponse = await getAnimeById(id);
        setAnime(animeResponse.data);
      }, 1000);
    };
    fetchAnimeData();
    return () => {
      if (timeOutId) {
        clearTimeout(timeOutId);
      }
    };
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    let timeOutId;
    const fetchAnimeCharacters = async () => {
      timeOutId = setTimeout(async () => {
        const charactersResponse = await getAnimeCharactersById(id);
        setCharacters(charactersResponse.data);
      }, 1500);
    };
    fetchAnimeCharacters();
    return () => {
      if (timeOutId) {
        clearTimeout(timeOutId);
      }
    };
    // eslint-disable-next-line
  }, [id]);
  useEffect(() => {
    let timeOutId;
    const fetchAnimeRecommendations = async () => {
      timeOutId = setTimeout(async () => {
        const recommendationResponse = await getAnimeRecommendationsById(id);
        recommendationResponse &&
          setRecommendations(recommendationResponse.data);
      }, 2000);
    };
    fetchAnimeRecommendations();
    return () => {
      if (timeOutId) {
        clearTimeout(timeOutId);
      }
    };
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    let timeOutId;
    const fetchAnimePictures = async () => {
      timeOutId = setTimeout(async () => {
        const picturesResponse = await getAnimePicturesById(id);
        setPictures(picturesResponse.data);
      }, 2500);
    };
    fetchAnimePictures();
    return () => {
      if (timeOutId) {
        clearTimeout(timeOutId);
      }
    };
    // eslint-disable-next-line
  }, [id]);

  return (
    <div className="anime-page">
      {Object.keys(anime).length > 0 &&
      Object.keys(pictures).length > 0 &&
      Object.keys(characters).length > 0 ? (
        <>
          <AnimeHero anime={anime} pictures={pictures} animeId={id} />
          <AnimeContent anime={anime} characters={characters} />
          {Object.keys(recommendations).length > 0 && (
            <AnimeRecommendations recommendations={recommendations} />
          )}
          {anime.trailer.embed_url && <Trailer trailer={anime.trailer} />}
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};
export default AnimePage;
