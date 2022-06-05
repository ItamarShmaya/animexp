import "./AnimeListItem.css";
import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { updateValuesInUserList } from "../../../../apis/mockapi/mockapi_api_requests";
import {
  useLoggedInUser,
  useIsUserLoggedIn,
} from "../../../../context/context_custom_hooks";

const AnimeListItem = ({ anime, username, setAnimeList }) => {
  const [progressEditMode, setProgressEditMode] = useState(false);
  const [commentEditMode, setCommentEditMode] = useState(false);
  const [progressInput, setProgressInput] = useState("");
  const [commentInput, setCommentInput] = useState("");
  const { loggedInUser, setLoggedInUser } = useLoggedInUser();
  const { isUserLoggedIn } = useIsUserLoggedIn();
  const [isloggedInUserList, setIsLoggedInUserList] = useState(false);
  const progressRef = useRef();
  const commentRef = useRef();
  const { title, image, episodes, progress, type, comment, mal_id } = anime;

  useEffect(() => {
    setIsLoggedInUserList(false);
    if (isUserLoggedIn && loggedInUser.username === username) {
      setIsLoggedInUserList(true);
    }
  }, [isUserLoggedIn, loggedInUser.username, username]);

  const updateValuesInList = (keyToUpdate, value) => {
    const newUserData = { ...loggedInUser };
    newUserData.list = newUserData.list.map((anime) => {
      if (anime.mal_id === mal_id) {
        anime[keyToUpdate] = value;
      }
      return anime;
    });

    updateValuesInUserList(loggedInUser.id, newUserData);
    setLoggedInUser(newUserData);
    localStorage.setItem("loggedInUser", JSON.stringify(newUserData));
    setAnimeList(newUserData.list);
  };

  useEffect(() => {
    if (progressEditMode) {
      const onBodyClick = ({ target }) => {
        if (progressRef.current === target) return;
        setProgressEditMode(false);
        updateValuesInList("progress", progressInput);
      };

      document.body.addEventListener("click", onBodyClick, { capture: true });

      return () => {
        document.body.removeEventListener("click", onBodyClick, {
          capture: true,
        });
      };
    }
    // eslint-disable-next-line
  }, [progressInput, progressEditMode]);

  useEffect(() => {
    if (commentEditMode) {
      const onBodyClick = ({ target }) => {
        if (commentRef.current === target) return;
        setCommentEditMode(false);
        updateValuesInList("comment", commentInput);
      };

      document.body.addEventListener("click", onBodyClick, { capture: true });

      return () => {
        document.body.removeEventListener("click", onBodyClick, {
          capture: true,
        });
      };
    }
    // eslint-disable-next-line
  }, [commentEditMode, commentInput]);

  const renderProgressCol = () => {
    if (!isloggedInUserList) {
      return (
        <>
          <span>{progress || 1}</span>/{episodes}
        </>
      );
    } else {
      return (
        <>
          {progressEditMode ? (
            <input
              ref={progressRef}
              onChange={({ target }) => setProgressInput(target.value)}
              value={progressInput}
              type="number"
              min={1}
              max={episodes}
            />
          ) : (
            <span
              className="editable"
              onClick={() => setProgressEditMode(true)}
            >
              {progress || 1}
            </span>
          )}
          /{episodes}
        </>
      );
    }
  };

  const renderCommentCol = () => {
    if (!isloggedInUserList) {
      return <>{comment}</>;
    } else {
      return (
        <>
          {commentEditMode ? (
            <input
              ref={commentRef}
              onChange={({ target }) => setCommentInput(target.value)}
              value={commentInput}
              type="text"
            />
          ) : (
            <span className="editable" onClick={() => setCommentEditMode(true)}>
              {comment || "Edit"}
            </span>
          )}
        </>
      );
    }
  };

  return (
    <div className="list-item">
      <div className="mylist-item-img-container">
        <NavLink to={`/anime/${mal_id}`}>
          <img alt={title} src={image} />
        </NavLink>
      </div>
      <div className="mylist-item-title">{title}</div>
      <div className="mylist-item-type">{type}</div>
      <div className="mylist-item-episodes">{renderProgressCol()}</div>
      <div className="mylist-item-comment">{renderCommentCol()}</div>
    </div>
  );
};

export default AnimeListItem;
