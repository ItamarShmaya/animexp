import "./UserListPage.css";
import { findUserByUsername } from "../../apis/mockapi/mockapi_actions";
import AnimeList from "./AnimeList/AnimeList";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import { useLoggedInUser } from "../../context/context_custom_hooks";

const UserListPage = ({ match }) => {
  const [userAnimeList, setUserAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { setLoggedInUser } = useLoggedInUser();

  useEffect(() => {
    const getAnimeList = async () => {
      const username = match.params.username;
      const user = await findUserByUsername(username);
      setUserAnimeList(user.list);
      setIsLoading(false);
      setLoggedInUser(user);
      localStorage.setItem("loggedInUser", JSON.stringify(user));
    };
    getAnimeList();
    // eslint-disable-next-line
  }, [match.params.username]);

  return (
    <>
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
    </>
  );
};
export default UserListPage;
