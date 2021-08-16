import './App.css';
import Sections from "./components/Sections";
import Section from "./components/Section";
// import Cube from "./components/Cube";
import Writer from "./components/Writer";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <nav>
            {/*    super nav*/}
            </nav>
            <Sections>
                <Section>
                    <div className="first container">
                        <Writer/>
                        <p className="presentation" style={{margin: 'auto'}}>
                            I'm <span className="instance-member">Brayan</span>
                            <br/>
                            <small>Student <span className="instance-function">&&</span> Developer</small>
                        </p>
                    </div>
                </Section>
                {/*<Section>*/}
                {/*    <h2>*/}
                {/*        My experience*/}
                {/*    </h2>*/}
                {/*    <Cube/>*/}
                {/*</Section>*/}
            </Sections>
            <Footer/>
        </div>
    );
}

export default App;
