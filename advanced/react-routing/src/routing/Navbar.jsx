import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="d-flex justify-content-center align-items-center">
            <ul style={{listStyle:'none'}}>
                <li>
                    <Link to="/" style={{textDecoration:'none'}}>Homepage</Link>
                </li>
                <li>
                    <Link to="/about" style={{textDecoration:'none'}}>About</Link>
                </li>
                <li>
                    <Link to="/people" style={{textDecoration:'none'}}>People</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;