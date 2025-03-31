import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Destinations from "./pages/Destinations";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations" element={<Destinations />} />
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
