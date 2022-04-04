import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <Link className='header' to="/home">HOME</Link>
                <Link className='header' to="/reviews">REVIEWS</Link>
                <Link className='header' to="/dashboard">DASHBOARD</Link>
                <Link className='header' to="/blogs">BLOGS</Link>
                <Link className='header' to="/about">ABOUT</Link>
            </nav>
        </div>
    );
};

export default Header;