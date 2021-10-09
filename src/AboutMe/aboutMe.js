import React, { Component } from "react";
import icon from "../aboutIcons/headIcon_purple.png";
import iconGif from "/Users/wesleyjacobs/Documents/Coding/Projects/Thinkful/portfolioproject/src/649FDB85-5B43-4BE7-8601-23BA688079F9.gif"
import partyIcon from '../aboutIcons/partyIcon.png'
import cussIcon from '../aboutIcons/cussIcon.png'
import thinkingIcon from '../aboutIcons/thinkingIcon.png'
import lightbulbIcon from '../aboutIcons/lightbulbIcon.png'
import callMeIcon from '../aboutIcons/callMeIcon.png'
import cloudsIcon from '../aboutIcons/cloudsIcon.png'
import computerIcon from '../aboutIcons/computerIcon.png'

let icons = [icon, partyIcon, cussIcon, thinkingIcon, lightbulbIcon, callMeIcon, cloudsIcon, computerIcon]

export class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIcon: icon
    };
  }

handleClick = () => {
  let randomIconIndex = Math.floor(Math.random() * icons.length)
  this.setState({currentIcon:icons[randomIconIndex]})
}


  render() {
    return (
      <section className="about-me-section" id="aboutMe">
        <img src={this.state.currentIcon} alt="icon" className="AboutMeIcon" onClick={this.handleClick}></img>
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
