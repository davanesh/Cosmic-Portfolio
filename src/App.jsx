import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import TechStack from "./components/TechStack";
import Resume from "./components/Resume";
import StarsCanvas from "./components/ui/Stars";
import Social from "./components/Social";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-black text-white relative overflow-x-hidden">
      <StarsCanvas />
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <div className={`${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}>
        <Social />
        <Navbar />
        <Hero />
        <Project />
        <TechStack />
        <Contact />
        <Resume />
        <Footer />
      </div>
    </div>
  );
}

export default App;