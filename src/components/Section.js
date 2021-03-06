import './Section.css'

export default function Section(props) {
    return (
        <div className={"section " + props.className || ''}>
            {props.children}
        </div>
    )
}
