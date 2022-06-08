import "./SideMenu.css";
import { NavLink } from "react-router-dom";
import { useLoggedInUser } from "../../../context/context_custom_hooks";

const SideMenu = ({ viewedUser }) => {
  const { loggedInUser } = useLoggedInUser();
  return (
    <aside className="profile-side-menu">
      <NavLink
        className="side-menu-item"
        to={`/${viewedUser.username}/animelist`}
      >
        <i className="fa-solid fa-list"></i>
      </NavLink>
      {loggedInUser.username === viewedUser.username && (
        <NavLink
          className="side-menu-item"
          to={`/${viewedUser.username}/editprofile`}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </NavLink>
      )}
    </aside>
  );
};
export default SideMenu;
