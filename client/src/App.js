import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/main";
import "./App.css";
import ChinaHistory from "./pages/ChinaHistory";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Main}/>
      <Route exact path="/history" component={ChinaHistory}/>
    
    </Router>   
  );
}

export default App;
