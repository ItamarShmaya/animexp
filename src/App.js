import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./screens/landingpage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import SignupPage from "./screens/signupPage/SignupPage";
import UserListPage from "./screens/userListPage/UserListPage";
import AnimePage from "./screens/animepage/AnimePage/AnimePage";
import { Switch } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/signup" exact component={SignupPage} />
          <Route path="/mylist" exact component={UserListPage} />
          <Route path="/anime/:id" exact component={AnimePage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
