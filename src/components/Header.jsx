import { NavLink } from "react-router-dom";
import "../Styles/header.css";

function Header() {
  return (
    <header>
      <div className="header-container">
        <img className="logo" src="/src/components/Images/LOGO.png" alt="logo" />
        <div className="nav-links">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Accueil
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? "active" : ""}
          >
            À propos
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
