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

        <p>
          Some of the challenges that the Chinese economy has faced include: 
          <ul>
            <li>Reducing high dmestic savings rate</li>
            <li>Higher-wage job opportunities for the middle class</li>
            <li>Raising productivity growth rates through efficient allocation of capital and state support for innovation.</li>
          </ul>
          In order to control the population, China implemented a one-child policy in 1979, which was relaxed in 2016 to allow families
          to have two children. One of the consequences of this population control is that China is one of the most rapidly aging countries 
          in the world. 
        </p>

        <p>
          China also faces a lot of environmental challenges. Some of the challenges include air pollution, soil erosion, and the fall of the 
          water table. Due to soil erosion, China loses a lot of arable land. In 2016, China ratified the Paris agreement, which will combat climate
          change. In addition, China is committed to peaking emissions between 2025 and 2030. 
        </p>
      </div>
    );
  }
}