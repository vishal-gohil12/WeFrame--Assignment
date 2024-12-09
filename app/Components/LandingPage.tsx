import React from "react";
import Header from "./Header";
import LandingComponent from "./LandingComponent";
import Items from "./Items";
import About from "./About";
import Contact from "./Contact";

export default function LandingPage() {
  return (
    <div>
      <Header />
      <LandingComponent />
      <Items />
      <About />
      <Contact />
    </div>
  );
}
