import React, { Component } from "react";
import Navbar from "../navbar/navbar";

export default class Technology extends Component {
  render() {
    return (
      <div>
        <h1>Technological Advances in China</h1>   
        <Navbar /> 

        <h2>History of Technology in China</h2>   

        <p>
          Up until the Qing dynasty, China was a world leader in science and technology.
          Many innovations including papermaking, printing, the compass, and gunpowder contributed to 
          the rapid economic development in Europe and Asia at that time.  
        </p>     

        <p> 
          One of the oldest longstanding contributions of the Ancient Chinese is traditional medicine. 
          Acupuncture is one of the most well-known components of Chinese medicine. It is most often
          used for pain relief, but can be used for other conditions. It is generally used with other forms
          of treatment. 
        </p>
      </div>
    );
  }
}