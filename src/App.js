import Footer from "./components/Footer";
import Form from "./components/Form";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import WhyPart from "./components/WhyPart";
import About from "./components/about/About";

function App() {
  return (
    <div className="bg-[#04081a]">
      <NavBar/>
      <Hero/>
      <WhyPart/>
      <About/>

      <Form/>

      <Footer/>
    </div>
  );
}

export default App;
