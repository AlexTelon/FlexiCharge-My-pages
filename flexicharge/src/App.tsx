import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import ChargingSessions from "./pages/ChargingSessions";
import VerifyAccount from "./pages/VerifyAccount";
import { ThemeProvider } from "@material-ui/core";
import Theme from "./theme/theme";
import Nav from "./components/Nav";
import ForgotPassword from "./pages/ForgotPassword";
import ForgotPasswordConfirm from "./pages/ForgotPasswordConfirm";

function App() {
	return (
		<ThemeProvider theme={Theme}>
			<div className="App">
				<BrowserRouter>
					<main>
						{/* <Navbar /> */}
						<Route path="/" exact component={() => <Home />} />
						<Route path="/login" component={() => <Login />} />
						<Route path="/register" component={Register} />
						<Route path="/verification" component={VerifyAccount} />
						<Route path="/forgot-password" component={ForgotPassword} />
						<Route
							path="/forgot-password-confirm"
							component={ForgotPasswordConfirm}
						/>
						<Route path="/charging-sessions" component={ChargingSessions} />
					</main>
				</BrowserRouter>
			</div>
		</ThemeProvider>
	);
}

export default App;
