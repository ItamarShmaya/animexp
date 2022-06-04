import "./Navbar.css";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import LoginWindow from "../LoginWindow/LoginWindow";
import {
  useIsUserLoggedIn,
  useLoggedInUser,
} from "../../context/context_custom_hooks";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const formWrapperRef = useRef();
  const { setLoggedInUser } = useLoggedInUser();
  const { isUserLoggedIn, setIsUserLoggedIn } = useIsUserLoggedIn();

  useEffect(() => {
    if (open) {
      const onBodyClick = ({ target }) => {
        console.log();
        if (formWrapperRef.current.contains(target)) return;
        setOpen(false);
      };

      document.body.addEventListener("click", onBodyClick, { capture: true });

      return () => {
        document.body.removeEventListener("click", onBodyClick, {
          capture: true,
        });
      };
    }
  }, [open]);

  const onLogoutButtonClick = () => {
    setLoggedInUser(null);
    setIsUserLoggedIn(false);
    localStorage.removeItem("loggedInUser");
  };

  const renderLoginOrLogout = () => {
    if (isUserLoggedIn) {
      return (
        <div className="navbar-right nav-item" onClick={onLogoutButtonClick}>
          Logout
        </div>
      );
    } else {
      return (
        <div
          className="navbar-right nav-item"
          onClick={() => setOpen((prev) => !prev)}
        >
          Login
        </div>
      );
    }
  };

  const renderLoginWindow = () => {
    if (open) {
      return <LoginWindow formWrapperRef={formWrapperRef} setOpen={setOpen} />;
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <NavLink className="nav-item" to="/">
            <Logo firstColor={"#EEEBDD"} secondColor={"#84A9AC"} />
          </NavLink>
          <NavLink className="nav-item" to="/">
            Home
          </NavLink>
          <NavLink className="nav-item" to="/mylist">
            My List
          </NavLink>
        </div>
        {renderLoginOrLogout()}
      </nav>
      {renderLoginWindow()}
    </>
  );
};
export default Navbar;
