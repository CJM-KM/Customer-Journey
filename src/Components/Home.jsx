

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar.jsx';
import '../Components/Home.css';
import '../Components/ReviewForm.jsx';
import ReviewImg from '../assets/Review.png';

const Home = ({ username }) => {
  const navigate = useNavigate();

 
  
 
  return (
    <>
      <div className="main-section">
        {/* LEFT STACKED CARDS */}
        <div className="left-stack">
          <img src={ReviewImg}></img>
        </div>

        {/* RIGHT CTA */}
        <div className="cta-box">
          <h2>
            <span className="highlight1">Using software?</span><br />
            Write a review.
          </h2>
          <p>Help over 5 million monthly Buyers on G2 make the right choice for their business.</p>
          <button onClick={() => navigate('/write_review')}>Write a Review</button>
        </div>
      </div>

     
    </>
  );
};

export default Home;
