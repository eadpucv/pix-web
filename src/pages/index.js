import React from "react"
import Helmet from "react-helmet"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Hero from "../components/content/hero"
import Card from "../components/content/card"
import Button from "../components/elements/button"

export default function Home() {
  return (
    <div>
      <Helmet
        bodyAttributes={{
          class: "home",
        }}
      />
      <Header />
      <section className="main-content">
        <Hero
          logo={true}
          hasButton={true}
          buttonText={`Comienza una partitura`}
          buttonUrl={"https://eadpucv.github.io/pix/pages/app/"}
        >
          El lenguaje diseñado para definir y modelar la experiencia del usuario
          dentro de los servicios digitales
        </Hero>
        <Card color="purple" img={`pix-card-que-es.svg`}>
          <h2 className={`card-title`}>¿Qué es PiX?</h2>
          <p>
            PiX es un lenguaje visual que se utiliza para modelar las
            interacciones en proyectos digitales e incorpora la secuencia de uso
            como modulación dentro de su propuesta. La secuencia de las acciones
            define y permite visualizar los patrones de interacción entre el
            usuario y el sistema, explicitando y esquematizando procesos
            complejos.
          </p>
          <Button type="dark" size="lg" to={`/que-es`}>
            Conoce más
          </Button>
        </Card>
        <section className="content">
          <div className="container">
            <div className={`ratio ratio-16x9`}>
              <iframe
                title="Como funciona PiX"
                src="https://www.youtube.com/embed/U99NHV_bBQI"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </section>
      </section>
      <section className="content pix-app">
        <div className="container">
          <iframe src="http://eadpucv.github.io/pix/pages/app-embed/#!/import/eyJ0aXRsZSI6IkVsZW1lbnRvcyBkZSBQaVgiLCJsYXlvdXQiOiJpcCIsImRlc2NyaXB0aW9uIjoiIiwic2NvcmVzIjpbW3sic3RlcF90aXRsZSI6IiIsInVzZXIiOiJwaXgtdGhpbmsgUXVpZXJvIHByb2JhciBsYSBhcGxpY2FjacOzbiBQaVhcbiIsImRpYWxvZ3VlIjoicGl4LXBhZ2UgXG5WYW1vcyBhIG1pcmFyIGxhIHDDoWdpbmEgd2ViIGRlIFBpWCIsInN5c3RlbSI6InBpeC1kYXRhYmFzZSBcbkV4dHJhZSBsYSBww6FnaW5hIHdlYiIsIm5vdGUiOiIifSx7InN0ZXBfdGl0bGUiOiIiLCJ1c2VyIjoiICIsImRpYWxvZ3VlIjoicGl4LWJ1dHRvbiBcbkNsaWMgZW4gY29taWVuemEgdW5hIHBhcnRpdHVyYSIsInN5c3RlbSI6IiAiLCJub3RlIjoiIn0seyJzdGVwX3RpdGxlIjoiIiwidXNlciI6InBpeC1zbWlsaW5nIFxuQXF1w60gcHVlZG8gdHJhYmFqYXIiLCJkaWFsb2d1ZSI6InBpeC1pbnB1dCBcbk5vbWJyYSB5IGRlc2NyaWJlIGxhIHBhcnRpdHVyYSIsInN5c3RlbSI6IiAiLCJub3RlIjoiUHVlZGVzIGNyZWFyIGRpdmlzaW9uZXMgcXVlIGRlZmluYW4gc2VnbWVudG9zIGVuIGxhIGludGVyYWNjacOzbiBxdWUgZGlzZcOxZXMifSx7InN0ZXBfdGl0bGUiOiIiLCJ1c2VyIjoicGl4LXN1cnByaXNlZCBcbsKhSW5jcmVpYmxlISIsImRpYWxvZ3VlIjoicGl4LXNlYXJjaCBcbkNvbXBsZXRhIGJ1c2NhbmRvIHBpY3RvZ3JhbWFzIiwic3lzdGVtIjoicGl4LXVwZGF0ZSBcblRyYW5zZm9ybWEgbGFzIGFjY2lvbmVzIGluZ3Jlc2FkYXMiLCJub3RlIjoiIn0seyJzdGVwX3RpdGxlIjoiIiwidXNlciI6InBpeC10aGluayBcblF1aWVybyBndWFyZGFyIG1pIHRyYWJham8iLCJkaWFsb2d1ZSI6InBpeC1kb3duIFxuRGVzY2FyZ2EgcGFydGl0dXJhIGVuIHBkZiIsInN5c3RlbSI6InBpeC1wcm9jZXNzIFxuR2VuZXJhIHkgZGVzY2FyZ2EgZWwgcGRmIiwibm90ZSI6IiJ9LHsic3RlcF90aXRsZSI6IiIsInVzZXIiOiIgIiwiZGlhbG9ndWUiOiIgIiwic3lzdGVtIjoiICIsIm5vdGUiOiIifV1dfQ==" width="100%" height="auto" />
        </div>
      </section>
      <Footer />
    </div>
  )
}
