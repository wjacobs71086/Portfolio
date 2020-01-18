import React, { Component } from "react";
import headIcon from "../headIcon.png";
import "./navLinks.css";

export class NavLinks extends Component {
  render() {
    return (
      <div className="navLinks" id="navLinks">
        <img src={headIcon} className="icon" alt="icon" />
        <a href="#myWork" className="navLink">
          My work
        </a>
        <a href="#contact" className="navLink">
          Contact
        </a>
      </div>
    );
  }
}

export default NavLinks;
