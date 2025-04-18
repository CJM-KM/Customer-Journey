// src/Pages/ProductReviews.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductReviews.css';

const ProductReviews = () => {
  const { productId } = useParams();
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://dummyjson.com/comments')
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.comments.slice(0, 6)); // Show 6 reviews for better layout
      });
  }, [productId]);

  const averageRating = 4.2; // Dummy avg
  const ratingsData = [
    { stars: 5, percent: 50, count: 25 },
    { stars: 4, percent: 30, count: 15 },
    { stars: 3, percent: 10, count: 5 },
    { stars: 2, percent: 7, count: 3 },
    { stars: 1, percent: 3, count: 2 },
  ];

  return (
    <div className="reviews-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>

      {/* ⭐ Rating Summary */}
      <div className="rating-summary">
        <div className="left">
          <h2>Average Rating</h2>
          <div className="avg-stars">
            {renderStars(averageRating)} ({averageRating} out of 5)
          </div>
        </div>
        <div className="right">
          {ratingsData.map((rating) => (
            <div className="rating-bar" key={rating.stars}>
              <div className="stars">{rating.stars} ★</div>
              <div className="bar">
                <div
                  className="fill"
                  style={{ width: `${rating.percent}%` }}
                ></div>
              </div>
              <div className="percent">{rating.percent}%</div>
              <div className="count">({rating.count})</div>
            </div>
          ))}
        </div>
      </div>

      {/* ⭐ Reviews Grid */}
      <div className="review-grid">
        {reviews.map((review) => (
          <div className="review-card" key={review.id}>
            <div className="review-header">
              <div className="user-info">
                <img
                  src={`https://randomuser.me/api/portraits/lego/${review.id % 10}.jpg`}
                  alt={review.user.username}
                />
                <div>
                  <strong>{review.user.username}</strong>
                  <p>Sample Company</p>
                </div>
              </div>
              <p className="review-date">4/17/2025</p>
            </div>
            <div className="review-rating">
              {renderStars((review.id % 5) + 1)}{' '}
              <b>{(review.id % 5) + 1} out of 5</b>
            </div>
            <p>
              <strong>"{review.body.slice(0, 20)}..."</strong>
            </p>
            <p>{review.body}</p>
            <button className="read-more">Read more</button>
          </div>
        ))}
      </div>
    </div>
  );
};

// ⭐ Helper to render stars
const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={i}>⭐</span>);
  }
  if (hasHalf) stars.push(<span key="half">⭐️</span>);
  while (stars.length < 5) stars.push(<span key={stars.length}>☆</span>);

  return stars;
};

export default ProductReviews;
