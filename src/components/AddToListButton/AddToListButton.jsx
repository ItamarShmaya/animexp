import "./AddToListButton.css";
import {
  useIsUserLoggedIn,
  useLoggedInUser,
} from "../../context/context_custom_hooks";
import { useState } from "react";
import {
  addAnimeToUserList,
  getUserById,
} from "../../apis/mockapi/mockapi_api_requests";
import { isAnimeInList } from "../../apis/mockapi/mockapi_actions";

const MustBeLoggedIn = ({ setDisplayMessage }) => {
  return (
    <div className="must-be-logged">
      <p>Must log in first</p>
      <button className="btn" onClick={() => setDisplayMessage(false)}>
        Close
      </button>
    </div>
  );
};

const AddToListButton = ({ anime, setWatching }) => {
  const { isUserLoggedIn } = useIsUserLoggedIn();
  const { loggedInUser, setLoggedInUser } = useLoggedInUser();
  const [displayMessage, setDisplayMessage] = useState(false);

  const onClick = async () => {
    if (!isUserLoggedIn) {
      setDisplayMessage(true);
      return;
    } else {
      const user = { ...(await getUserById(loggedInUser.id)) };

      if (isAnimeInList(user, anime.mal_id)) {
        setWatching(true);
        return;
      }
      const { mal_id, title, images, type } = anime;
      const animeEntry = {
        mal_id,
        title,
        image: images.jpg.image_url,
        type,
        comment: "",
        progress: 1,
      };

      if (
        anime.type === "TV" ||
        anime.type === "ONA" ||
        anime.type === "Movie" ||
        anime.type === "Music"
      )
        animeEntry.episodes = anime.episodes;
      else if (anime.type === "Manga") animeEntry.episodes = anime.volumes;

      user.list = [...user.list, animeEntry];
      await addAnimeToUserList(loggedInUser.id, user);
      setLoggedInUser(user);
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      setWatching(true);
    }
  };
  return (
    <>
      <button onClick={onClick} className="add-to-list-button">
        Add to List
      </button>
      {displayMessage && (
        <MustBeLoggedIn setDisplayMessage={setDisplayMessage} />
      )}
    </>
  );
};
export default AddToListButton;
