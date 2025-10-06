import "../Styles/Cards.css";

function Card({ title, cover }) {
  return (
    <div className="card">
      <img src={cover} alt={title} />
      <div className="card-title">{title}</div>
    </div>
  );
}

export default Card;
