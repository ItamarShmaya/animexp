import "./SignupPage.css";
import Logo from "../../components/Logo/Logo";
import { useRef, useState } from "react";
import { doesUsernameExist } from "../../apis/mockapi/mockapi_actions";
import { addUser, getUsers } from "../../apis/mockapi/mockapi_api_requests";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const USER_REGEX = /^[a-zA-Z][a-zA-z0-9-_]{3,23}$/;
const PWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,24})/;

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [retypePwd, setRetypePwd] = useState("");
  const [birthdayInput, setBirthdayInput] = useState("");
  const [isUsernameTaken, setIsUsernameTaken] = useState(false);
  const [isInvalidUsername, seIisInvalidUsername] = useState(false);
  const [isInvalidPassword, setIsInvalidPassword] = useState(false);
  const [pwdMatch, setPwdMatch] = useState(true);
  const [eyeIcon, setEyeIcon] = useState("fa-eye");
  const pwdRef = useRef();
  const history = useHistory();

  useEffect(() => {
    if (isUsernameTaken) setIsUsernameTaken(false);
    username.length > 0 && !USER_REGEX.test(username)
      ? seIisInvalidUsername(true)
      : seIisInvalidUsername(false);
    // eslint-disable-next-line
  }, [username]);

  useEffect(() => {
    password.length > 0 && !PWD_REGEX.test(password)
      ? setIsInvalidPassword(true)
      : setIsInvalidPassword(false);
  }, [password]);

  useEffect(() => {
    if (!pwdMatch) setPwdMatch(true);
    // eslint-disable-next-line
  }, [retypePwd]);

  const onSignUpSubmit = async (e) => {
    e.preventDefault();
    if (!isInvalidPassword && !isInvalidUsername) {
      const users = await getUsers("/users");
      if (doesUsernameExist(username, users)) {
        setIsUsernameTaken(true);
        return;
      } else {
        if (retypePwd === password) {
          setPwdMatch(true);
          const user = {
            username,
            password,
            personalInfo: {
              birthday: birthdayInput,
              gender: null,
              joined: new Date(),
            },
          };
          await addUser(user);
          history.push("/");
        } else {
          setPwdMatch(false);
        }
      }
    }
  };

  const onEyeIconClick = () => {
    if (pwdRef.current.getAttribute("type") === "password") {
      pwdRef.current.setAttribute("type", "text");
      setEyeIcon("fa-eye-slash");
    } else {
      pwdRef.current.setAttribute("type", "password");
      setEyeIcon("fa-eye");
    }
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
            placeholder="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
          {isInvalidUsername && (
            <span className="validty-message">
              <i className="fa-solid fa-circle-exclamation"></i> 4 to 24
              Characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, underscores, hyphens allowed
            </span>
          )}
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <div className="password">
            <input
              ref={pwdRef}
              id="password"
              type="password"
              value={password}
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <i
              onClick={onEyeIconClick}
              className={`fa-solid ${eyeIcon} eye-icon`}
            ></i>
          </div>
          {isInvalidPassword && (
            <span className="validty-message">
              <i className="fa-solid fa-circle-exclamation"></i> 8 to 24
              Characters.
              <br />
              Must include uppercase and lowercase letters, a number and a
              special character.
              <br />
              allowed special characters: !@#$%^&*
            </span>
          )}
        </div>
        <div className="input-group">
          <label htmlFor="retypePwd">Retype password</label>
          {!pwdMatch && (
            <span className="wrong-info-alert">Password does not match</span>
          )}
          <input
            id="retypePwd"
            type="password"
            value={retypePwd}
            placeholder="Retype password"
            onChange={({ target }) => setRetypePwd(target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="birthday">Birthday</label>
          <input
            id="birthday"
            type="date"
            value={birthdayInput}
            placeholder="Birthday"
            onChange={({ target }) => setBirthdayInput(target.value)}
            max={new Date().toISOString().slice(0, 10)}
          />
        </div>
        <button className="btn">Sign Up</button>
      </form>
    </div>
  );
};
export default SignupPage;
