import React, { Component } from 'react'
import { ParallaxBanner } from "react-scroll-parallax";
import starBanner from "./newbannerIdea.jpeg";

export class CustomHeader extends Component {
  
convertParam = (name) =>{

}


switchHeader = () => {
  if(this.props.match.params){
    let input = this.props.match.params.name.replace(/_/g," ");
    let split = input.split(' ');
    for(let i = 0; i < split.length; i++){
      split[i] = split[i].charAt(0).toUpperCase() + split[i].substring(1);
    }
    let result = split.join(' ')
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
        <h1 className="title customLinkTitle">Hey {result},</h1>
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
