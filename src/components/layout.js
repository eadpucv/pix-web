import React from "react"
import Helmet from 'react-helmet'
import { MDXProvider } from "@mdx-js/react"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Hero from "../components/content/hero"
import Card from "../components/content/card"
import Container from "../components/content/container"
import Button from "../components/elements/button"
import Image from "../components/elements/image"
import Contributors from "../components/content/contributors"
import {Accordion, AccordionSection} from "../components/content/accordion"

const shortcodes = { Header, Footer, Hero, Card, Button, Container, Contributors, Image, Accordion, AccordionSection }
export default function Layout({ location, children }) {
  return (
    <MDXProvider components={shortcodes}>
      <Helmet
        bodyAttributes={{
          class: location.pathname.replace(/\//g,'')
        }}
      />
      <Header />
      <section className="main-content">
        {children}
      </section>
      <Footer />
    </MDXProvider>
  )
}