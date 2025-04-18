import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    serviceProvider: '',
    quality: 0,
    price: 0,
    reliability: 0,
    features: 0,
    support: 0,
    easyToUse: 0,
    recommend: '',
    activeUser: '',
    reviewText: '',
    name: '',
    email: ''
  });

  const categories = [
    { id: 'quality', label: 'Quality' },
    { id: 'price', label: 'Price' },
    { id: 'reliability', label: 'Reliability' },
    { id: 'features', label: 'Features' },
    { id: 'support', label: 'Support' },
    { id: 'easyToUse', label: 'Easy to use' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleStarRating = (category, rating) => {
    setFormData({
      ...formData,
      [category]: rating
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thanks for your review!');
  };

  const StarRating = ({ category, value }) => {
    return (
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= formData[category] ? 'filled' : ''}`}
            onClick={() => handleStarRating(category, star)}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="review-form-container">
      <h1>Submit Your Review</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <label>Service provider</label>
          <input
            type="text"
            name="serviceProvider"
            value={formData.serviceProvider}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-section rating-section">
          <div className="rating-label">
            <label>Rate and review your experience</label>
          </div>
          <div className="rating-table">
            {categories.map((category) => (
              <div className="rating-row" key={category.id}>
                <span className="rating-category">{category.label}</span>
                <StarRating category={category.id} value={formData[category.id]} />
              </div>
            ))}
          </div>
        </div>

        <div className="form-section">
          <label>Would you recommend this provider?</label>
          <div className="button-group">
            <button
              type="button"
              className={`option-button ${formData.recommend === 'Yes' ? 'selected' : ''}`}
              onClick={() => setFormData({ ...formData, recommend: 'Yes' })}
            >
              Yes
            </button>
            <button
              type="button"
              className={`option-button ${formData.recommend === 'No' ? 'selected' : ''}`}
              onClick={() => setFormData({ ...formData, recommend: 'No' })}
            >
              No
            </button>
          </div>
        </div>

        <div className="form-section">
          <label>Are you currently an active user?</label>
          <div className="button-group">
            <button
              type="button"
              className={`option-button ${formData.activeUser === 'Yes' ? 'selected' : ''}`}
              onClick={() => setFormData({ ...formData, activeUser: 'Yes' })}
            >
              Yes
            </button>
            <button
              type="button"
              className={`option-button ${formData.activeUser === 'No' ? 'selected' : ''}`}
              onClick={() => setFormData({ ...formData, activeUser: 'No' })}
            >
              No
            </button>
          </div>
        </div>

        <div className="form-section">
          <label>Your Review</label>
          <textarea
            name="reviewText"
            value={formData.reviewText}
            onChange={handleInputChange}
            rows="5"
            required
          ></textarea>
        </div>

        <div className="form-section">
          <label>Your name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-section">
          <label>E-mail</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="privacy-notice">
          Your name and email will not be displayed.
        </div>

        <button type="submit" className="submit-button">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;