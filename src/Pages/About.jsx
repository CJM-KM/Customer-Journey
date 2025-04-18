import React, { useState, useEffect } from 'react';
import './About.css';

const AboutPage = () => {
  const [views, setViews] = useState(0);
  const [reviewsCount, setReviewsCount] = useState(0);

  useEffect(() => {
    // Simulate fetching data from an API (or use actual API calls)
    setViews(12500); // Example: Website views
    setReviewsCount(450); // Example: Number of reviews
  }, []);

  return (
    <div className="about-page">
      {/* Header Section */}
      
      {/* About Us Section */}
      <section className="about-section">
        <div className="about-container">
          <h2>About Our Review System</h2>
          <p>Welcome to ReviewSystem! Our platform helps customers find the best products by viewing reviews from real users. We categorize reviews based on product types, so you can easily explore the best-rated products in your category of interest.</p>

          <div className="stats-container">
            <div className="stat-item">
              <h3>Total Views</h3>
              <p className="stat-number">{views}</p>
            </div>
            <div className="stat-item">
              <h3>Total Reviews</h3>
              <p className="stat-number">{reviewsCount}</p>
            </div>
          </div>

          <h3>Why Use ReviewSystem?</h3>
          <ul>
            <li><strong>Organized Reviews:</strong> Browse reviews by product category to find exactly what you're looking for.</li>
            <li><strong>Best Reviews:</strong> Our system highlights the best reviews, so you can make well-informed purchasing decisions.</li>
            <li><strong>User-Friendly:</strong> We’ve made sure our platform is easy to navigate for the best experience.</li>
          </ul>

          <h3>Our Mission</h3>
          <p>Our mission is to provide a trustworthy and easy way to assess products based on customer feedback. We aim to empower consumers with knowledge to make better buying choices.</p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
