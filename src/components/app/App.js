import React from "react";
import "./App.css";
import "bulma/css/bulma.min.css";
import HexConverter from "../HexConverter";

const App = () => {
  return (
    <div className="container">
      <section className="section mt-6">
        <h1 className="title is-1">RGB to Hex Converter</h1>
        <h2 className="subtitle">
          A simple tool to convert <strong>RBG</strong> colours to{" "}
          <strong>Hex</strong> encoded colours.
        </h2>
      </section>

      <section className="section">
        <HexConverter />
      </section>
    </div>
  );
};

export default App;
