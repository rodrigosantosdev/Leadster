"use client"

import { GlobalStyle } from "./assets/styles/global";
import { Footer } from "./components/Footer";
import { GeracaoLeads } from "./components/GeracaoLeads";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Videos } from "./components/Videos";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Videos />
      <GeracaoLeads />
      <Footer />
      <GlobalStyle />
    </>
  )
}
