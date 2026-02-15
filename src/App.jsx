import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Resume from "./components/Resume";
import StarsCanvas from "./components/ui/Stars";
import Social from "./components/Social";

function App() {
  return (
    <div className="text-white relative">
      <StarsCanvas />
      <Social/>
      <Navbar />
      <Hero />
      <Project />
      <Resume />
    </div>
  );
}

export default App;