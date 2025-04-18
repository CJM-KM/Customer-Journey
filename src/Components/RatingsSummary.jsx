// src/components/RatingsSummary.jsx
import React from 'react';
import './src/Components/RatingsSummary.css';

const RatingsSummary = ({ ratingsData }) => {
  const totalReviews = ratingsData.reduce((sum, r) => sum + r.count, 0);
  const averageRating = (
    ratingsData.reduce((sum, r) => sum + r.stars * r.count, 0) / totalReviews
  ).toFixed(1);

  return (
    <div className="ratings-summary">
      <div className="left">
        <h2>Verified Reviews:</h2>
        <div className="avg-stars">
          {renderStars(Math.round(averageRating))}
        </div>
        <p>Based on {totalReviews} reviews</p>
      </div>

      <div className="middle">
        {ratingsData.map((rating) => {
          const percent = ((rating.count / totalReviews) * 100).toFixed(0);
          return (
            <div className="rating-row" key={rating.stars}>
              <span className="stars">{renderStars(rating.stars)}</span>
              <div className="bar-container">
                <div className="bar" style={{ width: `${percent}%` }}></div>
              </div>
              <span className="percentage">{percent}%</span>
              <span className="count">({rating.count})</span>
            </div>
          );
        })}
      </div>

      <div className="right">
        <button className="write-review-btn">Write a review</button>
      </div>
    </div>
  );
};

const renderStars = (count) => {
  return [...Array(5)].map((_, i) => (
    <span key={i} style={{ color: i < count ? '#f0c420' : '#ccc' }}>★</span>
  ));
};

export default RatingsSummary;
