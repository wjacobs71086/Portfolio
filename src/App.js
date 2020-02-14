import React from "react";
import "./App.css";
import AboutMe from "./AboutMe/aboutMe";
import NavLinks from "./NavLinks/navLinks";
import Project from "./MyWork/project";
import ContactMe from "./ContactMe/ContactMe";
import Footer from "./Footer/Footer";
import { Route, Switch } from 'react-router-dom'
import CustomHeader from './CustomHeader';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLinks />
      </nav>
      <Switch>
        <Route
            path={'/:name'}
            component={CustomHeader}
          />
        <Route
            path={'/'}
            component={CustomHeader}
          />
          </Switch>
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
