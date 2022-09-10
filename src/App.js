import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AccDetail from "./pages/AccDetail";
import GetCoins from "./pages/GetCoins";
import ResetTime from "./pages/ResetTime";
import GetBP from "./pages/GetBP";
import Guess from "./pages/Guess";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/chi-tiet-san-pham/:slug" element={<AccDetail />} />
        <Route path="/nap-tien" element={<GetCoins />} />
        <Route path="/gio-reset" element={<ResetTime />} />
        <Route path="/bom-bp-fc" element={<GetBP />} />
        <Route path="/du-doan" element={<Guess />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
