import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Events from "./components/Events";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Events />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
