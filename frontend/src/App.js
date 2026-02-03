import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./pages/HomePage";
import BrandsPage from "./pages/BrandsPage";
import CreatorsPage from "./pages/CreatorsPage";

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/creators" element={<CreatorsPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="App noise-texture">
      <div className="gradient-bg" />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
