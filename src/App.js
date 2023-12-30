import { Toolbar } from "@mui/material";
import About from "./components/About";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Toolbar />
      <section id="section0">
        <About />
      </section>
      <section id="section1">
        <Experience />
      </section>
      <section id="section2">
        <Projects />
      </section>
      <section id="section3">
        <Education />
      </section>
      <Footer />
    </div>
  );
}

export default App;
