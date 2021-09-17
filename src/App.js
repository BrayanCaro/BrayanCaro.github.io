import './App.css';
import Sections from "./components/Sections";
import Section from "./components/Section";
import Writer from "./components/Writer";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
    return (
        <div className="App">
            <nav></nav>
            <Sections>
                <Section className="container">
                    <div className="first jb-mono-font">
                        <Writer/>
                        <p className="presentation" style={{margin: 'auto'}}>
                            I'm <span className="instance-member">Brayan</span>
                            <br/>
                            <small>Student <span className="instance-function">&&</span> Developer</small>
                        </p>
                    </div>
                </Section>
                <h2 id="projects" className="title container">Projects</h2>
                <Projects/>
                <h2 id="about" className="title container">About</h2>
                <About/>
            </Sections>
            <Footer/>
        </div>
    );
}

export default App;
