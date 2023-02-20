import React from "react";
import logo from "./logo.png"

const Header = ()=> {
    return (
        <header className="header">
            <img src={logo} className="logo"></img>
            <h1 className="title">Pedro Henrique</h1>
            <p className="subTitle">Front-end Developer</p>
        </header>
    );
}

export default Header;