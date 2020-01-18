import React, { Component } from "react";
import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <a
          href="https://www.linkedin.com/in/wesleyjacobsdev/"
          className="link footerLink"
          target="newtab"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/wjacobs71086"
          className="link footerLink"
          target="newtab"
        >
          Github
        </a>
      </footer>
    );
  }
}

export default Footer;
