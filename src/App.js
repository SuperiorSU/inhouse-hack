import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import WhyPart from "./components/WhyPart";


function App() {
  return (
    <div className="bg-[#04081a]">
      <NavBar/>
      <Hero/>
      <WhyPart/>
      <Footer/>
    </div>
  );
}

export default App;
