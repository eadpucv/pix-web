import React from "react"
import Helmet from 'react-helmet'
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
          class: 'home'
        }}
      />
      <Header />
      <section className="main-content">
        <Hero logo={true} hasButton={true} buttonText={`Comienza una partitura`} buttonUrl={'/app'}>
          El lenguaje diseñado para definir y modelar la experiencia del usuario dentro de los servicios digitales
        </Hero>
        <Card color="purple" img={`pix-card-que-es.svg`}>
          <h2 className={`card-title`}>¿Qué es PiX?</h2>
          <p>
            PiX es un lenguaje visual que se utiliza para modelar las interacciones en proyectos digitales e incorpora la secuencia de uso como modulación dentro
             de su propuesta. La secuencia de las acciones define y permite  visualizar los patrones de interacción entre el usuario y el sistema, explicitando y esquematizando procesos complejos. 
          </p>
          <Button type="dark" size="lg" to={`/que-es`}>Conoce más</Button>
        </Card>
        <section className="content">
          <div className="container">
            <div className={`ratio ratio-16x9`}>
              <iframe title="Como funciona PiX" src="https://www.youtube.com/embed/5qap5aO4i9A" allowfullscreen></iframe>
            </div>
          </div>
        </section>
      </section>
      <section className="content">
        <div className="container">
          <h2>Elementos de PiX</h2>

        </div>
      </section>
      <Footer />
    </div>
  )
}
