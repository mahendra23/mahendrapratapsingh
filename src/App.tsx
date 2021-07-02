import React, { useState, useEffect } from "react";
import './App.scss';
import HomeLayout from "./components/homelayout/HomeLayout";
import Preloader from "./components/preloader/Preloader";
import Grid from '@material-ui/core/Grid';

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
      {/* <div className="App">
        <HomeLayout />
      </div> */}
      <Grid container className="App">
        <Grid item xs={12} id="app-container">
          <HomeLayout />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
