import React from "react";
import { Header, Footer, About, Skills, Work, Testimonials } from "./container";
import { NavBar } from "./components";
import "./App.scss";

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}
