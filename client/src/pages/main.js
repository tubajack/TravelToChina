import React, { Component } from "react";
import Title from "../title/Title";
import Footer from "../footer/footer";

export default class Main extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <header className="App-header">
          <img
            id="China"
            src="images/chinamap.jpg"
            alt="China"
            width="100%"
            height="100%"
          />
        </header>
        <Footer />
      </div>
    );
  }
}
