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


      </div>
    );
  }
}