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

    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://localhost:8000/api/user', {
                    headers: {'Content-Type': 'application/json'},
                    credentials: 'include',
                });

                const content = await response.json();

                setName(content.name);
            }
        )();
    });


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
