import React, { Component } from "react";
import headIcon from "../headIcon.png";
import "./navLinks.css";

export class NavLinks extends Component {
  state = {
    screenY: window.scrollY
  };

  componentDidMount() {
    window.onscroll = () => {
      const newScrollHeight = Math.ceil(window.scrollY / 50) * 50;
      if (this.state.screenY !== newScrollHeight) {
        this.setState({ screenY: newScrollHeight });
      }
    };
  }

  renderScrollHeader = () => {
    if (this.state.screenY > 0) {
      return (
        <div style={{ position: "fixed" }} className="navLinks" id="navLinks">
          <img src={headIcon} className="icon" alt="icon" />
          <div className="navLinkContainer">
            <a href="#myWork" className="navLink">
              My work
            </a>
            <a href="#contact" className="navLink">
              Contact
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div className="navLinks" id="navLinks">
          <img src={headIcon} className="icon" alt="icon" />
          <div className="navLinkContainer">
            <a href="#myWork" className="navLink">
              My work
            </a>
            <a href="#contact" className="navLink">
              Contact
            </a>
          </div>
        </div>
      );
    }
  };
  render() {
    return <div>{this.renderScrollHeader()}</div>;
  }
}

export default NavLinks;
