import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar/>
      <Hero/>
      <Project/>
    </div>
  );
}

export default App;