import React from "react";
import BoxesContainer from "./BoxesContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BoxesContainer boxNum={18} />
      <BoxesContainer />
    </div>
  );
}

export default App;
