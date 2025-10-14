import "../Styles/Footer.css"; 
import logo from "./Images/logo-footer.png"; 

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo Kasa" className="footer-logo" />
      <p>
          <span>© 2020 Kasa.</span>
        <span>All rights reserved</span>
      </p>
    </footer>
  );
}

export default Footer;
