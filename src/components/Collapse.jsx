import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <FaChevronUp className={`icon ${isOpen ? "open" : ""}`} />
      </div>

      {isOpen && (
        <div className="collapse-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}

export default Collapse;
