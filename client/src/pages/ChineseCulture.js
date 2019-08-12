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
          id="Language in China"
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

        <h2>Food in China</h2>
        <ul>
          <li>Staple foods include rice, noodles and tofu.</li>
          <li>Rice is one of the most popular foods in China and is used in many dishes.</li>
          <li>Noodles are made from wheat flour, rice flour, or bean starch. They are served in soup or stir-fried with meat, eggs, or veggies.</li>
          <li>Tofu is made from soy milk, water, and curdling agent. It contains little fat, and is high in protein, calcium, and iron.</li>
          <li>Chinese eat many different kinds of meat like pork, beef, chicken.</li>
          <li>Eggs are also widely consumed in China. Chinese people consume eggs from many different types of poultry including chicken, quails, pigeons, ducks, etc.</li>
          <li>Veggies are fundamental to the Chinese cuisine. Common veggies eaten include onions, chinese eggplants, leafy vegetables, etc. </li>
          <li>Other ingredients are used for seasoning including ginger, garlic, coriander, spring onions, etc.</li>
        </ul>
      </div>
    );
  }
}