import './App.css';
import Login from './pages/Login';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import ChargingSessions from './pages/ChargingSessions';
import Nav from './components/Nav';

function App() {



    return (
        <div className="App">
            <BrowserRouter>
                <Nav/>
                <main>
                    <Route path="/" exact component={() => <Home/> }/>
                    <Route path="/login" component={() => <Login/>}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/charging-sessions" component={ChargingSessions}/>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
