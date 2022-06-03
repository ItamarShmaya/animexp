import "./SearchResultsItem.css";

const SearchResultsItem = ({ anime }) => {
  const { images, title, genres, type, score, rating } = anime;

  const renderGenres = (genres) => {
    return genres.map((genre) => {
      return <span key={genre.name}>{genre.name}</span>;
    });
  };

  return (
    <div className="search-result-item">
      <div className="image">
        <img alt={title} src={images.jpg.small_image_url} />
      </div>
      <div className="info">
        <div className="title">{title}</div>
        <div className="genre">
          <span className="underline">Genres:</span> {renderGenres(genres)}
        </div>
        <div className="type">
          <span className="underline">Type:</span> {type}
        </div>
        <div className="score">
          <span className="underline">Score:</span> {score || "N/A"}
        </div>
        <div className="rating">
          <span className="underline">Rating:</span> {rating}
        </div>
      </div>
    </div>
  );
};

export default SearchResultsItem;
