import "./About.css";
import Lottie from "lottie-react";

//Image
import animationData from "../../assets/images/animation.json";

function About() {
  return (
    <section class="section-container">
      <div class="section-content">
        <div class="box">
          <div class="box-info">
            <h3 class="box-title">
              Transformando ideas en experiencias digitales
            </h3>
            <p class="box-text">
              Soy un desarrollador Full-Stack especializado en el stack MERN,
              con más de seis años de experiencia autodidacta y una profunda
              pasión por crear soluciones digitales que combinan funcionalidad,
              diseño y propósito. Actualmente formo parte de AInstein, una
              startup de inteligencia artificial enfocada en la implementación
              de tecnologías inteligentes para empresas. Mi enfoque va más allá
              del código: creo que el diseño es una parte fundamental de la
              propuesta de valor de cualquier producto, y por eso busco que cada
              solución no solo funcione bien, sino que también conecte visual y
              emocionalmente con quienes la usan.
            </p>
            <button class="box-button">¡Interesante! 😀</button>
          </div>

          <div class="box-image">
            <Lottie animationData={animationData} loop={true} />
          </div>
        </div>
      </div>
    </section>
  );
}

export { About };
