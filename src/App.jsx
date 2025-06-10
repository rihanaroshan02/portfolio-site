import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Codegreen from "./pages/codegreen";
import Kapporet from "./pages/kapporet";
import About from "./pages/about";
import Albix from "./pages/albix";
import Pikurslot from "./pages/pikurslot";
import Innobiz from "./pages/innobiz"; // ✅ Added import

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pages/codegreen" element={<Codegreen />} />
      <Route path="/pages/kapporet" element={<Kapporet />} />
      <Route path="/pages/about" element={<About />} />
      <Route path="/pages/albix" element={<Albix />} />
      <Route path="/pages/pikurslot" element={<Pikurslot />} />
      <Route path="/pages/innobiz" element={<Innobiz />} /> {/* ✅ Added route */}
    </Routes>
  );
};

export default App;
