// src/components/CategoryProducts.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CategoryProducts.css';

const CategoryProducts = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${categoryId}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
      });
  }, [categoryId]);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="category-container">
      <div className="back-button-container">
        <button onClick={() => navigate('/categories')} className="back-button"  style={{
            backgroundColor: '#007bff',
            marginTop:'20px',
            color: 'white',
            border: 'none',
            padding: '0.6rem 1rem',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '1rem',
          }}>
          ← Back to Categories
        </button>
      </div>

      <h2 className="category-title">Products in: {decodeURIComponent(categoryId)}</h2>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <div className="product-horizontal-card" key={product.id}>
              {/* Left image */}
              <div className="left-image-container">
                <div className="discount-badge">EXTRA ₹400 OFF</div>
                <img src={product.thumbnail} alt={product.title} className="product-image" />
                <div className="highlight-bar">40 Hours Playback</div>
              </div>

              {/* Right info */}
              <div className="product-details">
                <div className="rating-line">
                  ⭐ {product.rating} | <span className="stock">{product.stock}✅</span>
                </div>

                <h3 className="product-title">{product.title}</h3>

                <div className="price-section">
                  <span className="price">₹{product.price}</span>
                  <span className="original-price">₹{product.price + 1000}</span>
                  <span className="discount">48% off</span>
                </div>

                <div className="features-row">
                  <span className="feature-pill">ASAP™ Charge</span>
                  <span className="feature-pill">BEAST™ Mode</span>
                </div>

                <button
                  className="view-reviews-btn"
                  onClick={() => handleProductClick(product.id)}
                >
                  View Reviews
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryProducts;
