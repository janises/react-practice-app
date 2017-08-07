import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./Canvas.css";

export default class Canvas extends Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        let canvas = ReactDOM.findDOMNode(this.refs.myCanvas);
        let ctx = canvas.getContext('2d');

        for (var i = 0; i < 6; i++){
            for (var j = 0; j < 6; j++){
                ctx.fillStyle = `rgb(${Math.floor(255 - 42.5 * i)},${Math.floor(255 - 42.5 * j)},175)`;
                ctx.fillRect(j * 55, i * 55, 25, 25);
            }
        }
        
    }

    render() {
        return (
            <div className="canvas-container">
                <canvas ref="myCanvas" width="300" height="300" />
            </div>
        );
    }
}