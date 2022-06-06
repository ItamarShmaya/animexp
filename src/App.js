import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SignupPage from "./screens/signupPage/SignupPage";
import UserListPage from "./screens/userListPage/UserListPage";
import AnimePage from "./screens/animepage/AnimePage/AnimePage";
import Profile from "./screens/profile/Profile";
import React, { Suspense } from "react";
import Spinner from "./components/Spinner/Spinner";
const LandingPage = React.lazy(() =>
  import("./screens/landingpage/LandingPage")
);
// const AnimePage = React.lazy(() =>
//   import("./screens/animepage/AnimePage/AnimePage")
// );

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Suspense fallback={<Spinner />}>
              <LandingPage />
            </Suspense>
          </Route>
          <Route path="/signup" exact component={SignupPage} />
          <Route path="/profile/:username" exact component={Profile} />
          <Route path="/:username/animelist" exact component={UserListPage} />
          <Route path="/anime/:id" exact component={AnimePage} />
          {/* <Route path="/anime/:id" exact>
            <Suspense fallback={<Spinner />}>
              <AnimePage />
            </Suspense>
          </Route> */}
          <Route
            path="*"
            render={() => {
              return <Redirect to={"/"} />;
            }}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
