// import logo from './logo.svg';
import "./App.css";
// on utilise CRACO pour bien organisé nous dossiers et maintenable

import { BrowserRouter } from "react-router-dom";

import PublicRouter from "./pages/Public/PublicRouter";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <PublicRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
