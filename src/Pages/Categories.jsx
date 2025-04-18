import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Categories.css';

const Categories = ({ role, categories, setCategories }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    navigate(`/category/${encodeURIComponent(categoryName.toLowerCase())}`);
  };

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      const newCat = {
        id: categories.length + 1,
        name: newCategory,
        icon: "🆕"
      };
      setCategories([...categories, newCat]);
      setNewCategory('');
    }
  };

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="categories-container">
      <h2>Browse <span className="highlight">Categories</span></h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="🔍 Search categories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {role === 'admin' && (
        <div className="add-category-container">
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="Enter new category"
          />
          <button onClick={handleAddCategory}>Add Category</button>
        </div>
      )}

      <div className="categories-grid">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            className="category-card"
            onClick={() => handleCategoryClick(category.name)}
          >
            <div className="card-content">
              <div className="category-icon">{category.icon}</div>
              <div className="category-name">{category.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;