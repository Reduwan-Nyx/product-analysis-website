import React from 'react';
import useReviews from '../../Hooks/useReviews';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReviews()
    return (
        <div className='review-container'>
            <div className='product-container'>
                {
                    reviews.map(review => <ReviewItem
                    key={review.id}
                    review={review}
                    ></ReviewItem>)
                }
            </div>
        </div>
    );
};

export default Reviews;