import "./Hero.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section class="banner-container">
      <div class="banner-content">
        <div class="banner-text">
          <h1 class="banner-title" data-aos="fade-up">
            Samuel Gonz&aacute;lez
          </h1>
          <h2 class="banner-subtitle" data-aos="fade-up" data-aos-delay="100">
            Desarrollo profesional de sitios web para negocios, empresas o uso
            personal y profesional
          </h2>
          <div className="button-container" data-aos="fade-up" data-aos-delay="200">
            <button class="banner-button">Ver Proyectos 👀</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Hero };
