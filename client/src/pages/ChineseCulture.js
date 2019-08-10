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
          src="../images/EthnicGroupsofChina.jpg"
          alt="Ethnic Groups"
          width="100%"
          height="100%"
        />   
        <p>
           China has 56 different ethnic groups. 
           The most common ethnic group is the Han Chinese which accounts for 91.64% of all Chinese. 
           Other ethnic groups include Zhuang, Hui, Man, Ugyur, etc.
        </p>  
      </div>
    );
  }
}