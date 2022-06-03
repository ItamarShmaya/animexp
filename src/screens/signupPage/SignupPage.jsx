import "./SignupPage.css";
import Logo from "../../components/Logo/Logo";
import { useState } from "react";
import { doesUsernameExist } from "../../apis/mockapi/mockapi_actions";
import { addUser, getUsers } from "../../apis/mockapi/mockapi_api_requests";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const SignupPage = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernameTaken, setIsUsernameTaken] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (isUsernameTaken) setIsUsernameTaken(false);
  }, [username]);

  const onSignUpSubmit = async (e) => {
    e.preventDefault();
    if (isValidPassword(password) && isValidUsername(username)) {
      const users = await getUsers("/users");
      setUsers(users);
      if (doesUsernameExist(username, users)) {
        setIsUsernameTaken(true);
        return;
      } else {
        const user = {
          username,
          password,
        };
        await addUser(user);
        history.push("/");
      }
    }
  };

  const isValidUsername = (username) => {
    return username.length > 4;
  };

  const isValidPassword = (password) => {
    return password.length > 4;
  };

  return (
    <div className="signup-form-wrapper">
      <Logo secondColor={"#FF0000"} fontSize={"4rem"} />
      <form className="signup-form" onSubmit={onSignUpSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          {isUsernameTaken && (
            <span className="wrong-info-alert">Username already taken</span>
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
          <input
            id="password"
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button className="btn">Sign Up</button>
      </form>
    </div>
  );
};
export default SignupPage;
