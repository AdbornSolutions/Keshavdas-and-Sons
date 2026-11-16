import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./componenets/Footer";
import Header from "./componenets/Header";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
