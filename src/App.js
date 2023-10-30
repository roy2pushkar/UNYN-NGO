import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Events from "./components/Events";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Events />
    </div>
  );
}

export default App;
