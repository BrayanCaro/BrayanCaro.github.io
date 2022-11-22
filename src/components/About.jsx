import './About.css'
import Section from "./Section";
import Me from "../img/me.png";


export default function About() {
    return (
        <Section className="about container blocks-2">
            <div className="description">
                <h4>A friendly coder to work with</h4>
                <p>
                    I'm a computer science student from Mexico.
                    I work as a backend and frontend developer.
                    I'm available for internships related with artificial intelligence, web development and
                    microservices.
                </p>
            </div>
            <div className="images">
                <span className="letters">goupgoupgoupgoupgoupgoupgoupgoupgoupgoupgoupgoup</span>
                <img className="img-demo" src={Me} alt="Brayan's profile" width="250" height="250"/>
            </div>
        </Section>
    )
};
