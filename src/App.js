import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Dashboard from "./demo/Dashboard";
import { Route, Routes } from "react-router";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar /> 
    <Routes>
      <Route path="/" element={<><Hero /> <About /> <Footer /></>} />
      <Route path="/demo" element={ <Dashboard />} />
    </Routes>
    </div>
  );
}

export default App;
