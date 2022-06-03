import "./SearchBar.css";
import { useEffect, useRef, useState } from "react";
import { getAnimeBySearch } from "../../apis/jikan/jikan_api_requests";
import SearchResults from "./SearchResults/SearchResults";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearchInput, setDebouncedSearchInput] = useState(searchInput);
  const [searchResults, setSearchResults] = useState([]);
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
      const results = await getAnimeBySearch(debouncedSearchInput);
      setSearchResults(results);
    };
    if (debouncedSearchInput !== "") search();
    else setSearchResults([]);
  }, [debouncedSearchInput]);

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
            <SearchResults results={searchResults} />
          )}
        </form>
      </div>
    </>
  );
};
export default SearchBar;
