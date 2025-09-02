import { useState, useEffect } from "react";
import "./common/App.scss";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Preloader } from "./components/preloader/Preloader";
import LightHomeBase from "./components/lightdesign/lighthomebase/LightHomeBase";
import DarkHomeBase from "./components/darkdesign/darkhomebase/DarkHomeBase";
import { Header } from "./components/header/Header";
import { useTheme } from "./components/themecontext/ThemeContext";

function App() {
  
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 100);
  }, []);

  const { isDark } = useTheme();
  
  return (
    <>
      <Preloader load={load} />
      <div className="App">
        <Header />
        {isDark ? <DarkHomeBase /> : <LightHomeBase />}
      </div>
    </>
  );
}
export default App;
