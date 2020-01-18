import React, { Component } from "react";
import icon from "../headIcon_purple.png";

export class AboutMe extends Component {
  render() {
    return (
      <section className="about-me-section" id="aboutMe">
        <img src={icon} alt="icon" className="AboutMeIcon"></img>
        <h4 className="section-title">About Me</h4>
        <p className="about-me-body">
          I am a passionate and collaborative software developer in the LA area.
          Learning new techniques, strategies, and working with great people to
          create exceptional outcomes is what I do.
        </p>
        <p className="about-me-body">
        A bit on me: Outside of programming I'm an avid reader. I love a good story and the creation it brings. I'm a closeted DnD fan for all the same reasons! I value intentionality, kindness, being genuine, open and honest communication, hard work, and balance. Enough about me, I hope to hear more about you.
        </p>
      </section>
    );
  }
}

export default AboutMe;
