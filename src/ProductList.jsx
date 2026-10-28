import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './App.css';

function ProductList({ onNavigateHome }) {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Dynamic total items in cart
  const totalItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        {
          name: 'Snake Plant',
          image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1eb6?auto=format&fit=crop&w=500&q=80',
          description: 'Produces oxygen at night and removes toxins from indoor air.',
          cost: '$15',
        },
        {
          name: 'Spider Plant',
          image: 'https://images.unsplash.com/photo-1572688484437-c465d491864b?auto=format&fit=crop&w=500&q=80',
          description: 'Resilient and filters carbon monoxide and xylene.',
          cost: '$12',
        },
        {
          name: 'Peace Lily',
          image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&w=500&q=80',
          description: 'Glossy leaves with elegant white blooms that filter airborne spores.',
          cost: '$18',
        },
        {
          name: 'Boston Fern',
          image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=500&q=80',
          description: 'Natural air humidifier that thrives in moderate to high moisture.',
          cost: '$14',
        },
        {
          name: 'Rubber Plant',
          image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80',
          description: 'Broad shiny leaves that effectively eliminate toxins.',
          cost: '$20',
        },
        {
          name: 'Aloe Vera',
          image: 'https://images.unsplash.com/photo-1567689591468-e02b74724c06?auto=format&fit=crop&w=500&q=80',
          description: 'Purifies indoor air and features medicinal soothing gel.',
          cost: '$10',
        },
      ],
    },
    {
      category: 'Aromatic & Fragrant Plants',
      plants: [
        {
          name: 'Lavender',
          image: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=500&q=80',
          description: 'Calming floral fragrance known to encourage deep, restful sleep.',
          cost: '$16',
        },
        {
          name: 'Jasmine',
          image: 'https://images.unsplash.com/photo-1592729984611-343d65b1e956?auto=format&fit=crop&w=500&q=80',
          description: 'Sweet, exotic floral scent that lifts moods and relieves stress.',
          cost: '$22',
        },
        {
          name: 'Rosemary',
          image: 'https://images.unsplash.com/photo-1515586000433-a5ac7488aa16?auto=format&fit=crop&w=500&q=80',
          description: 'Invigorating woody aroma also great for culinary recipes.',
          cost: '$11',
        },
        {
          name: 'Mint',
          image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=500&q=80',
          description: 'Crisp, refreshing aroma that naturally repels pests.',
          cost: '$9',
        },
        {
          name: 'Eucalyptus',
          image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=500&q=80',
          description: 'Distinctive menthol fragrance promoting clear breathing.',
          cost: '$19',
        },
        {
          name: 'Lemon Balm',
          image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=500&q=80',
          description: 'Citrusy, calming scent ideal for study desks and kitchens.',
          cost: '$13',
        },
      ],
    },
    {
      category: 'Low Maintenance & Succulents',
      plants: [
        {
          name: 'ZZ Plant',
          image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=500&q=80',
          description: 'Virtually indestructible; tolerates drought and low-light corners.',
          cost: '$24',
        },
        {
          name: 'Pothos',
          image: 'https://images.unsplash.com/photo-1596724803697-39149495bcf5?auto=format&fit=crop&w=500&q=80',
          description: 'Fast-growing trailing vine that thrives on occasional neglect.',
          cost: '$13',
        },
        {
          name: 'Cast Iron Plant',
          image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80',
          description: 'True to its name, endures poor light and temperature swings.',
          cost: '$25',
        },
        {
          name: 'Jade Plant',
          image: 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?auto=format&fit=crop&w=500&q=80',
          description: 'Symbol of good luck with plump, water-retaining leaves.',
          cost: '$15',
        },
        {
          name: 'Haworthia',
          image: 'https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=500&q=80',
          description: 'Small, striped succulent perfect for windowsills and office desks.',
          cost: '$8',
        },
        {
          name: 'Echeveria',
          image: 'https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=500&q=80',
          description: 'Rose-shaped succulent that needs minimal watering and bright light.',
          cost: '$10',
        },
      ],
    },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isPlantInCart = (plantName) => {
    return cartItems.some((item) => item.name === plantName);
  };

  return (
    <div>
      {/* Navbar common across both views */}
      <nav className="navbar">
        <div className="nav-logo" onClick={onNavigateHome}>
          <h2>Paradise Nursery</h2>
        </div>
        <div className="nav-links">
          <button onClick={onNavigateHome}>Home</button>
          <button onClick={() => setShowCart(false)}>Plants</button>
          <button className="cart-icon-btn" onClick={() => setShowCart(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span className="cart-count">{totalItemCount}</span>
          </button>
        </div>
      </nav>

      {/* View Toggle */}
      {!showCart ? (
        <div className="product-grid-container">
          {plantsArray.map((cat, idx) => (
            <section key={idx} className="category-section">
              <h2 className="category-title">{cat.category}</h2>
              <div className="product-cards">
                {cat.plants.map((plant, pIdx) => {
                  const added = isPlantInCart(plant.name);
                  return (
                    <div key={pIdx} className="product-card">
                      <img src={plant.image} alt={plant.name} />
                      <h3 className="product-title">{plant.name}</h3>
                      <p className="product-description">{plant.description}</p>
                      <p className="product-price">{plant.cost}</p>
                      <button
                        className="add-to-cart-btn"
                        disabled={added}
                        onClick={() => handleAddToCart(plant)}
                      >
                        {added ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      )}
    </div>
  );
}

export default ProductList;