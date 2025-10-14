import { useState } from "react";
import chevron from "../components/Images/chevron-up.svg";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <img
          src={chevron}
          alt="Flèche"
          className={`icon ${isOpen ? "open" : ""}`}
        />
      </div>

      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
}

export default Collapse;


