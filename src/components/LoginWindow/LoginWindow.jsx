import { useState, useEffect } from "react";
import "./LoginWindow.css";
import { getUsers } from "../../apis/mockapi/mockapi_api_requests";
import {
  doesUsernameExist,
  getUserByUsername,
  doesUsernameMatchPassword,
} from "../../apis/mockapi/mockapi_actions";
import { NavLink } from "react-router-dom";
import {
  useLoggedInUser,
  useIsUserLoggedIn,
} from "../../context/context_custom_hooks";

const LoginWindow = ({ formWrapperRef, setOpen }) => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [doesUserExist, setDoesUserExist] = useState(null);
  const [isCorrectPassword, setIsCorrectPassword] = useState(null);
  const { loggedInUser, setLoggedInUser } = useLoggedInUser();
  const { isUserLoggedIn, setIsUserLoggedIn } = useIsUserLoggedIn();

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      setUsers(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    if (!doesUserExist || !isCorrectPassword) {
      setDoesUserExist(null);
      setIsCorrectPassword(null);
    }
  }, [username, password]);

  const onLoginSubmit = (e) => {
    e.preventDefault();
    if (!doesUsernameExist(username, users)) {
      setDoesUserExist(false);
      return;
    } else {
      const user = getUserByUsername(username, users);
      if (doesUsernameMatchPassword(user, username, password)) {
        setLoggedInUser(user);
        setIsUserLoggedIn(true);
        setOpen(false);
        return;
      } else {
        setIsCorrectPassword(false);
      }
    }
  };

  return (
    <div className="login-window">
      <div ref={formWrapperRef} className="form-wrapper">
        <form className="login-form" onSubmit={onLoginSubmit}>
          <h1>Sign In</h1>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            {doesUserExist === false && (
              <span className="wrong-info-alert">Username doesn't exist</span>
            )}
            <input
              id="username"
              type="text"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            {isCorrectPassword === false && (
              <span className="wrong-info-alert">Incorrect Password</span>
            )}
            <input
              id="password"
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <button className="btn">Log In</button>
          <div>Need an account?</div>
          <NavLink to="/signup" onClick={() => setOpen(false)}>
            Sign Up
          </NavLink>
        </form>
      </div>
    </div>
  );
};
export default LoginWindow;
