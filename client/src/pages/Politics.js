import React, { Component } from "react";
import Navbar from "../navbar/navbar";

export default class Politics extends Component {
  render() {
    return (
      <div>
        <h1>Political Beliefs in China</h1> 
        <Navbar /> 

        <h2>Politics of China</h2>  

        <p>
          The People's Republic of China is a "socialist state under the people's democratic dictatorship led
          by the working class and based on the alliance of workers". The Chinese government has been openly
          described as communist and socialist. There are heavy restrictions in China which include:
          <ul>
            <li>Internet Access</li>
            <li>Freedom of Press</li>
            <li>Freedom of Religion</li>
          </ul>
        </p>        
      </div>
    );
  }
}