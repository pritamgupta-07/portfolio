import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { FC } from "react";
import About from "../components/About";
import Projects from "@/components/Projects";
import Home from "@/components/Home";
import Footer from "@/components/Footer";

const Main = () => {
  return (
    <main className="h-full w-full px-6 md:px-8">
      <Home />
      {/* Projects section */}

      <Projects />

      {/* Skills section */}

      <Skills />

      {/* About section */}
      <About />
      <Contact />
      <Footer/>
    </main>
  );
};

export default Main;
