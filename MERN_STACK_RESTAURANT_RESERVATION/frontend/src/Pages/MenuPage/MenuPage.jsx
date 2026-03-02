import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import Footer from '../../components/Footer';
import './MenuPage.css';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('veg');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const vegMenu = {
    starters: [
      "Sweet Corn Soup",
      "Hot & Sour Soup",
      "Paneer Tikka",
      "Paneer 65",
      "Mushroom Tikka Masala",
      "Veg Manchurian",
      "Spring Rolls",
      "Crispy Corn"
    ],
    paneerSpecials: [
      "Paneer Tikka Masala",
      "Paneer Butter Masala",
      "Kadhai Paneer",
      "Palak Paneer",
      "Shahi Paneer",
      "Paneer Bhurji",
      "Paneer Do Pyaza",
      "Matar Paneer"
    ],
    dalVarieties: [
      "Dal Makhani",
      "Dal Tadka",
      "Dal Fry",
      "Yellow Dal",
      "Palak Dal"
    ],
    riceOptions: [
      "Jeera Rice",
      "Veg Pulao",
      "Kashmiri Pulao",
      "Peas Pulao",
      "Plain Rice",
      "Veg Biryani",
      "Paneer Biryani"
    ],
    breadOptions: [
      "Tandoori Roti",
      "Butter Roti",
      "Naan",
      "Butter Naan",
      "Garlic Naan",
      "Cheese Naan",
      "Kulcha",
      "Paratha"
    ],
    accompaniments: [
      "Raita",
      "Papad",
      "Pickle",
      "Salad",
      "Green Chutney",
      "Onion Rings"
    ],
    desserts: [
      "Hot Gulab Jamun",
      "Ice Cream",
      "Rasmalai",
      "Gajar Halwa",
      "Kheer"
    ]
  };

  const nonVegMenu = {
    drinks: [
      "Coke",
      "Pepsi",
      "Sprite",
      "Fresh Lime Soda",
      "Masala Chaas",
      "Sweet Lassi",
      "Mango Shake"
    ],
    starters: [
      "Chicken 65",
      "Chicken Tikka",
      "Chicken Lollipop",
      "Tandoori Chicken",
      "Chicken Wings",
      "Garlic Chicken",
      "Pepper Chicken",
      "Chicken Manchurian"
    ],
    chickenSpecials: [
      "Butter Chicken",
      "Kadhai Chicken",
      "Chicken Tikka Masala",
      "Chicken Curry",
      "Chicken Do Pyaza",
      "Chicken Korma",
      "Chicken Vindaloo",
      "Palak Chicken",
      "Chicken Rogan Josh"
    ],
    muttonSpecials: [
      "Mutton Rogan Josh",
      "Mutton Korma",
      "Mutton Curry",
      "Kadhai Mutton"
    ],
    dalVarieties: [
      "Dal Makhani",
      "Dal Tadka",
      "Dal Fry",
      "Yellow Dal"
    ],
    riceOptions: [
      "Jeera Rice",
      "Chicken Biryani",
      "Mutton Biryani",
      "Egg Biryani",
      "Fried Rice",
      "Plain Rice"
    ],
    breadOptions: [
      "Tandoori Roti",
      "Butter Roti",
      "Naan",
      "Butter Naan",
      "Garlic Naan",
      "Keema Naan",
      "Kulcha"
    ],
    accompaniments: [
      "Raita",
      "Papad",
      "Pickle",
      "Salad"
    ],
    desserts: [
      "Hot Gulab Jamun",
      "Ice Cream",
      "Rasmalai",
      "Kheer"
    ]
  };

  return (
    <>
      <div className="menu-page">
        <div className="menu-header">
          <Link to="/" className="back-button">
            <HiOutlineArrowNarrowLeft /> Back to Home
          </Link>
          <h1 className="menu-title">Our Exquisite Menu</h1>
          <p className="menu-subtitle">Discover the finest flavors crafted with passion</p>
        </div>

      <div className="menu-category-tabs">
        <button 
          className={`category-tab ${activeCategory === 'veg' ? 'active' : ''}`}
          onClick={() => setActiveCategory('veg')}
        >
          <span className="veg-icon">🌿</span> Vegetarian Menu
        </button>
        <button 
          className={`category-tab ${activeCategory === 'nonveg' ? 'active' : ''}`}
          onClick={() => setActiveCategory('nonveg')}
        >
          <span className="nonveg-icon">🍗</span> Non-Vegetarian Menu
        </button>
      </div>

      <div className="menu-content">
        {activeCategory === 'veg' ? (
          <div className="menu-sections">
            {/* Starters */}
            <div className="menu-section">
              <div className="section-header">
                <h2 className="section-title">Starters (Any Two)</h2>
                <div className="section-line"></div>
              </div>
              <div className="menu-grid">
                {vegMenu.starters.map((item, index) => (
                  <div className="menu-item" key={index}>
                    <span className="item-bullet">•</span>
                    <span className="item-name">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Paneer Specials */}
            <div className="menu-section highlight-section">
              <div className="section-header">
                <h2 className="section-title">Choice of Paneer (Mushroom)</h2>
                <div className="section-line"></div>
              </div>
              <div className="menu-grid">
                {vegMenu.paneerSpecials.map((item, index) => (
                  <div className="menu-item featured" key={index}>
                    <span className="item-bullet">★</span>
                    <span className="item-name">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dal Varieties */}
            <div className="menu-section">
              <div className="section-header">
                <h2 className="section-title">Choice of Dal</h2>
                <div className="section-line"></div>
              </div>
              <div className="menu-grid">
                {vegMenu.dalVarieties.map((item, index) => (
                  <div className="menu-item" key={index}>
                    <span className="item-bullet">•</span>
                    <span className="item-name">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rice Options */}
            <div className="menu-section">
              <div className="section-header">
                <h2 className="section-title">Choice of Rice</h2>
                <div className="section-line"></div>
              </div>
              <div className="menu-grid">
                {vegMenu.riceOptions.map((item, index) => (
                  <div className="menu-item" key={index}>
                    <span className="item-bullet">•</span>
                    <span className="item-name">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bread Options */}
            <div className="menu-section">
              <div className="section-header">
                <h2 className="section-title">Choice of Bread</h2>
                <div className="section-line"></div>
              </div>
              <div className="menu-grid">
                {vegMenu.breadOptions.map((item, index) => (
                  <div className="menu-item" key={index}>
                    <span className="item-bullet">•</span>
                    <span className="item-name">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Accompaniments */}
            <div className="menu-section">
              <div className="section-header">
                <h2 className="section-title">Accompaniments</h2>
                <div className="section-line"></div>
              </div>
              <div className="menu-grid">
                {vegMenu.accompaniments.map((item, index) => (
                  <div className="menu-item" key={index}>
                    <span className="item-bullet">•</span>
                    <span className="item-name">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Desserts */}
            <div className="menu-section highlight-section">
              <div className="section-header">
                <h2 className="section-title">Desserts</h2>
                <div className="section-line"></div>
              </div>
              <div className="menu-grid">
                {vegMenu.desserts.map((item, index) => (
                  <div className="menu-item featured" key={index}>
                    <span className="item-bullet">♥</span>
                    <span className="item-name">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="menu-sections">
            {/* Drinks */}
            <div className="menu-section">
              <div className="section-header">
                <h2 className="section-title">Drinks (Any One)</h2>
                <div className="section-line"></div>
              </div>
              <div className="menu-grid">
                {nonVegMenu.drinks.map((item, index) => (
                  <div className="menu-item" key={index}>
                    <span className="item-bullet">•</span>
                    <span className="item-name">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Starters */}
            <div className="menu-section">
              <div className="section-header">
                <h2 className="section-title">Starters (Any Two)</h2>
                <div className="section-line"></div>
              </div>
              <div className="menu-grid">
                {nonVegMenu.starters.map((item, index) => (
                  <div className="menu-item" key={index}>
                    <span className="item-bullet">•</span>
                    <span className="item-name">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chicken Specials */}
            <div className="menu-section highlight-section">
              <div className="section-header">
                <h2 className="section-title">Choice of Chicken</h2>
                <div className="section-line"></div>
              </div>
              <div className="menu-grid">
                {nonVegMenu.chickenSpecials.map((item, index) => (
                  <div className="menu-item featured" key={index}>
                    <span className="item-bullet">★</span>
                    <span className="item-name">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mutton Specials */}
            <div className="menu-section highlight-section">
              <div className="section-header">
                <h2 className="section-title">Choice of Mutton</h2>
                <div className="section-line"></div>
              </div>
              <div className="menu-grid">
                {nonVegMenu.muttonSpecials.map((item, index) => (
                  <div className="menu-item featured" key={index}>
                    <span className="item-bullet">★</span>
                    <span className="item-name">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dal Varieties */}
            <div className="menu-section">
              <div className="section-header">
                <h2 className="section-title">Choice of Dal</h2>
                <div className="section-line"></div>
              </div>
              <div className="menu-grid">
                {nonVegMenu.dalVarieties.map((item, index) => (
                  <div className="menu-item" key={index}>
                    <span className="item-bullet">•</span>
                    <span className="item-name">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rice Options */}
            <div className="menu-section">
              <div className="section-header">
                <h2 className="section-title">Choice of Rice</h2>
                <div className="section-line"></div>
              </div>
              <div className="menu-grid">
                {nonVegMenu.riceOptions.map((item, index) => (
                  <div className="menu-item" key={index}>
                    <span className="item-bullet">•</span>
                    <span className="item-name">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bread Options */}
            <div className="menu-section">
              <div className="section-header">
                <h2 className="section-title">Choice of Bread</h2>
                <div className="section-line"></div>
              </div>
              <div className="menu-grid">
                {nonVegMenu.breadOptions.map((item, index) => (
                  <div className="menu-item" key={index}>
                    <span className="item-bullet">•</span>
                    <span className="item-name">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Accompaniments */}
            <div className="menu-section">
              <div className="section-header">
                <h2 className="section-title">Accompaniments</h2>
                <div className="section-line"></div>
              </div>
              <div className="menu-grid">
                {nonVegMenu.accompaniments.map((item, index) => (
                  <div className="menu-item" key={index}>
                    <span className="item-bullet">•</span>
                    <span className="item-name">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Desserts */}
            <div className="menu-section highlight-section">
              <div className="section-header">
                <h2 className="section-title">Desserts</h2>
                <div className="section-line"></div>
              </div>
              <div className="menu-grid">
                {nonVegMenu.desserts.map((item, index) => (
                  <div className="menu-item featured" key={index}>
                    <span className="item-bullet">♥</span>
                    <span className="item-name">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>

      <div className="menu-footer">
        <p className="footer-note">All items are subject to availability. Please ask your server for today's specials.</p>
        <Link to="/" className="reserve-button">Make a Reservation</Link>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default MenuPage;