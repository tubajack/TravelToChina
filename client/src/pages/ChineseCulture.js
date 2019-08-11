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

        <h2>Language in China</h2>
        <img
          id="Religion in China"
          src="../images/ChineseLanguage.jpg"
          alt="Ethnic Groups"
          width="90%"
          height="90%"
        /> 
        <ul>
          <li>About 1.2 Billion people speak some form of Chinese as their first language.</li>
          <li>There are between 7 and 13 regional groups of Chinese. Mandarin is the most common dialect followed by Wu, Yue, Cantonese etc.</li>
          <li>All dialects of Chinese are tonal and analytic.</li>
          <li>Standard Chinese, based on the Beijing dialect of Mandarin (Putonghua), is the official language of China and Taiwan.</li>
          <li>In addition, it is one of the six official lanuages of the UN.</li>
        </ul>
      </div>
    );
  }
}