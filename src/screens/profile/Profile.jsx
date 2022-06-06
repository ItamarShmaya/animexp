import "./Profile.css";
import { NavLink } from "react-router-dom";

const Profile = ({ match }) => {
  const username = match.params.username;

  return (
    <div className="profile-page">
      {/* <h1 className="profile-heading">Welcome to {username}'s Profile Page</h1> */}
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
