import "./Profile.css";
import { NavLink } from "react-router-dom";

const Profile = ({ match }) => {
  return (
    <>
      <NavLink to={`/${match.params.username}/animelist`}>My List</NavLink>
    </>
  );
};
export default Profile;
