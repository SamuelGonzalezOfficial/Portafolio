import "./Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

//Images
import tacosPage from "../../assets/images/tacos-page.png";

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section class="projects-container">
      <div class="projects-content">
        <div class="projects-header">
          <h2 class="projects-title" data-aos="fade-up">
            Proyectos
          </h2>
          <p class="projects-description" data-aos="fade-up">
            Una colección de proyectos desarrollados como parte de mi formación
            continua y exploración creativa. Cada uno fue diseñado para
            perfeccionar mis habilidades técnicas, experimentar con nuevas
            herramientas y construir soluciones que reflejen mi estilo, lógica y
            atención al detalle.
          </p>
        </div>

        <div className="projects-cards" data-aos="fade-up">
          <div className="projects-card">
            <div className="projects-card-image">
              <img
                src={tacosPage}
                alt="Proyecto Node.js"
                className="projects-card-img"
              />
            </div>
            <div className="projects-card-text">
              <h3 className="projects-card-title">
                Landing Page Restaurante 🍽️
              </h3>
              <p className="projects-card-description">
                Este es un sitio One-Page construído con ReactJS ideal para
                pequeños negocios que buscan una presencia el línea lo más
                rápido posible para presentar su negocio al mundo. Incluye la
                ubicación del negocio en un Google Maps, botón para ir a un chat
                de Whatsapp con su negocios y demás.
              </p>
              <button className="projects-card-button">
                <a
                  href="https://sample-taco.vercel.app/"
                  className="projects-card-button-link"
                >
                  Ver Demo 👀
                </a>
              </button>
            </div>
          </div>

          <div className="projects-card">
            <div className="projects-card-image">
              <img
                src="/src/assets/images/quicknotes.jpeg"
                alt="Proyecto React"
                className="projects-card-img"
              />
            </div>
            <div className="projects-card-text">
              <h3 className="projects-card-title">Nombre del Proyecto</h3>
              <p className="projects-card-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                obcaecati maxime consequatur tenetur praesentium accusantium
                ducimus quia asperiores nesciunt. Impedit?
              </p>
              <button className="projects-card-button">
                <a
                  href="https://sample-taco.vercel.app/"
                  className="projects-card-button-link"
                >
                  Ver Demo 👀
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Projects };
