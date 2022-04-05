import React from 'react';
import error from '../image/error.jpg'
import './NotFound.css'
const NotFoudn = () => {
    return (
        <div>
            <div className='error'>
            <img src={error} alt="" />
            </div>
            <h2>The page you are looking is not available</h2>
            <h2>404</h2>
           
        </div>
    );
};

export default NotFoudn;