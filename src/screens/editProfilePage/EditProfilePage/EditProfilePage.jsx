import { useEffect, useState } from "react";
import "./EditProfilePage.css";
import {
  updateUserAvatarImage,
  updateUserBirthday,
  updateUserGender,
} from "../../../apis/mockapi/mockapi_api_requests";
import {
  useIsUserLoggedIn,
  useLoggedInUser,
} from "../../../context/context_custom_hooks";

const EditProfilePage = ({ match, history }) => {
  const [avatarInput, setAvatarInput] = useState("");
  const [genderInput, setGenderInput] = useState("");
  const [birthdayInput, setBirthdayInput] = useState("");
  const { loggedInUser } = useLoggedInUser();
  const { isUserLoggedIn } = useIsUserLoggedIn();

  useEffect(() => {
    if (!isUserLoggedIn || loggedInUser.username !== match.params.username)
      history.push("/");
  }, [isUserLoggedIn, history, loggedInUser.username, match.params.username]);

  const onAvatarSubmit = async (e) => {
    e.preventDefault();
    await updateUserAvatarImage(loggedInUser.id, {
      image: avatarInput,
    });
    setAvatarInput("");
  };

  const onGenderSubmit = async (e) => {
    e.preventDefault();
    const user = { ...loggedInUser };
    user.personalInfo.gender = genderInput;
    await updateUserGender(loggedInUser.id, user);
    setGenderInput("");
  };

  const onBirthdaySubmit = async (e) => {
    e.preventDefault();
    const user = { ...loggedInUser };
    user.personalInfo.birthday = birthdayInput;
    await updateUserBirthday(loggedInUser.id, user);
    setBirthdayInput("");
  };

  return (
    <div className="editprofile-page">
      <main className="edit-profile-content">
        <h2>Edit</h2>
        <form onSubmit={onAvatarSubmit} className="edit-field edit-avatar-form">
          <div className="edit-input">
            <label htmlFor="avatarImage">Avatar Image URL</label>
            <input
              id="avatarImage"
              type="text"
              value={avatarInput}
              onChange={({ target }) => setAvatarInput(target.value)}
            />
          </div>
          <button>Submit</button>
        </form>
        <form onSubmit={onGenderSubmit} className="edit-field edit-gender-form">
          <div className="edit-input">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              value={genderInput}
              onChange={({ target }) => setGenderInput(target.value)}
            >
              <option value="Other">Other</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <button>Submit</button>
        </form>
        <form
          onSubmit={onBirthdaySubmit}
          className="edit-field edit-birthday-form"
        >
          <div className="edit-input">
            <label htmlFor="birthday">Birthday</label>
            <input
              id="birthday"
              type="date"
              value={birthdayInput}
              onChange={({ target }) => setBirthdayInput(target.value)}
              max={new Date().toISOString().slice(0, 10)}
            />
          </div>
          <button>Submit</button>
        </form>
      </main>
    </div>
  );
};
export default EditProfilePage;
