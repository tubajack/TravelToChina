import React, { Component } from "react";
import Navbar from "../navbar/navbar";

export default class Geography extends Component {
  render() {
    return (
      <div>
        <h1>Geography of China</h1>      
        <Navbar /> 

        <img
          id="Ethnic Groups in China"
          src="../images/MapOfChina.jpg"
          alt="Map of China"
          width="100%"
          height="100%"
        /> 

        <p>
          China is located in Southeast Asia along the coastline of the Pacific Ocean. China is the 3rd largest
          country after Russia and Canada. China is bordered by 14 countries- Korea, Vietnam, Laos, Burma, India, 
          Bhutan, Nepal, Pakistan, Afghanistan, Tajikistan, Kyrgyzstan, Kazakstan, Mongolia, and Russia.
        </p>

      </div>
    );
  }
}