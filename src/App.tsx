import { useState, useEffect } from "react";
import "./common/App.scss";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Preloader } from "./components/preloader/Preloader";
import HomeBase from "./components/base/HomeBase";

function App() {
  
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 100);
  }, []);

  return (
    <>
      <Preloader load={load} />
      <div className="App">
        <HomeBase />
      </div>
    </>
  );
}
export default App;
