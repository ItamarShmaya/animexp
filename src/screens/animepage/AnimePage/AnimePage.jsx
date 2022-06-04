import "./AnimePage.css";
import {
  getAnimeById,
  getAnimePicturesById,
  getAnimeCharactersById,
} from "../../../apis/jikan/jikan_api_requests";
import { useEffect, useState } from "react";
import AnimeHero from "./AnimeHero/AnimeHero";
import Spinner from "../../../components/Spinner/Spinner";
import AnimeContent from "./AnimeContent/AnimeContent";

const AnimePage = ({
  match: {
    params: { id },
  },
}) => {
  const [anime, setAnime] = useState(null);
  const [pictures, setPictures] = useState(null);
  const [characters, setCharacters] = useState(null);

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const anime = await getAnimeById(id);
        setAnime(anime.data);
        await sleep(500);
        const picturesResponse = await getAnimePicturesById(id);
        setPictures(picturesResponse.data);
        await sleep(500);
        const charactersResponse = await getAnimeCharactersById(id);
        setCharacters(charactersResponse.data);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [id]);

  return (
    <div className="anime-page">
      {anime && pictures && characters ? (
        <>
          <AnimeHero anime={anime} pictures={pictures} />
          <AnimeContent anime={anime} characters={characters} />
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};
export default AnimePage;
