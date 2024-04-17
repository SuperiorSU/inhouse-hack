import Footer from "./components/Footer";
import Form from "./components/Form";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Theme from "./components/Theme";
import WhyPart from "./components/WhyPart";
import About from "./components/about/About";

function App() {
  return (
    <div className="bg-[#04081a] scroll-smooth overflow-hidden">
      <NavBar/>
      <Hero/>
      <About/>
      <WhyPart/>
<<<<<<< HEAD:src/App.js
     <div className="bg-gradient-to-b absolute filter z-0 blur-[100px] rounded-full left-[40%] w-[600px] h-[600px] from-[#04081a] via-[#231451] to-[#04081a]  ">
     </div>
     <Form />
=======
      <Theme/>
      <Form/>
>>>>>>> 3e0a17bd147837cccab04fd8f411728b430d3bfd:client/src/App.js
      <Footer/>
    </div>
  );
}

export default App;
