import "./LandingPage.css";
import {
  getTopAnime,
  getTopManga,
  getTopCharacters,
} from "../../apis/jikan/jikan_api_requests";
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import CardsList from "../../components/CardsList/CardsList";
import { landingPageSliderSettings } from "../../components/ImageSlide/sliderSettings";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const LandingPage = () => {
  const [topAnime, setTopAnime] = useState([]);
  const [topManga, setTopManga] = useState([]);
  const [topCharacters, setTopCharacters] = useState([]);
  const [getLocalStorage, setLocalStorage] = useLocalStorage();

  useEffect(() => {
    let id;
    const fetchTopAnime = async () => {
      id = setTimeout(async () => {
        const { data: anime } = await getTopAnime();
        setTopAnime(anime);
        setLocalStorage("topAnime", anime);
      }, 1000);
    };

    const topAnime = getLocalStorage("topAnime");
    !topAnime ? fetchTopAnime() : setTopAnime(topAnime);

    return () => {
      if (id !== undefined) {
        clearTimeout(id);
      }
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let id;
    const fetchTopManga = async () => {
      id = setTimeout(async () => {
        const { data: manga } = await getTopManga();
        setTopManga(manga);
        setLocalStorage("topManga", manga);
      }, 1000);
    };

    const topManga = getLocalStorage("topManga");
    !topManga ? fetchTopManga() : setTopManga(topManga);

    return () => {
      if (id !== undefined) {
        clearTimeout(id);
      }
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let id;
    const fetchTopCharacters = async () => {
      id = setTimeout(async () => {
        const { data: top25Characters } = await getTopCharacters();
        setTopCharacters(top25Characters);
        setLocalStorage("topCharacters", top25Characters);
      }, 1000);
    };

    const topCharacters = getLocalStorage("topCharacters");
    !topCharacters ? fetchTopCharacters() : setTopCharacters(topAnime);

    return () => {
      if (id !== undefined) {
        clearTimeout(id);
      }
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="hero">
        <SearchBar />
      </div>
      <div className="lists-container">
        <section className="landing-page-section">
          <h1>Top Anime</h1>
          <CardsList
            list={topAnime}
            type="anime"
            sliderSettings={landingPageSliderSettings}
          />
        </section>
        <section className="landing-page-section">
          <h1>Top Manga</h1>
          <CardsList
            list={topManga}
            type="manga"
            sliderSettings={landingPageSliderSettings}
          />
        </section>
        <section className="landing-page-section">
          <h1>Favorite Characters</h1>
          <CardsList
            list={topCharacters}
            type="characters"
            sliderSettings={landingPageSliderSettings}
          />
        </section>
      </div>
    </>
  );
};
export default LandingPage;
