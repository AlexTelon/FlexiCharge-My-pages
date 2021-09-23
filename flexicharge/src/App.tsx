import {useEffect, useState} from 'react';
import './App.css';
import Login from './pages/Login';
import Nav from './components/Nav';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import ChargingSessions from './pages/ChargingSessions';

function App() {
    const [name, setName] = useState('');



    return (
        <div className="App">
            <BrowserRouter>
                <Nav name={name} setName={setName}/>

                <main>
                    <Route path="/" exact component={() => <Home name={name}/>}/>
                    <Route path="/login" component={() => <Login setName={setName}/>}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/charging-sessions" component={ChargingSessions}/>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
