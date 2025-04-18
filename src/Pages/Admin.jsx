import React from 'react';
import './Admin.css';

const Admin = () => {
  const reviewSummary = {
    avgRating: 4.2,
    ratingsData: [
      { stars: 5, percent: 50, count: 100 },
      { stars: 4, percent: 25, count: 50 },
      { stars: 3, percent: 15, count: 30 },
      { stars: 2, percent: 7, count: 14 },
      { stars: 1, percent: 3, count: 6 }
    ]
  };

  const categoryStats = [
    { category: 'Smartphones', avgRating: 4.3, commentCount: 120 },
    { category: 'Laptops', avgRating: 4.0, commentCount: 85 },
    { category: 'Earbuds', avgRating: 3.8, commentCount: 65 },
    { category: 'Watches', avgRating: 4.5, commentCount: 90 }
  ];

  const allReviews = [
    {
      id: 1,
      username: 'mayuri123',
      product: 'boAt Airdopes 161',
      rating: 5,
      comment: 'Amazing sound quality and battery backup!',
      date: '2025-04-15'
    },
    {
      id: 2,
      username: 'john_doe',
      product: 'boAt Rockerz 255',
      rating: 4,
      comment: 'Comfortable and value for money.',
      date: '2025-04-14'
    },
    {
      id: 3,
      username: 'sana_k',
      product: 'boAt Xtend Smartwatch',
      rating: 3,
      comment: 'Features are okay but display could be better.',
      date: '2025-04-13'
    },
    {
      id: 4,
      username: 'rajesh',
      product: 'boAt Airdopes 381',
      rating: 2,
      comment: 'Disconnects frequently. Not happy.',
      date: '2025-04-12'
    }
  ];

  return (
    <div className="admin-dashboard">
      {/* Top Summary Boxes */}
      <div className="summary-boxes">
        <div className="summary-box">Total Reviews: 245</div>
        <div className="summary-box">Total Users: 120</div>
        <div className="summary-box">Categories: 4</div>
        <div className="summary-box">Products: 20</div>
      </div>

      {/* Rating Summary */}
      <div className="rating-summary-section">
        <h3>Review Summary</h3>
        <p>Average Rating: ⭐ {reviewSummary.avgRating}</p>
        {reviewSummary.ratingsData.map((rating) => (
          <div key={rating.stars} className="rating-bar">
            <span>{rating.stars} ★</span>
            <div className="bar-container">
              <div
                className="bar-fill"
                style={{ width: `${rating.percent}%` }}
              ></div>
            </div>
            <span>{rating.percent}%</span>
          </div>
        ))}
      </div>

      <div className="bottom-section">
        {/* Category Table */}
        <div className="category-table">
          <h3>Category Stats</h3>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Avg Rating</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              {categoryStats.map((item, index) => (
                <tr key={index}>
                  <td>{item.category}</td>
                  <td>{item.avgRating}</td>
                  <td>{item.commentCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* All Reviews */}
        <div className="review-list">
          <h3>All Reviews</h3>
          <ul>
            {allReviews.map((review) => (
              <li key={review.id}>
                <strong>{review.username}</strong> reviewed <em>{review.product}</em>:
                <br />
                ⭐ {review.rating} - {review.comment}
                <br />
                <small>{review.date}</small>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admin;
