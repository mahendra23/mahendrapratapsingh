import React, { useState, useEffect } from "react";
import './App.css';
import Preloader from "./component/preloader/Preloader";
import Home from "./sections/Home/Home";

function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 1000);
  }, []);

  return (
    <div>
      <Preloader load={load} />
      <div className="App">
        <Home />
      </div>
    </div>
  );
}

export default App;
