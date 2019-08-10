import React, { Component } from "react";
import Navbar from "../navbar/navbar";

export default class ChinaHistory extends Component {
  render() {
    return (
      <div>
        <h1>The History of China</h1>
        <Navbar />      

        <h2>Xia Dynasty</h2>
        <ul>
          <li>Began in 2070 BCE</li>
          <li>Estabished by Yu the Great</li>
          <li>Succeeded by the Shang Dynasty in 1600 BC</li>
        </ul>

        <h2>Shang Dynasty</h2>
        <ul>
          <li>Began after a tribal chief named Tang defeated the Xia Dynasty.</li>
          <li>The Xia Dynasty was under control of a tyrant named Jie. </li>
          <li>The battle was known as the Battle of Mingtiao. </li>
          <li>Dynasty ended around 1050 BC. </li>
          <li>The final king, King Di Xin, was a cruel leader who enjoyed torturing people.</li>
        </ul>

        <h2>Zhou Dynasty</h2>
        <ul>
          <li>Longest lasting dynasty in ancient Chinese history.</li>
          <li>Lasted from 1046 BC to 256 BC</li>
          <li>This dynasty is divided into 2 periods. Western Zhou (1046-771) BC and Eastern Zhou (770-256) BC</li>
          <li>Many of the greatest Chinese thinkers like Laozi, Confucius, Mozi, and Mencius lived during the Eastern Zhou period.</li>
          <li>Came to an end during the Warring States Period in 256 BC, when the army of the state of Qin captured Chengzhou and King Nan.</li>
        </ul>

        <h2>Qin Dynasty</h2>
        <ul>
          <li>The Qin empire unified China for the first time in history.</li>
          <li>Followed the Zhou dynasty and ended when Liu Bang became the King of Han in 206 BC.</li>
          <li>The name China is derived from the name Qin</li>
        </ul>

        <h2>Han Dynasty</h2>
        <ul>
          <li>Lasted from 206 BC to 220 AD.</li>
          <li>Considered a golden age in Chinese history.</li>
          <li>China's majority ethnic group is known as the Han Chinese. Chinese script is referred to as Han Characters.</li>
        </ul>

        <h2>Sui Dynasty</h2>
        <ul>
          <li>Lasted from 581 AD to 618 AD.</li>
          <li>Civil Service Examinations were introduced to create a large body of personnel chosen based on merit rather than privledge.</li>
          <li>Reconnected Southern China into an empire which was dominant during the Tang and Song eras.</li>
        </ul>

        <h2>Tang Dynasty</h2>
        <ul>
          <li>Lasted from 618 AD to 907 AD.</li>
          <li>Confucianism returns to the Chinese government.</li>
          <li>Notable inventions include the clock and gunpowder.</li>
          <li>Some noble Chinese families started binding their daughter's feet.</li>
        </ul>

        <h2>Song Dynasty</h2>
        <ul>
          <li>Lasted from 960 AD to 1279 AD.</li>
          <li>The earliest paper money was introduced.</li>
          <li>The first standing navy was established.</li>
          <li>Other technological advancements include movable type printing and the compass</li>
          <li>Mathematical advancements include the Jia Xian triangle used for binomial coefficients, the intrduction of 0 by Qin Jiushao.</li>
        </ul>
      </div>
    );
  }
}
