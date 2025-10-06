import { Link } from "react-router-dom";
import "../Styles/header.css";

function Header() {
  return (
    <header>
      <div className="header-container">
        <img className="logo" src="/src/components/Images/LOGO.png" alt="logo"></img>
        <div className="nav-links">
          <Link to="/">Accueil</Link>
          <Link to="/about">À propos</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
