import './Writer.css'
import {Component, createRef} from "react";

export default class Writer extends Component {
    constructor(props) {
        super(props);
        this.greetings = [
            <span><span className="instance-function">print</span>(<span className="string">'hi!'</span>)</span>,
            <span><span className="instance-function">f</span> -> <span className="instance-function">f</span>(<span className="string">'hi!'</span>)</span>,
            <span><span className="keyword">foo</span>?.<span className="instance-member">value</span> = <span className="string">'hi'</span></span>,
            <span>(<span className="instance-function">display</span> <span className="string">"hi"</span>)</span>
        ]
        this.chars = [
            12,
            13,
            17,
            14,
        ]

        this.state = {
            greeting: 0,
            chars: this.chars[0],
        }
        this.tick = this.tick.bind(this)
        this.writer = createRef();
    }

    componentDidMount() {
        setInterval(
            this.tick,
            10_000
        )
    }

    tick() {
        let greeting = (this.state.greeting + 1) % this.greetings.length;
        this.setState({
            greeting,
            chars: this.chars[greeting],
        })
        let current = this.writer?.current;

        let classList = current?.classList;
        classList?.remove('writer')
        setTimeout(() => classList?.add('writer'), 20)
    }

    render() {
        return (
            <h2 ref={this.writer}
                className="writer writer-title"
                style={{'--chars': this.state.chars}}>
                {this.greetings[this.state.greeting]}
            </h2>
        );
    }
}

