import React, { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          <h1 className="landing-title">Paradise Nursery</h1>
          <div className="landing-divider"></div>
          <p className="landing-tagline">
            Where Greenery Meets Serenity. Discover plants that breathe fresh life and tranquility into your living spaces.
          </p>
          <button className="get-started-button" onClick={handleGetStarted}>
            Get Started
          </button>
          <AboutUs />
        </div>
      ) : (
        <ProductList onNavigateHome={() => setShowProductList(false)} />
      )}
    </div>
  );
}

export default App;