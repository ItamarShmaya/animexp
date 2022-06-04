import "./AddToListButton.css";
import {
  useIsUserLoggedIn,
  useLoggedInUser,
} from "../../context/context_custom_hooks";
import { useState } from "react";
import { addAnimeToUserList } from "../../apis/mockapi/mockapi_api_requests";

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

const AddToListButton = ({ anime }) => {
  const { isUserLoggedIn } = useIsUserLoggedIn();
  const { loggedInUser, setLoggedInUser } = useLoggedInUser();
  const [displayMessage, setDisplayMessage] = useState(false);

  const onClick = async () => {
    if (!isUserLoggedIn) {
      setDisplayMessage(true);
      return;
    } else {
      const { mal_id, title, images, type, episodes } = anime;
      const animeEntry = {
        mal_id,
        title,
        image: images.jpg.image_url,
        type,
        episodes,
        comment: "",
      };
      const user = { ...loggedInUser };
      user.list = [...user.list, animeEntry];
      await addAnimeToUserList(loggedInUser.id, user);
      setLoggedInUser(user);
      localStorage.setItem("loggedInUser", JSON.stringify(user));
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
