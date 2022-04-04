import React from "react";
import './ReviewItems.css'
const ReviewItem = (props) => {
    const {name, review, picture} = props.review
  return (
    <div>
      <div class="review-item">
        <div class="reviews-container">
            <img src={picture} alt="" />
          <h4>
            <b>{name}</b>
          </h4>
          <p>{review}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
