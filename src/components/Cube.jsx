import JsLogo from "../logo/js.svg";
import GolangLogo from "../logo/go.svg";
import JavaLogo from "../logo/java.svg";
import VueLogo from "../logo/vue.svg";
import KotlinLogo from "../logo/kt.svg";
import PythonLogo from "../logo/py.svg";
import './Cube.css'

export default function Cube() {
    return (
        <div className="cube" id="example-element">
            <img className="face front" src={JsLogo} alt="JavaScript logo"/>
            <img className="face left" src={GolangLogo} alt="Golang logo"/>
            <img className="face back" src={JavaLogo} alt="Java logo"/>
            <img className="face right" src={VueLogo} alt="Vue logo"/>
            <img className="face left" src={KotlinLogo} alt="Kotlin logo"/>
            <img className="face top" src={GolangLogo} alt="Golang logo"/>
            <img className="face bottom" src={PythonLogo} alt="Python logo"/>
        </div>
    )
}
