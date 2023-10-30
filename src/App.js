import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Events from "./components/Events";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Events />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
