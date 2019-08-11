import React, { Component } from "react";
import Navbar from "../navbar/navbar";

export default class ChineseCulture extends Component {
  render() {
    return (
      <div>
        <h1>Chinese Culture</h1>  
        <Navbar /> 

        <h2>Ethnic Groups</h2>
        <img
          id="Ethnic Groups in China"
          src="../images/chinaEthnicGroups.jpg"
          alt="Ethnic Groups"
          width="90%"
          height="90%"
        />   
        <ul>
          <li>China is composed of 56 different ethnic groups</li>
          <li>At 91.64%, the Han Chinese constitute the majority of Chinese</li>
          <li>Other ethnic groups include Zhuang, Hui, Tibetan, Manchu, Yao, etc.</li>
        </ul>

        <h2>Religion in China</h2>
        <img
          id="Religion in China"
          src="../images/ReligionInChinaOverTime.jpg"
          alt="Ethnic Groups"
          width="90%"
          height="90%"
        /> 
        <ul>
          <li>Article 36 in the Chinese Constitution says that Chinese citizens enjoy "freedom of religious benefit"</li>
          <li>Main religions in China incude Buddhism, Christianity, Taoism, Islam, and Confucianism</li>
          <li>Many people in China practice Buddhism, Confucianism, and Taoism</li>
        </ul>
      </div>
    );
  }
}