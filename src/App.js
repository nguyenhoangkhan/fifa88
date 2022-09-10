import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AccDetail from "./pages/AccDetail";
// import Footer from "./Components/Footer";
// import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accDetail/:slug" element={<AccDetail />} />
      </Routes>
    </div>
  );
}

export default App;
