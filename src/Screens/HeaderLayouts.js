// src/components/Header.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Cmp_logo10.jpg";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import priceListPdf from "../assets/SriGokilaa_pricelist.pdf";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Inject mobile CSS
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = mobileCSS;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <header style={headerStyle} className="header-mobile">
      <div style={logoContainerStyle}>
        <img src={logo} style={logoStyle} alt="Sri Gokilaa Crackers" />
      </div>

      {/* Hamburger Menu */}
      <button className="hamburger-button" onClick={toggleMobileMenu} style={hamburgerButtonStyle}>
        {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <nav className={`nav nav-mobile ${isMobileMenuOpen ? 'nav-open' : ''}`}>
        <ul style={navListStyle} className="nav-list-mobile">
          <li style={navItemStyle}>
            <NavLink to="/" onClick={closeMobileMenu}>Home</NavLink>
          </li>
          <li style={navItemStyle}>
            <NavLink to="/about" onClick={closeMobileMenu}>About Us</NavLink>
          </li>
          <li style={navItemStyle}>
            <NavLink to="/product" onClick={closeMobileMenu}>Purchase Order</NavLink>
          </li>
          <li style={navItemStyle}>
            <NavLink to="/quick-purchase" onClick={closeMobileMenu} special="quick">Quick Order</NavLink>
          </li>
          <li style={navItemStyle}>
            <a
              href={priceListPdf}
              target="_blank"
              rel="noopener noreferrer"
              download="Sri_Gokilaa_Crackers_Price_List.pdf"
              style={priceListLinkStyle}
              onClick={closeMobileMenu}
            >
              <FiDownload size={16} /> Download PriceList
            </a>
          </li>
          <li style={navItemStyle}>
            <NavLink to="/safety" onClick={closeMobileMenu}>Safety Tips</NavLink>
          </li>
          <li style={{ ...navItemStyle, marginTop: '10px' }}>
            <Link to="/AdminLogin" style={loginnavLinkStyle} onClick={closeMobileMenu}>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// Reusable NavLink
const NavLink = ({ to, children, onClick, special }) => {
  const baseStyle = special === "quick" ? quickOrderStyle : navLinkStyle;

  return (
    <Link to={to} style={baseStyle} onClick={onClick}>
      {children}
    </Link>
  );
};

// === STYLES ===
const headerStyle = {
  background: '#541354',
  padding: '0.5rem 2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  color: '#ffffff',
};

const quickOrderStyle = {
  background: 'linear-gradient(90deg, #FFD700, #FF4500, #FFD700)',
  backgroundSize: '200% 200%',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 'bold',
  fontSize: '1rem',
  padding: '0.5rem 1rem',
  borderRadius: '8px',
  display: 'inline-block',
  animation: 'slideBackAndForth 2s ease-in-out infinite alternate', // ← Smooth slide
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
};


const logoContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
};

const logoStyle = {
  height: '50px',
  width: '50px',
  borderRadius: '50%',
  objectFit: 'cover',
  border: '3px solid #FF9800',
  backgroundColor: '#fff',
  overflow: 'hidden',
};

const navListStyle = {
  display: 'flex',
  alignItems: 'center',
  listStyle: 'none',
  gap: '1rem',
  padding: 0,
  margin: 0,
};

const navItemStyle = {
  borderRadius: '30px',
  overflow: 'visible',
  transition: 'all 0.3s ease',
  fontSize: '1rem', // Fixed typo: 'fontsize' → 'fontSize'
};

const navLinkStyle = {
  color: '#ffffff',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '1rem',
  padding: '0.5rem 1rem',
  borderRadius: '8px',
  transition: 'color 0.3s ease',
  outline: 'none',
};

const loginnavLinkStyle = {
  padding: '0.4rem 0.8rem',        // Reduced padding
  background: 'transparent',
  color: '#FFD700',
  textDecoration: 'none',
  borderRadius: '18px',             // Slightly smaller radius
  fontWeight: 'bold',
  fontSize: '0.95rem',              // Slightly smaller font
  border: '1px solid #FFD700',
  transition: 'all 0.3s ease',
  display: 'inline-block',
  boxShadow: '0 0 8px rgba(255, 215, 0, 0.3)',
  animation: 'pulseGold 2.5s infinite alternate',
  margin: '8px 0',                  // Reduced margin
};

const hamburgerButtonStyle = {
  display: 'none',
 background: '#541354',
  color: 'white',
  border: 'none',
  padding: '0.5rem',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
};

const priceListLinkStyle = {
  color: '#ffffff',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '1rem',
  padding: '0.5rem 1rem',
  borderRadius: '8px',
  transition: 'color 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  gap: '0.3rem',
};

// === CSS IN JS (Animations & Mobile) ===
const mobileCSS = `
@keyframes slideBackAndForth {
  0% {
    transform: translateX(0);
    text-shadow: 0 0 5px rgba(255, 215, 0, 0.5);
  }
  50% {
    transform: translateX(6px);
    text-shadow: 0 0 8px rgba(255, 69, 0, 0.6);
  }
  100% {
    transform: translateX(-6px);
    text-shadow: 0 0 8px rgba(255, 215, 0, 0.7);
  }
}

@keyframes pulseGold {
  0% {
    color: #FFD700;
    box-shadow: 0 0 8px rgba(255, 215, 0, 0.4);
    transform: scale(1);
  }
  50% {
    color: #FFA500;
    box-shadow: 0 0 14px rgba(255, 215, 0, 0.7), 0 0 20px rgba(255, 165, 0, 0.5);
    transform: scale(1.05);
  }
  100% {
    color: #FFD700;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
    transform: scale(1);
  }
}
a[href="/AdminLogin"]:hover,
.nav-list-mobile a[href="/AdminLogin"]:hover {
  background: rgba(255, 215, 0, 0.1);
  color: #FFA500 !important;
  box-shadow: 0 0 15px rgba(255, 215, 0, 0.7), 0 0 25px rgba(255, 165, 0, 0.5);
  transform: scale(1.05); /* Smaller scale on hover */
}
/* Desktop - hide hamburger */
@media (min-width: 769px) {
  .hamburger-button {
    display: none !important;
  }
}

/* Mobile Layout */
@media (max-width: 768px) {
  .header-mobile {
    flex-direction: row;
    padding: 0.5rem 1rem;
    justify-content: space-between;
    align-items: center;
    background: #563c5c;
    position: sticky;
    top: 0;
    z-index: 1000;
    color: #ffffff;
  }

  .hamburger-button {
    display: flex !important;
    align-items: center;
    justify-content: center;
    background: #563c5c;
    border: 2px solid #FF9800;
    color: #FF9800;
    border-radius: 8px;
    padding: 0.5rem;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .hamburger-button:hover {
    background-color: rgba(255, 152, 0, 0.1);
    transform: scale(1.1);
  }

  .nav-mobile {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #563c5c;
    border-top: 1px solid rgba(255, 152, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transform: scaleY(0);
    transform-origin: top;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  .nav-mobile.nav-open {
    opacity: 1;
    visibility: visible;
    transform: scaleY(1);
  }

  .nav-list-mobile {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem 1rem;
    margin: 0;
    list-style: none;
  }

  .nav-list-mobile a {
    color: #ffffff;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: color 0.3s ease;
    display: block;
    text-align: center;
    outline: none;
  }

  /* Quick Order - Mobile: Slide Animation */
  .nav-list-mobile a[href="/quick-purchase"] {
    background: linear-gradient(90deg, #FFD700, #FF4500, #FFD700);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: slideBackAndForth 3s ease-in-out infinite alternate;
  }

  /* Login Button - Mobile: Compact Size */
.nav-list-mobile a[href="/AdminLogin"] {
  padding: 0.4rem 0.8rem !important;
  font-size: 0.95rem !important;
  border: 1px solid #FFD700 !important;
  background: transparent !important;
  color: #FFD700 !important;
  box-shadow: 0 0 8px rgba(255, 215, 0, 0.3) !important;
  animation: pulseGold 2.5s infinite alternate !important;
  margin: 8px 0 !important;
  border-radius: 18px !important;
}
  /* Logo */
  .header-mobile img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #FF9800;
    box-shadow: 0 0 15px rgba(255, 152, 0, 0.7);
  }
}

/* Extra Small Devices */
@media (max-width: 480px) {
  .nav-list-mobile a {
    font-size: 1.1rem;
  }

  .nav-list-mobile a[href="/quick-purchase"] {
    font-size: 1.1rem;
  }
}
`;

export default Header;