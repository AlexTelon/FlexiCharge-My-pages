import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import ChargingSessions from "./pages/ChargingSessions";
import VerifyAccount from "./pages/VerifyAccount";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@material-ui/core";
import Theme from "./theme/theme";
import AuthService from "./components/AuthService";
import Profile from "./pages/Profile";


function App() {
	const isLoggedIn =AuthService.getCurrentUser() ? true : false;
	return (
		<ThemeProvider theme={Theme}>
			<div className="App">
				<BrowserRouter>
				
					<main>
						<Route path="/" exact component={() => <Home />} />
						<Route path="/login" component={() => <Login />} />
						<Route path="/register" component={Register} />
						<Route path="/verification" component={VerifyAccount} />
						<Route path="/charging-sessions" component={ChargingSessions} />
						<Route path="/profile" component={Profile} />

					</main>
				</BrowserRouter>
			</div>
		</ThemeProvider>
	);
}

export default App;
