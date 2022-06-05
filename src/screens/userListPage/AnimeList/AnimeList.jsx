import "./AnimeList.css";
import AnimeListItem from "./AnimeListItem/AnimeListItem";

const AnimeList = ({ animeList, username, setUserAnimeList }) => {
  const renderAnimeList = (list) => {
    const sortedList = [...list].sort((anime1, anime2) => {
      return anime1.title.toLowerCase() - anime2.title.toLowerCase();
    });
    return sortedList.map((anime) => {
      return (
        <AnimeListItem
          key={anime.mal_id}
          anime={anime}
          username={username}
          setUserAnimeList={setUserAnimeList}
        />
      );
    });
  };
  return (
    <div className="mylist-container">
      <div id="list-header" className="list-item">
        <div className="mylist-item-img-container"></div>
        <div className="mylist-item-title">Title</div>
        <div className="mylist-item-type">Type</div>
        <div className="mylist-item-episodes">Progress</div>
        <div className="mylist-item-comment">Comment</div>
      </div>
      {renderAnimeList(animeList)}
    </div>
  );
};
export default AnimeList;
