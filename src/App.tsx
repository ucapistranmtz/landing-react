import { HashRouter } from "react-router-dom";
import { AppRouter } from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <>
      <HashRouter>
        <AppRouter />
      </HashRouter>
    </>
  );
}

export default App;
