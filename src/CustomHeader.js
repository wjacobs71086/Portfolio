import React, { Component } from 'react'
import { ParallaxBanner } from "react-scroll-parallax";
import starBanner from "./newbannerIdea.jpeg";

export class CustomHeader extends Component {
  
switchHeader = () => {
  if(this.props.match.params){
    let name = this.props.match.params.name;
    const lower = this.props.match.params.name;
    const upper = lower.charAt(0).toUpperCase() + lower.substring(1);
    let replaceSpace = upper.replace('_', ' ');
    let indexOfSpace = upper.indexOf(' ')
    let upperAllNewWords = upper.charAt(indexOfSpace + 1).toUpperCase();
    return (
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
      <div className='titleContainer'>
      <h1 className="title customLinkTitle">Hey {upper}</h1>
      <h2 className='title sub'>It's nice to meet you. I'm Wesley.</h2>
      </div>
    </ParallaxBanner>
    )
  } else {
    return (<ParallaxBanner
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
  </ParallaxBanner>)
  }
}



  render() {
    return (
      <div>
      {this.switchHeader()}
      </div>
    )
  }
}

export default CustomHeader
