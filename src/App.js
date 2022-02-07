import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import BestService from "./components/HomePage/BestService/BestService";

function App() {
  return (
    <div className="App">
      <h1>Let Start Our Dream Project called DreamFly!</h1>
      <BestService />
    </div>
  );
}

export default App;
