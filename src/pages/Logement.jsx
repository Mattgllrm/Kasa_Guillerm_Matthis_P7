import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logements from "../data/logements.json";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse"; 
import "../styles/Logement.css"; 

export default function Logement() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const found = logements.find((l) => l.id === id);
    if (!found) {
      // redirige vers la page 404 si l'id existe pas
      navigate("/404", { replace: true });
      return;
    }
    setLogement(found);
  }, [id, navigate]);

  if (!logement) return null; 

  return (
    <main className="logement-page">
      {}
      <Slideshow pictures={logement.pictures} />

      <section className="logement-header">
        <div className="logement-info">
          <h1 className="logement-title">{logement.title}</h1>
          <p className="logement-location">{logement.location}</p>

          <div className="logement-tags">
            {logement.tags && logement.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="host-rating">
          <div className="host">
            <p className="host-name">{logement.host.name}</p>
            <img
              className="host-picture"
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>

          <div className="rating">
            {}
            {[1, 2, 3, 4, 5].map((n) => (
              <span
                key={n}
                className={n <= Number(logement.rating) ? "star filled" : "star"}
                aria-hidden
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="logement-details">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul>
            {logement.equipments && logement.equipments.map((eq) => (
              <li key={eq}>{eq}</li>
            ))}
          </ul>
        </Collapse>
      </section>
    </main>
  );
}
