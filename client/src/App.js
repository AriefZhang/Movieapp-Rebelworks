import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from './views/Home'
import Detail from "./views/Detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details/:id" element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
