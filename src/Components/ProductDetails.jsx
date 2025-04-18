// src/components/ProductCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/ProductDetails.css';

const ProductDetails = ({ product }) => {
  const navigate = useNavigate();

  const handleViewReviews = () => {
    navigate(`/product/${product.id}`); // Navigate to ProductReviews page
  };

  return (
    <div className="review-card" key={review.id}>
    <div className="review-header">
      <div className="user-info">
        <img src={`https://randomuser.me/api/portraits/lego/${review.id % 10}.jpg`} alt="user" />
        <div>
          <div className="review-username">{review.user.username}</div>
          <div className="review-company">Sample Company</div>
        </div>
      </div>
      <div className="review-date">4/17/2025</div>
    </div>
  
    <div className="review-rating-stars">
      {renderStars((review.id % 5) + 1)}
      <span className="numeric-rating">
        {(review.id % 5) + 1} out of 5
      </span>
    </div>
  
    <div className="review-title">
      “{review.body.slice(0, 30)}...”
    </div>
  
    <div className="review-text">
      {review.body}
    </div>
  
    <button className="read-more">Read more</button>
  </div>
  
  );
};

export default ProductDetails;
