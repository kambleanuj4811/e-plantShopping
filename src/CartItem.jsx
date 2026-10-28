import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './App.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Helper to parse numeric cost from string (e.g., "$15" -> 15)
  const parseCost = (costStr) => {
    return parseFloat(costStr.replace('$', '')) || 0;
  };

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + parseCost(item.cost) * item.quantity, 0);
  };

  // Calculate subtotal for an individual item
  const calculateTotalCost = (item) => {
    return parseCost(item.cost) * item.quantity;
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference');
  };

  return (
    <div className="cart-page-container">
      <h2 className="cart-header-title">Your Shopping Cart</h2>

      <div className="cart-summary">
        <span>Total Items: {cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
        <span>Total Cart Amount: ${calculateTotalAmount().toFixed(2)}</span>
      </div>

      {cart.length === 0 ? (
        <p style={{ textAlign: 'center', margin: '40px 0' }}>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div className="cart-item-card" key={item.name}>
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>Unit Price: {item.cost}</p>
                <p>Subtotal: ${calculateTotalCost(item).toFixed(2)}</p>
              </div>
              <div className="quantity-controls">
                <button className="qty-btn" onClick={() => handleDecrement(item)}>-</button>
                <span>{item.quantity}</span>
                <button className="qty-btn" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <button className="delete-btn" onClick={() => handleRemove(item)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="cart-actions">
        <button className="continue-btn" onClick={onContinueShopping}>
          Continue Shopping
        </button>
        <button className="checkout-btn" onClick={handleCheckoutShopping}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;