import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Nav = () => {
    // const logout = async () => {
    //     await fetch('http://localhost:8000/api/logout', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         credentials: 'include',
    //     });
    // }

    let menu;

    menu = (
        <ul className="navbar">
            <li className="nav-item">
                <Link to="/login" className="btn btn-success">Login</Link>
            </li>
            <li className="nav-item active">
                <Link to="/register" className="btn btn-success">Register</Link>
            </li>
            {/* <li className="nav-item active">
                <Link to="/login" className="btn btn-danger" onClick={logout}>Logout</Link>
            </li> */}
        </ul>
    )


    return (
        <nav className="navbar">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src={logo} width="300" height="60" alt="logo" />

                </Link>

                <div>
                    {menu}
                </div>
            </div>
        </nav>
    );
};

export default Nav;
