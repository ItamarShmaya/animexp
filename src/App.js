import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import LandingPage from "./screens/landingpage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import SignupPage from "./screens/signupPage/SignupPage";
import UserListPage from "./screens/userListPage/UserListPage";
import AnimePage from "./screens/animepage/AnimePage/AnimePage";
import Profile from "./screens/profile/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/signup" exact component={SignupPage} />
          <Route path="/profile/:username" exact component={Profile} />
          <Route path="/:username/animelist" exact component={UserListPage} />
          <Route path="/anime/:id" exact component={AnimePage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
