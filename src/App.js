import React from 'react';
import logo from './images/logo.png';
import './App.css';
import Shop from './Shop/Shop';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="ema-john-app-header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </header>
      <nav className="nav">
        <ul>
          <li><a href="Shop">Shop</a></li>
          <li><a href="Review">Order Review</a></li>
          <li><a href="Manage">Manage Inventory here</a></li>
        </ul>
      </nav>
      <div className="searchBar_and_cart">
        <form action="" className="searchBar_and_cart_option">
          <input type="text" value="" placeholder='type here to search....' />
          <a href="cart" className="cart">
            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-cart-fill cart_img" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
            </svg>
            <span id="cart_item_amount">0</span>
          </a>
        </form>
      </div>
      <Shop></Shop>
      
      <Footer></Footer>
    </div>
  );
}

export default App;