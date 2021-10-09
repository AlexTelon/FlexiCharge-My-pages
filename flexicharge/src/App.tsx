import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
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
	return (
		<ThemeProvider theme={Theme}>
			<div className="App">
				<BrowserRouter>

					<main>
						<Route path="/" exact component={() => <Home />} />
						<Route path="/sign-in" component={() => <Login />} />
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
						<Route
							path="/change-password"
							component={ChangePassword}
						/>
						<Route path="/charging-sessions" component={ChargingSessions} />
						<Route path="/profile" component={Profile} />

					</main>
				</BrowserRouter>
			</div>
		</ThemeProvider>
	);
}

export default App;
