import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import Register from "./pages/Register";
import ChargingSessions from "./pages/ChargingSessions";
import VerifyAccount from "./pages/VerifyAccount";
import { ThemeProvider } from "@material-ui/core";
import Theme from "./theme/theme";
import ForgotPassword from "./pages/ForgotPassword";
import ConfirmForgotPassword from "./pages/ConfirmForgotPassword";
import AuthService from "./components/AuthService";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";

function App() {
  const isLoggedIn = AuthService.getCurrentUser() ? true : false;
  
  let redirectPath = "/sign-in";
  if (isLoggedIn) {
    redirectPath = "/profile";
  }

  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <BrowserRouter>
          <main>
            <Route exact path="/">
              <Redirect to={redirectPath} />
            </Route>

            <Route path="/sign-in">
              {isLoggedIn ? <Redirect to="/profile" /> : () => <Login /> }
            </Route>

            <Route path="/profile">
              {!isLoggedIn ? <Redirect to="/sign-in" /> : <Profile />}
            </Route>

            <Route path="/sign-up" component={Register} />
            <Route path="/verify" component={VerifyAccount} />
            <Route
              path="/forgot-password"
              component={() => <ForgotPassword />}
            />
            <Route
              path="/confirm-forgot-password"
              component={ConfirmForgotPassword}
            />
            <Route path="/change-password" component={ChangePassword} />
            <Route path="/charging-sessions" component={ChargingSessions} />
          </main>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
