import "./Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section class="projects-container">
      <div class="projects-content">
        <div class="projects-header">
          <h2 class="projects-title" data-aos="fade-up">Proyectos</h2>
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
                src="/src/assets/images/quicknotes.jpeg"
                alt="Proyecto QuickNotes"
                className="projects-card-img"
              />
            </div>
            <div className="projects-card-text">
              <h3 className="projects-card-title">QuickNotes</h3>
              <p className="projects-card-description">
                Aplicación de notas con Markdown y sincronización en tiempo
                real. Desarrollada con React y Firebase.
              </p>
              <button className="projects-card-button">Ver Demo 👀</button>
            </div>
          </div>

          <div className="projects-card">
            <div className="projects-card-image">
              <img
                src="/src/assets/images/react-big.png"
                alt="Proyecto React"
                className="projects-card-img"
              />
            </div>
            <div className="projects-card-text">
              <h3 className="projects-card-title">Component Library</h3>
              <p className="projects-card-description">
                Biblioteca reutilizable de componentes React con Storybook.
                Diseño sistemático y documentación interactiva.
              </p>
              <button className="projects-card-button">Ver Demo 👀</button>
            </div>
          </div>

          <div className="projects-card">
            <div className="projects-card-image">
              <img
                src="/src/assets/images/nodejs-big.png"
                alt="Proyecto Node.js"
                className="projects-card-img"
              />
            </div>
            <div className="projects-card-text">
              <h3 className="projects-card-title">API Ecommerce</h3>
              <p className="projects-card-description">
                Backend escalable para plataforma de comercio electrónico. JWT,
                MongoDB y despliegue en AWS.
              </p>
              <button className="projects-card-button">Ver Demo 👀</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Projects };
