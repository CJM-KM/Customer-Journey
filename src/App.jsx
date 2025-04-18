// App.jsx
import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Categories from './Pages/Categories';
import CategoryProducts from './Pages/CategoryProducts';
import ProductReviews from './Pages/ProductReviews.jsx';
import ProductDetails from './Components/ProductDetails.jsx';
import About from './Pages/About';
import ReviewForm from './Components/ReviewForm';
import Login from './Pages/Login';
import Admin from './Pages/Admin.jsx';
import './App.css';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);
  const [categories, setCategories] = useState([
    { id: 1, name: "Smartphones", icon: "📱" },
    { id: 2, name: "Laptops", icon: "💻" },
    { id: 3, name: "Fragrances", icon: "🌸" },
    { id: 4, name: "Skincare", icon: "🧴" },
    { id: 5, name: "Groceries", icon: "🛒" },
    { id: 6, name: "Home-decoration", icon: "🏠" }
  ]);

  const username = "Mayuri";

  const handleLogin = (loggedInRole) => {
    setIsAuthenticated(true);
    setRole(loggedInRole);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setRole(null);
  };

  return (
    <Router>
      <div className="app">
        {!isAuthenticated ? (
          <Login onLogin={handleLogin} />
        ) : (
          <>
            <Navbar username={username} onLogout={handleLogout} />
            <Routes>
              <Route path="/" element={<Home username={username} />} />
              <Route path="/categories" element={<Categories role={role} categories={categories} setCategories={setCategories} />} />
              <Route path="/category/:categoryId" element={<CategoryProducts />} />
              <Route path="/product/:productId" element={<ProductReviews />} />
              <Route path="/about" element={<About />} />
              <Route path="/write_review" element={<ReviewForm />} />
              <Route path="/productdetails/:productId" element={<ProductDetails />} />
              <Route path="/admin" element={<Admin/>}></Route>
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;