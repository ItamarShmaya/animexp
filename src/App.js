import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./screens/landingpage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import SignupPage from "./screens/signupPage/SignupPage";
import UserListPage from "./screens/userListPage/UserListPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Route path="/" exact component={LandingPage} />
        <Route path="/signup" exact component={SignupPage} />
        <Route path="/mylist" exact component={UserListPage} />
      </BrowserRouter>
    </>
  );
}

export default App;
