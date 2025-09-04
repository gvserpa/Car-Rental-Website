import { useState } from "react";
import './index.css'
import logo from "../../assets/logo.png"
import apple from "../../assets/apple.png"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()


  return (
    <header className='header'>
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt='logo car rental' />
        <h2>CarRental</h2>
      </div>

      {/* Menu de navegação */}
      <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/cars">Cars</Link>
      </nav>

      {/* Botão */}
      <div className="header-button">
        <button>
          <img src={apple} alt="Apple logo" />
          Download App
        </button>
      </div>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Header;
