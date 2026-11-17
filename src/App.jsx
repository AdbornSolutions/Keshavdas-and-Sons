import { Route, Routes } from "react-router-dom";
import "./App.css";
import CategoryNavbar from "./componenets/CategoryNavbar";
import Footer from "./componenets/Footer";
import Header from "./componenets/Header";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <CategoryNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
