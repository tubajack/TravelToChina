import React from "react";
import Title from "./title/Title.js";
import Footer from "./footer/footer.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Title />
      <header className="App-header">

        <img id = "China" src = "images/chinamap.jpg" alt = "China" width = "100%" height = "100%"/>
  
      </header>
      <Footer />
    </div>
  );
}

export default App;
