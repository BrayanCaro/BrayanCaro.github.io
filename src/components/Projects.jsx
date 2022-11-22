import './Projects.css'
import Section from "./Section";
import ExternalLinkIcon from "../img/externalLink.svg";
import Favicon from "../img/favicon-16x16.svg";
import HandsAppIcon from "../img/handsApp.png";

export default function Projects() {
    return (
        <div className="projects container">
            <Section className="project bg-soft blocks-2">
                <div className="description">
                    <h3>Muebles Img</h3>
                    <p>A catalogue of decorative paintings</p>

                    <a target="_blank" href="https://www.mueblesimg.company/cuadro/catalogo" rel="noreferrer"
                       className="visit">
                        Visit<img src={ExternalLinkIcon} alt="icon" width={14}/>
                    </a>
                </div>
                <div className="images">
                    <img className="img-demo" src={Favicon} alt="Example" width="250" height="250"/>
                </div>
            </Section>
            <Section className="project bg-soft blocks-2">
                <div className="images">
                    <img className="img-demo" src={HandsAppIcon} alt="Example" width="250" height="250"/>
                </div>
                <div className="description">
                    <h3>Hands App</h3>
                    <p>For learning sign language</p>
                    <a target="_blank" href="https://handsapp.org" rel="noreferrer" className="visit">
                        Visit<img src={ExternalLinkIcon} alt="icon" width={14}/>
                    </a>
                </div>
            </Section>
        </div>
    )
}
