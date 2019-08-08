import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/main";
import "./App.css";
import ChinaHistory from "./pages/ChinaHistory";
import ChineseCulture from "./pages/ChineseCulture";
import Economy from "./pages/Economy";
import Geography from "./pages/Geography";
import Politics from "./pages/Politics";
import Technology from "./pages/Technology";
import TravelToChina from "./pages/TravelToChina";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Main}/>
      <Route exact path="/history" component={ChinaHistory}/>
      <Route exact path="/culture" component={ChineseCulture}/>
      <Route exact path="/economy" component={Economy}/>
      <Route exact path="/geography" component={Geography}/>
      <Route exact path="/politics" component={Politics}/>
      <Route exact path="/technology" component={Technology}/>
      <Route exact path="/travel" component={TravelToChina}/>
    
    </Router>   
  );
}

export default App;
