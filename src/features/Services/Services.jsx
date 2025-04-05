import "./Services.css";

function Services() {
  return (
    <section class="services-container">
      <div class="services-content">
        <div class="services-header">
          <h2 class="services-title">Servicios Profesionales</h2>
          <p class="services-description">
            Ofrezco desarrollo web Full-Stack con enfoque en rendimiento, diseño
            y escalabilidad, para transformar ideas en productos digitales
            sólidos y atractivos.
          </p>
        </div>

        <div class="services-items">
          <div class="services-card">
            <h3 class="services-card-title">Landing Page Express en 48h 🚀</h3>
            <p class="services-card-text">
              Si necesitas tener presencia online para tu negocio, producto o
              marca personal, este servicio es para ti. Entrego una página web
              profesional, moderna y adaptada a celulares en solo 48 horas.
              Incluye secciones como: presentación, servicios, contacto y redes
              sociales. Ideal para captar clientes, agendar reuniones o mostrar
              lo que haces de forma clara y atractiva.
            </p>
            <button class="services-card-button">Explore</button>
          </div>

          <div class="services-card">
            <h3 class="services-card-title">
              Integración de Chatbots en tu Página Web 🤖
            </h3>
            <p class="services-card-text">
              Mejora la atención a tus clientes con un chatbot que responde por
              ti, 24/7. Instalo un asistente virtual en tu página (o en una
              nueva si lo necesitas), listo para responder preguntas frecuentes,
              captar datos de contacto o guiar al visitante según tus
              necesidades. Ideal para negocios con alta demanda de atención,
              reservas o productos digitales.
            </p>
            <button class="services-card-button">Explore</button>
          </div>

          <div class="services-card">
            <h3 class="services-card-title">
              Sitio Web Ecommerce Personalizado 🛒
            </h3>
            <p class="services-card-text">
              ¿Quieres vender tus productos o servicios por internet? Diseñaré y
              programaré un sitio ecommerce a medida, completamente
              administrable, con carrito de compras, pasarela de pagos, catálogo
              de productos y diseño adaptado a tu marca. Una solución
              profesional pensada para vender de forma simple y efectiva, sin
              depender de plataformas genéricas.
            </p>
            <button class="services-card-button">Explore</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Services };
