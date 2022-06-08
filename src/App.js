import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SignupPage from "./screens/signupPage/SignupPage";
import UserListPage from "./screens/userListPage/UserListPage";
import AnimePage from "./screens/animepage/AnimePage/AnimePage";
import Profile from "./screens/profile/Profile";
// import React, { Suspense } from "react";
// import Spinner from "./components/Spinner/Spinner";
import LandingPage from "./screens/landingpage/LandingPage";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import EditProfilePage from "./screens/editProfilePage/EditProfilePage/EditProfilePage";
import MangaPage from "./screens/mangaPage/MangaPage/MangaPage";

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

            {/* <Route path="/anime/:id" exact>
            <Suspense fallback={<Spinner />}>
              <AnimePage />
            </Suspense>
          </Route> */}
            <Route path="/" exact component={LandingPage} />
            <Route path="/signup" exact component={SignupPage} />
            <Route path="/profile/:username" exact component={Profile} />
            <Route path="/:username/animelist" exact component={UserListPage} />
            <Route
              path="/:username/editprofile"
              exact
              component={EditProfilePage}
            />
            <Route path="/anime/:id" exact component={AnimePage} />
            <Route path="/manga/:id" exact component={MangaPage} />
            <Route
              path="*"
              render={() => {
                return <Redirect to={"/"} />;
              }}
            />
          </ErrorBoundary>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
