import Footer from "./components/Footer";
import Form from "./components/Form";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import WhyPart from "./components/WhyPart";


function App() {
  return (
    <div className="bg-[#04081a]">
      <NavBar/>
      <Hero/>
      <WhyPart/>
     <div className="bg-gradient-to-b absolute filter z-0 blur-[100px] rounded-full left-[40%] w-[600px] h-[600px] from-[#04081a] via-[#231451] to-[#04081a]  ">
     </div>
     <Form />
      <Footer/>
    </div>
  );
}

export default App;
