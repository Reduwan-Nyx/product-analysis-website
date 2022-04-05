import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                
                <CustomLink className='header' to="/home">HOME</CustomLink>
                <CustomLink className='header' to="/reviews">REVIEWS</CustomLink>
                <CustomLink className='header' to="/dashboard">DASHBOARD</CustomLink>
                <CustomLink className='header' to="/blogs">BLOGS</CustomLink>
                <CustomLink className='header' to="/about">ABOUT</CustomLink>
            </nav>
        </div>
    );
};

export default Header;