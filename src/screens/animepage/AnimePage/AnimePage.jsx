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

const AnimePage = ({ match }) => {
  const [anime, setAnime] = useState(null);
  const [pictures, setPictures] = useState(null);
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    const getAnime = async () => {
      const { params } = match;
      const anime = await getAnimeById(params.id);
      setAnime(anime.data);
      const picturesResponse = await getAnimePicturesById(params.id);
      setPictures(picturesResponse.data);
      const charactersResponse = await getAnimeCharactersById(params.id);
      setCharacters(charactersResponse.data);
      // try {
      //   const anime = await getAnimeById(params.id);
      //   setAnime(anime.data);
      // } catch (e) {
      //   console.log(e);
      // }
      // try {
      //   const picturesResponse = await getAnimePicturesById(params.id);
      //   setPictures(picturesResponse.data);
      // } catch (e) {
      //   console.log(e);
      // }
      // try {
      //   const charactersResponse = await getAnimeCharactersById(params.id);
      //   setCharacters(charactersResponse.data);
      // } catch (e) {
      //   console.log(e);
      // }
    };
    getAnime();
  }, []);

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
