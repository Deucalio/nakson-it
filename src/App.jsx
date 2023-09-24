import React from "react";
import Nav from "./components/Nav";
import MainSection from "./components/MainSection";
import TeamSection from "./components/TeamSection";
import ServicesSection from "./components/ServicesSection";
import Clients from "./components/Clients";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Nav />
      <MainSection />
      <TeamSection />
      <ServicesSection />
      <Clients />
      <FAQ />
      <Footer />
    </>
  );
};

export default App;
