import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      {/* <div className="bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-20">
          <section className="h-screen flex items-center justify-center border border-purple-500/20 rounded-xl bg-purple-900/10 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-purple-300">About Me</h2>
          </section>

          <section className="h-screen flex items-center justify-center border border-purple-500/20 rounded-xl bg-purple-900/10 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-purple-300">Projects</h2>
          </section>

          <section className="h-screen flex items-center justify-center border border-purple-500/20 rounded-xl bg-purple-900/10 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-purple-300">Contact</h2>
          </section>
        </div>
      </div> */}
    </>
  );
}

export default App;