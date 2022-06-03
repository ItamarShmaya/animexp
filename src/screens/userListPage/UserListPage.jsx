import "./UserListPage.css";
import {
  useLoggedInUser,
  useIsUserLoggedIn,
} from "../../context/context_custom_hooks";
const UserListPage = () => {
  const { loggedInUser, setLoggedInUser } = useLoggedInUser();
  const { isUserLoggedIn, setIsUderLoggedIn } = useIsUserLoggedIn();

  return (
    <>
      <div>
        {isUserLoggedIn ? "asdsa" : "Must be logged in to view this page"}
      </div>
    </>
  );
};
export default UserListPage;
