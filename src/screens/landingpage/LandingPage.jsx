import "./LandingPage.css";
import {
  getTopAnime,
  getTopManga,
  getTopCharacters,
} from "../../apis/jikan/jikan_api_requests";
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import CardsList from "../../components/CardsList/CardsList";
import Spinner from "../../components/Spinner/Spinner";

const LandingPage = () => {
  const [topAnime, setTopAnime] = useState(null);
  const [topManga, setTopManga] = useState(null);
  const [topCharacters, setTopCharacters] = useState(null);

  useEffect(() => {
    const fetchTopAnime = async () => {
      const { data } = await getTopAnime();
      setTopAnime(data);
      window.localStorage.setItem("topAnime", JSON.stringify(data));
    };
    const fetchTopManga = async () => {
      const { data } = await getTopManga();
      setTopManga(data);
      window.localStorage.setItem("topManga", JSON.stringify(data));
    };
    const fetchTopCharacters = async () => {
      const { data } = await getTopCharacters();
      setTopCharacters(data);
      window.localStorage.setItem("topCharacters", JSON.stringify(data));
    };
    if (!window.localStorage.getItem("topAnime")) fetchTopAnime();
    else setTopAnime(JSON.parse(window.localStorage.getItem("topAnime")));
    if (!window.localStorage.getItem("topManga")) fetchTopManga();
    else setTopManga(JSON.parse(window.localStorage.getItem("topManga")));
    if (!window.localStorage.getItem("topCharacters")) fetchTopCharacters();
    else
      setTopCharacters(
        JSON.parse(window.localStorage.getItem("topCharacters"))
      );
  }, []);

  return (
    <>
      <div className="hero">
        <SearchBar />
      </div>
      {topAnime && topManga && topCharacters ? (
        <div className="lists-container">
          <section className="landing-page-section">
            <h1>Top Anime</h1>
            <CardsList list={topAnime} type="anime" />
          </section>
          <section className="landing-page-section">
            <h1>Top Manga</h1>
            <CardsList list={topManga} type="manga" />
          </section>
          <section className="landing-page-section">
            <h1>Most Favorite Characters</h1>
            <CardsList list={topCharacters} type="characters" />
          </section>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};
export default LandingPage;
