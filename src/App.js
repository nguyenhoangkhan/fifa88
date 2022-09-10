import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AccDetail from "./pages/AccDetail";
import GetCoins from "./pages/GetCoins/GetCoins";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/chi-tiet-san-pham/:slug" element={<AccDetail />} />
        <Route path="/nap-tien" element={<GetCoins />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
