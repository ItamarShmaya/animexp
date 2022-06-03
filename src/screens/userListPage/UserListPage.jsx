import "./UserListPage.css";
import { useLoggedInUser } from "../../context/context_custom_hooks";
const UserListPage = () => {
  const { loggedInUser, setLoggedInUser } = useLoggedInUser();

  return <div className="hello">{JSON.stringify(loggedInUser)}</div>;
};
export default UserListPage;
