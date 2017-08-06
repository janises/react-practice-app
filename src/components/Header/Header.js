import React from "react";
import {Link} from "react-router-dom";
import "./Header.css";

export default function Header() {
    return (
        <div className="header">
            <h1 className="header-title"> Random Stuff </h1>
            <ul className="nav">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/ronswanson">
                    <li>Ron Swanson</li>
                </Link>
                <Link to="/tictactoe">
                    <li>Tic Tac Toe</li>
                </Link>
            </ul>
        </div>
    );
}