import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SignupPage from "./screens/signupPage/SignupPage";
import UserListPage from "./screens/userListPage/UserListPage";
import AnimePage from "./screens/animepage/AnimePage/AnimePage";
import Profile from "./screens/profile/Profile";
// import React, { Suspense } from "react";
// import Spinner from "./components/Spinner/Spinner";
import LandingPage from "./screens/landingpage/LandingPage";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <ErrorBoundary>
            {/* <Route path="/" exact>
              <Suspense fallback={<Spinner />}>
                <LandingPage />
              </Suspense>
            </Route> */}
            <Route path="/" exact component={LandingPage} />
            <Route path="/signup" exact component={SignupPage} />
            <Route path="/profile/:username" exact component={Profile} />
            <Route path="/:username/animelist" exact component={UserListPage} />
            <Route path="/anime/:id" exact component={AnimePage} />
            {/* <Route path="/anime/:id" exact>
            <Suspense fallback={<Spinner />}>
              <AnimePage />
            </Suspense>
          </Route> */}
            {/* <Route
              path="*"
              render={() => {
                return <Redirect to={"/"} />;
              }}
            /> */}
          </ErrorBoundary>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
