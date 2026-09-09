import "./common/App.scss";
import "@coreui/coreui/dist/css/coreui.min.css";
import DarkHomeBase from "./components/darkdesign/darkhomebase/DarkHomeBase";
import { ErrorBoundary } from "./components/errorboundary/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <>
        <div className="App">
          <DarkHomeBase />
        </div>
      </>
    </ErrorBoundary>
  );
}
export default App;
