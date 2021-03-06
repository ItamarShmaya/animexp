import "./SearchBar.css";
import { useEffect, useRef, useState } from "react";
import {
  getAnimeBySearch,
  getMangaBySearch,
} from "../../apis/jikan/jikan_api_requests";
import SearchResults from "./SearchResults/SearchResults";
import { getUsersBySearch } from "../../apis/mockapi/mockapi_api_requests";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearchInput, setDebouncedSearchInput] = useState(searchInput);
  const [searchResults, setSearchResults] = useState([]);
  const [selectValue, setSelectValue] = useState("anime");
  const [searchType, setSearchType] = useState("anime");
  const searchbarRef = useRef();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchInput(searchInput);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchInput]);

  useEffect(() => {
    const search = async () => {
      let results = [];
      if (selectValue === "anime") {
        results = await getAnimeBySearch(debouncedSearchInput);
        setSearchType("anime");
      } else if (selectValue === "manga") {
        results = await getMangaBySearch(debouncedSearchInput);
        setSearchType("manga");
      } else if (selectValue === "users") {
        results = await getUsersBySearch(debouncedSearchInput);
        setSearchType("users");
      }
      setSearchResults(results);
    };
    if (debouncedSearchInput !== "") search();
    else setSearchResults([]);
  }, [debouncedSearchInput, selectValue]);

  useEffect(() => {
    if (searchResults.length > 0) {
      const onBodyClick = ({ target }) => {
        if (searchbarRef.current.contains(target)) return;
        setSearchResults([]);
        setSearchInput("");
      };

      document.body.addEventListener("click", onBodyClick, { capture: true });

      return () => {
        document.body.removeEventListener("click", onBodyClick, {
          capture: true,
        });
      };
    }
  }, [searchResults]);

  const onSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="searchbar-wrapper">
        <form
          ref={searchbarRef}
          className="searchbar"
          onSubmit={onSearchSubmit}
        >
          <select
            className="search-categories"
            value={selectValue}
            onChange={({ target }) => setSelectValue(target.value)}
          >
            <option value="anime">Anime</option>
            <option value="manga">Manga</option>
            <option value="users">Users</option>
          </select>
          <input
            id="searchbar-input"
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={({ target }) => setSearchInput(target.value)}
          />
          <button className="searchbar-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          {searchResults.length > 0 && (
            <SearchResults results={searchResults} searchType={searchType} />
          )}
        </form>
      </div>
    </>
  );
};
export default SearchBar;
