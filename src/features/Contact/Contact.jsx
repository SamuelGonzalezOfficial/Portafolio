import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section class="contact-container">
      <div class="contact-content" data-aos="fade-up">
        <div class="contact-box">
          <div class="contact-header">
            <h2 class="contact-title">Cont&aacute;ctame</h2>
            <p class="contact-subtitle">
              ¿Tienes una idea, proyecto o negocio que necesita presencia
              online? Escríbeme y conversemos. Estoy disponible para responder
              tus dudas y ayudarte a encontrar la mejor solución digital para lo
              que necesitas.
            </p>
            <p className="contact-text">+56 9 3290 9467 solo Whatsapp</p>
            <p className="contact-text">gonzalez.samuelalejandro@outlook.com</p>
          </div>

          {/* <form action="#" class="form">
            <input
              type="text"
              name="name"
              id="name"
              class="form-input"
              placeholder="name"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              class="form-input"
              placeholder="e-mail"
              required
            />
            <textarea
              type="text"
              name="message"
              id="message"
              class="form-input form-message"
              placeholder="message"
              required
            ></textarea>

            <button class="form-button" type="submit">
              Submit
            </button>
          </form> */}
        </div>
      </div>
    </section>
  );
}

export { Contact };
