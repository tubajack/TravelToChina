import React, { Component } from "react";
import Navbar from "../navbar/navbar";

export default class Geography extends Component {
  render() {
    return (
      <div>
        <h1>Geography of China</h1>      
        <Navbar /> 

        <img
          id="Map of China"
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

        <p>
          About two-thirds of the country is mountainous. The mountain ranges typically run from east to west and from
          northeast to southwest. Some of the world's tallest mountains divide China from South and Central Asia. Mount
          Everest, the world's tallest mountain borders Nepal, and the second tallest mountain K2, borders Pakistan.  
        </p>

        <p>
          The Gobi desert is in the Northern part of China along the border with Mongolia. The desert is notable in history as part
          of the Mongol Empire. This desert is a rain shadow desert formed by the Tibetan plateau blocking precipitation from the Indian
          Ocean reaching the Gobi territory. 
        </p>

        <p>
          China has many rivers and lakes. The Yangtze River is the longest river in Asia, and the third-longest in the world, behind the Nile 
          River in Africa, and the Amazon River in South America. The Yellow River is another one of the longest rivers in China and in the world. 
          This river is yellow due to the amount of ailt it carries from the desert regions in the northwest. 
        </p>

        <img
          id="Geography of China"
          src="../images/GeographyofChina.jpg"
          alt="Geography of China"
          width="100%"
          height="100%"
        /> 

        <img
          id="Provinces of China"
          src="../images/ChinaProvinces.jpg"
          alt="China Provinces"
          width="100%"
          height="100%"
        /> 

      </div>
    );
  }
}