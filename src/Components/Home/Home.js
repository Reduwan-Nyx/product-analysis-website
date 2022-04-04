import React from 'react';
import './Home.css'
import flower from '../image/flower.jpg'
const Home = () => {
    return (
        <div className='home-container'>
           <div className="left-container">
                <h1 className='home-text'>APPLE WATCH GEDGET</h1>
                <p className='home-title'>The Apple Watch is one of the best smartwatches around so it deserves to be paired up with some of the best Apple Watch accessories too. We've looked at 6 great Apple Watch accessories to improve your Apple Watch experience. These products are available to purchase from Apple directly as well as via third-party manufacturers.</p>
           </div>
           <div className="right-container">
                <img src={flower} alt="" />
           </div>
        </div>
    );
};

export default Home;