import { Link } from "react-router-dom";
import "../Styles/Error.css"; 

function Error() {
  return (
    <main className="error-page">
      <h1>404</h1>
      <p>Oups ! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="error-link">Retourner sur la page d'accueil</Link>
    </main>
  );
}

export default Error;
