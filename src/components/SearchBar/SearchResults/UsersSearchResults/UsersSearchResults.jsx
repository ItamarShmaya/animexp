import "./UsersSearchResults.css";

const UsersSearchResults = ({ user }) => {
  return (
    <div className="search-result-item">
      <div className="image">
        <img alt={user.username} src={user.image} />
      </div>
      <div className="search-item-info">
        <div className="search-item-title">{user.username}</div>
        {/* <div className="search-item-genre"> */}
        {/* <span className="underline">Genres:</span> {renderGenres(genres)} */}
        {/* </div> */}
        {/* <div className="search-item-type"> */}
        {/* <span className="underline">Type:</span> {type} */}
        {/* </div> */}
        {/* <div className="search-item-score"> */}
        {/* <span className="underline">Score:</span> {score || "N/A"} */}
        {/* </div> */}
        {/* <div className="search-item-rating"> */}
        {/* <span className="underline">Rating:</span> {rating} */}
        {/* </div> */}
      </div>
    </div>
  );
};
export default UsersSearchResults;
