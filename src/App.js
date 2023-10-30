import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Events from "./components/Events";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Events />
      <Testimonials />
    </div>
  );
}

export default App;
