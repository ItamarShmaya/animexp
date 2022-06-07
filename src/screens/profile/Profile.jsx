import "./Profile.css";
import { NavLink, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { doesUsernameExist } from "../../apis/mockapi/mockapi_actions";
import { getUsers } from "../../apis/mockapi/mockapi_api_requests";

const Profile = ({ match }) => {
  const username = match.params.username;
  const history = useHistory();

  useEffect(() => {
    const checkIfPageExist = async () => {
      const users = await getUsers();
      if (!doesUsernameExist(username, users)) history.push("/");
    };
    checkIfPageExist();
  }, [username, history]);

  return (
    <div className="profile-page">
      <aside className="profile-side-menu">
        <NavLink className="side-menu-item" to={`/${username}/animelist`}>
          <i className="fa-solid fa-list"></i>
        </NavLink>
      </aside>
      <main className="main-profile-content">
        <h1 className="profile-heading">{username}</h1>
      </main>
    </div>
  );
};
export default Profile;
