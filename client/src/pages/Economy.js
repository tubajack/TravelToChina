import React, { Component } from "react";
import Navbar from "../navbar/navbar";

export default class Economy extends Component {
  render() {
    return (
      <div>
        <h1>Economy of China</h1>  
        <Navbar />   

        <h2>History of the Chinese Economy</h2>      

        <p>
          During the late 1970s, China moved to a more market-oriented economy. As a result, the Gross Domestic Product (GDP)
          has increased significantly. From 2013 to 2017, China had one of the fastest growing economies in the world, averaging 
          about 7% real growth annually. Although China experienced massive growth from 1978 to 2013, authoritieds have implemented
          the "New Normal" which was implemented to avoid overheating. Although economic growth has slown down since 2010, the Chinese 
          Economy is still projected to grow 6.9% in 2019.  
        </p>
      </div>
    );
  }
}