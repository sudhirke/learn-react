import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`App ${isLoaded ? "loaded" : ""}`}>
      <Navbar />
      <Hero />

      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
