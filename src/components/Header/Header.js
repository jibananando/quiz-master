import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav className='nav-container'>
            <div>
                <h2>Quiz Master</h2>
            </div>
            <div className='route-container'>
                <Link to='/'>Home</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='blog'>Blog</Link>
            </div>
        </nav>
    );
};

export default Header;