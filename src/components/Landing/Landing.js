import React, {Component} from "react";
import axios from "axios";
import "./Landing.css";

export default class Landing extends Component {
    constructor () {
        super();

        this.state = {};
    }

    render() {
        return (
            <div className="landing-page">
                <p>Where a bunch of random stuff will go</p>
            </div>
        );
    }
}