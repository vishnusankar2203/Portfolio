import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Showcase from "./sections/Showcase";
import Projects from "./sections/Projects";
import Architecture from "./sections/Architecture";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero /><About /><Skills /><Showcase /><Projects /><Architecture />
        <Experience /><Education /><Achievements /><Contact />
      </main>
      <Footer />
    </>
  );
}
