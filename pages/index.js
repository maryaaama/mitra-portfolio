
import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";



export default function Home() {
  return (
    < >
      <div className="stars">
       {Array.from({ length: 100 }).map((_, i) => (
        <div key={i} className="star" style={{
         left: `${Math.random() * 100}%`,
         top: `${Math.random() * 100}%`,
         animationDuration: `${Math.random() * 5 + 5}s`,
         animationDelay: `${Math.random() * 5}s`
        }}></div>
      ))}
      </div>
      <Navbar/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Footer/>
    </>
  );
}
