import React from "react";

const Link = (props)=> {
    return (
        <li className="link">
            <a href={props.link} target="_blank">{props.name}</a>
        </li>
    );
}

export default Link;