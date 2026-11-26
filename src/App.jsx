import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import CategoryNavbar from "./componenets/CategoryNavbar";
import Footer from "./componenets/Footer";
import Header from "./componenets/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Ayurveda from "./pages/Ayurveda";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <CategoryNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ayurveda" element={<Ayurveda />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
