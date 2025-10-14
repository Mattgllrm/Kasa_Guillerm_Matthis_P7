import Banner from "../components/Banner";
import banner1 from "../components/Images/banner1.png"; 
import apartments from "../data/logements.json";
import Card from "../components/Card";

function Home() {
  return (
    <>
      <Banner image={banner1} title="Chez vous, partout et ailleurs" />
      
      <section className="cards-section">
        {apartments.map((apt) => (
          <Card
            key={apt.id}
            id={apt.id}           
            title={apt.title}
            cover={apt.cover}
          />
        ))}
      </section>
    </>
  );
}

export default Home;
