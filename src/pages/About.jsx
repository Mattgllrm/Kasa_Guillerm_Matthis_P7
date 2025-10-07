/*import Banner from "../components/Banner";
import aboutBanner from "../components/Images/banner2.png";

function About() {
 return (
    <>
      <Banner image={aboutBanner} title="" />
      <h2>Select</h2>
      <p>............</p>
    </>
  );
}
export default About;
*/






import Banner from "../components/Banner";
import aboutBanner from "../components/Images/banner2.png";
import Collapse from "../components/Collapse";
import  "../Styles/About.css"

function About() {
  const aboutSections = [
    {
      title: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou perturbant le voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      content:
        "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.",
    },
    {
      title: "Sécurité",
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <main className="about-page">
      <Banner image={aboutBanner} title="" />

      <section className="about-content">
        {aboutSections.map((section, index) => (
          <Collapse
            key={index}
            title={section.title}
            content={section.content}
          />
        ))}
      </section>
    </main>
  );
}

export default About;
