import React from "react";
import "./App.css";
import { ParallaxBanner } from "react-scroll-parallax";
import AboutMe from "./AboutMe/aboutMe";
import NavLinks from "./NavLinks/navLinks";
import Project from "./MyWork/project";
import starBanner from "./newbannerIdea.jpeg";
import ContactMe from "./ContactMe/ContactMe";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLinks />
      </nav>
      <ParallaxBanner
        className="Banner"
        layers={[
          {
            image: `${starBanner}`,
            amount: 0.5
          }
        ]}
        style={{ height: "500px" }}
      >
        <h1 className="title">Hi, I'm Wesley</h1>
      </ParallaxBanner>
      <main>
        <AboutMe />
        <Project />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
