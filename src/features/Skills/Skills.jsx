import "./Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

//Icons
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import javascript from "../../assets/images/javascript.png";
import react from "../../assets/images/react.png";
import nodejs from "../../assets/images/nodejs.png";
import express from "../../assets/images/express-big.png";
import mongo from "../../assets/images/mongo.png";
import git from "../../assets/images/git.png";
import powershell from "../../assets/images/powershell.png";
import vsc from "../../assets/images/vsc-big.png";

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section class="skills-container">
      <div class="skills-content">
        <div class="skills-header">
          <h2 class="skills-title" data-aos="fade-up">Habilidades</h2>
          <p class="skills-description" data-aos="fade-up">
            Una selección de tecnologías y herramientas que domino y aplico en
            proyectos reales.
          </p>
        </div>
        <div className="skills-box" data-aos="fade-up">
          <div className="skill">
            <img src={html} alt="" className="skill-img" />
          </div>

          <div className="skill">
            <img src={css} alt="" className="skill-img" />
          </div>

          <div className="skill">
            <img src={javascript} alt="" className="skill-img" />
          </div>

          <div className="skill">
            <img src={react} alt="" className="skill-img" />
          </div>

          <div className="skill">
            <img src={nodejs} alt="" className="skill-img" />
          </div>

          <div className="skill">
            <img src={express} alt="" className="skill-img" />
          </div>

          <div className="skill">
            <img src={mongo} alt="" className="skill-img" />
          </div>

          <div className="skill">
            <img src={git} alt="" className="skill-img" />
          </div>

          <div className="skill">
            <img src={powershell} alt="" className="skill-img" />
          </div>

          <div className="skill">
            <img src={vsc} alt="" className="skill-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export { Skills };
