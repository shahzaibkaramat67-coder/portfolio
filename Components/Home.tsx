import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./navbar";
import Projects from "./Project";
import Skills from "./Skills";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          {/* Hero section content */}
          <Hero />

        </section>

        <section id="about">
          {/* About section */}
          <About />
        </section>

        <section id="projects">
          {/* Projects section */}
          <Projects />
        </section>

        <section id="skills">
          {/* Skills section */}
          <Skills />
        </section>

        <section id="contact">
          {/* Contact section */}
          <Contact />
        </section>
      </main>

      <footer>
        {/* Footer content */}
        <Footer />
      </footer>
    </>
  );
}