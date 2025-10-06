
function Banner({ image, title, className }) {
  return (
    <section
      className={`banner ${className}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {title && <h1>{title}</h1>}
    </section>
  );
}

export default Banner;