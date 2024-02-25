import About from "./../About";
import Section from "./../Section";
import Sections from "./../Sections";
import Projects from "./../Projects";

export default function Welcome() {
  return (
    <Sections>
      <Section className="container p-3 sm:p-6 !min-h-screen">
        <div className="text-lg">
          <p className="text-6xl">
            I'm <span className="instance-member">Brayan</span>
          </p>
          <p>
            Student <span className="instance-function">&</span> Developer
          </p>
        </div>
      </Section>
      <h2 id="projects" className="title container">
        Projects
      </h2>
      <Projects />
      <h2 id="about" className="title container">
        About
      </h2>
      <About />
    </Sections>
  );
}
