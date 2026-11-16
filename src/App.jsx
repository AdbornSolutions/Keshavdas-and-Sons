import "./App.css";
import { Routes, Route } from "react-router-dom";
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
      
    </>
  );
}

export default App;
