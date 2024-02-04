import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="wave-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-logo-img"
      />
      <p className="wave-title">Wave</p>
    </div>
    <ul className="nav-menu">
      <Link className="nav-link" to="/">
        <li>Home</li>
      </Link>
      <Link className="nav-link" to="/about">
        <li>About</li>
      </Link>
      <Link className="nav-link" to="/contact">
        <li>Contact</li>
      </Link>
    </ul>
  </nav>
)

export default Header
