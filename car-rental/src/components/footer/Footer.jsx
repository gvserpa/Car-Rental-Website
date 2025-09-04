import "./index.css";
import arrow from "../../assets/arrow-right-line.png";
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer>
      <div className="terms-privacy">
        <a>Terms</a>
        <a>Privacy</a>
      </div>
      <div className="footer-nav">
        <Link to="/">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/cars">Cars</Link>
      </div>
      <div className="subscribe">
        <div className="subscribe-content">
          <h3>Subscribe to News</h3>
          <div className="input-img">
            <input type="email" />
            <button>
              <img src={arrow} alt="arrow" />
            </button>
          </div>
          <img src={logo} alt="logo" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
