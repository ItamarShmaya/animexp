import "./Profile.css";
import { useEffect, useState } from "react";
import { getUserByUsername } from "../../apis/mockapi/mockapi_actions";
import { getUsers } from "../../apis/mockapi/mockapi_api_requests";
import { useLoggedInUser } from "../../context/context_custom_hooks";
import SideMenu from "./SideMenu/SideMenu";
import UserInfo from "./UserInfo/UserInfo";

const Profile = ({ match }) => {
  const username = match.params.username;
  const { loggedInUser } = useLoggedInUser();
  const [viewedUser, setViewedUser] = useState(null);

  useEffect(() => {
    const getViewedUser = async () => {
      const users = await getUsers();
      const user = await getUserByUsername(username, users);
      if (user) {
        setViewedUser(user);
      }
    };
    loggedInUser.username === username
      ? setViewedUser(loggedInUser)
      : getViewedUser();
  }, [username, loggedInUser.username, loggedInUser]);

  return (
    <div className="profile-page">
      {viewedUser && (
        <>
          <SideMenu viewedUser={viewedUser} />
          <main className="main-profile-content">
            <div className="user-info">
              <UserInfo user={viewedUser} />
            </div>
            <div className="profile-content">
              <h1 className="profile-heading">{viewedUser.username}</h1>
            </div>
          </main>
        </>
      )}
    </div>
  );
};
export default Profile;
