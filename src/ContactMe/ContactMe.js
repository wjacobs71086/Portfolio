import React, { Component } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import "./Contact.css";
import starBanner from "../newbannerIdea.jpeg";

export class ContactMe extends Component {
  render() {
    return (
      <section id="contact">
        <ParallaxBanner
          layers={[
            {
              image: `${starBanner}`,
              amount: 0.5
            }
          ]}
          style={{ height: "300px" }}
        ></ParallaxBanner>
        <div className="contactInfo">
        <h3 className="section-title" id="bottomTitle">
          Let's Chat
        </h3>
          <h4 className="contactTitle">I'm currently available for work!</h4>
          <h5 className="contactBody">
            If you think I would be a good fit for your project or team, let's
            get in touch.
          </h5>
          <a id="mailto" href="mailto:w.jacobs.632@gmail.com" target="newtab">
            Message Me
          </a>
        </div>
      </section>
    );
  }
}

export default ContactMe;
