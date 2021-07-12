import React, { useState, useEffect } from "react";
import './App.scss';
import HomeLayout from "./components/homelayout/HomeLayout";
import Preloader from "./components/preloader/Preloader";


function App() {
  
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 1500);
  }, []);

  return (
      <div>
        <Preloader load={load} />
        <div className="App">
          <HomeLayout />
        </div>
      </div>
  );
}

export default App;
