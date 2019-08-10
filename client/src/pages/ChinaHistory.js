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
      </div>
    );
  }
}
