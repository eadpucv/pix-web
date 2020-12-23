import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Hero from "../components/content/hero"
import Card from "../components/content/card"
import Container from "../components/content/container"
import Button from "../components/elements/button"
import Contributors from "../components/content/contributors"

const shortcodes = { Header, Footer, Hero, Card, Button, Container, Contributors }
export default function Layout({ children }) {
  return (
    <MDXProvider components={shortcodes}>
      <Header />
      <section className="main-content">
        {children}
      </section>
      <Footer />
    </MDXProvider>
  )
}