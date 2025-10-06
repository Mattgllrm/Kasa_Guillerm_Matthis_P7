

import React from "react";
import "../Styles/Footer.css"; 
import logo from "./Images/logo-footer.png"; 

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo Kasa" className="footer-logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
