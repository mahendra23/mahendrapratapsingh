import "./common/App.scss";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Preloader } from "./components/preloader/Preloader";
import LightHomeBase from "./components/lightdesign/lighthomebase/LightHomeBase";
import DarkHomeBase from "./components/darkdesign/darkhomebase/DarkHomeBase";
import { Header } from "./components/header/Header";
import { useTheme } from "./components/themecontext/ThemeContext";
import { ErrorBoundary } from "./components/errorboundary/ErrorBoundary";
import { DISPLAY_THEME_TOGGLE } from "./common/constants";

function App() {

  const { isDark } = useTheme();
  
  return (
    <ErrorBoundary>
      <>
        <div className="App">
          {DISPLAY_THEME_TOGGLE && <Header />}
          {isDark ? <DarkHomeBase /> : <LightHomeBase />}
        </div>
      </>
    </ErrorBoundary>
  );
}
export default App;
