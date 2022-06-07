import "./UserListPage.css";
import { findUserByUsername } from "../../apis/mockapi/mockapi_actions";
import AnimeList from "./AnimeList/AnimeList";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import { useLoggedInUser } from "../../context/context_custom_hooks";
import { useHistory } from "react-router-dom";
import { doesUsernameExist } from "../../apis/mockapi/mockapi_actions";
import { getUsers } from "../../apis/mockapi/mockapi_api_requests";

const UserListPage = ({ match }) => {
  const [userAnimeList, setUserAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { loggedInUser, setLoggedInUser } = useLoggedInUser();
  const username = match.params.username;
  const history = useHistory();

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      if (!doesUsernameExist(username, users)) history.push("/");
    };
    fetchUsers();
  }, [username, history]);

  useEffect(() => {
    const getAnimeList = async () => {
      const user = await findUserByUsername(username);
      setUserAnimeList(user.list);
      setIsLoading(false);
      if (loggedInUser.username === username) {
        setLoggedInUser(user);
        localStorage.setItem("loggedInUser", JSON.stringify(user));
      }
    };
    getAnimeList();
    // eslint-disable-next-line
  }, [username]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <AnimeList
          animeList={userAnimeList}
          setUserAnimeList={setUserAnimeList}
          username={match.params.username}
        />
      )}
    </>
  );
};
export default UserListPage;
