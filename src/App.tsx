import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutPage } from "./pages/about/about";
import Home from "./pages/home/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Portfolio } from "./pages/portfolio/portfolio";

function App() {
  return (
    <Router>
      <div className="relative w-full min-h-screen bg-[#0a0a0c] text-white font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route
            path="*"
            element={
              <div className="pt-40 text-center">404: System Not Found</div>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
