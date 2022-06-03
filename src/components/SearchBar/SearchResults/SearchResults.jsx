import { NavLink } from "react-router-dom";
import "./SearchResults.css";
import SearchResultsItem from "./SearchResultsItem/SearchResultsItem";

const SearchResults = ({ results }) => {
  const searchbar = document.querySelector(".searchbar");
  const navbar = document.querySelector(".navbar");
  const hero = document.querySelector(".hero");
  const searchResultsHeight =
    window.innerHeight -
    (searchbar.clientHeight + navbar.clientHeight + hero.clientHeight / 2);

  const renderedSearchResults = () => {
    return results.map((result) => {
      return (
        <NavLink key={result.mal_id} to={`/anime/${result.mal_id}`}>
          <SearchResultsItem anime={result} />;
        </NavLink>
      );
    });
  };
  return (
    <div
      className="search-results-container"
      style={{
        top: `${searchbar.clientHeight}px`,
        height: `${searchResultsHeight}px`,
      }}
    >
      {renderedSearchResults(results)}
    </div>
  );
};
export default SearchResults;
