import React from "react";
import Loadable from "react-loadable";


const LoadAbleComponent = Loadable.Map({
  loader: {
    LandingScreen: () => import("./screens/Landing/Index"),
    ReactRouter: () => import("react-router-dom"),
    UserBlogs :()=>import("./screens/UserBlogs/Index"),
    LoginScreen :()=>import("./screens/LoginScreen/LoginScreen"),
    SignUpScreen :()=>import("./screens/SignUpScreen/SignUpScreen"),
    BlogScreen :()=>import("./screens/BlogScreen/BlogScreen")


  },
  render(loaded, props) {
    let LandingComponent = loaded.LandingScreen.default;
    let BrowserRouter = loaded.ReactRouter.BrowserRouter;
    let Route = loaded.ReactRouter.Route;
    let UserBlogs = loaded.UserBlogs.default;
    let LoginComponent = loaded.LoginScreen.default
    let SignUpComponent = loaded.SignUpScreen.default
    let BlogComponent=loaded.BlogScreen.default


    return (
      <BrowserRouter>
        <div>
          <Route exact path="/">
            <LandingComponent />
          </Route>

          <Route exact path="/user/blogs">
            <UserBlogs/>
          </Route>

          <Route exact path="/login">
            <LoginComponent/>
          </Route>

          <Route exact path="/signup">
            <SignUpComponent/>
          </Route>

          <Route exact path="/blog">
            <BlogComponent/>
          </Route>

        </div>
      </BrowserRouter>
    );
  },

  loading() {
    return <div>Loading</div>;
  },
});

function App() {
  return <LoadAbleComponent />;
}

export default App;