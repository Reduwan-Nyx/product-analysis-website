import React from 'react';
import './Home.css'
import flower from '../image/flower.jpg'
import useReviews from '../../Hooks/useReviews';
import ReviewItem from '../ReviewItem/ReviewItem';
import { Link } from 'react-router-dom';
const Home = () => {
    const [reviews, setReviews] = useReviews()
   
    return (
        <div className='home-container'>
            <div className='container'>
           <div className="left-container">
                <h1 className='home-text'>APPLE WATCH GEDGET</h1>
                <p className='home-title'>The Apple Watch is one of the best smartwatches around so it deserves to be paired up with some of the best Apple Watch accessories too. We've looked at 6 great Apple Watch accessories to improve your Apple Watch experience. These products are available to purchase from Apple directly as well as via third-party manufacturers.</p>
           </div>
           <div className="right-container">
                <img src={flower} alt="" />
           </div>
           </div>
            
           <div className='product-container'>
              {
                  reviews.slice(0,3).map(review => <ReviewItem key={review.id}
                    review={review}
                  ></ReviewItem>)
                  
              }
           </div>
           <Link to="/reviews"><button className='btn-container'>See all review</button></Link>
        </div>
    );
};

export default Home;