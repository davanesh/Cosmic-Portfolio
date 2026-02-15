import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Resume from "./components/Resume";
import StarsCanvas from "./components/ui/Stars";

function App() {
  return (
    <div className="text-white relative">
      <StarsCanvas />
      <Navbar />
      <Hero />
      <Project />
      <Resume />
    </div>
  );
}

export default App;