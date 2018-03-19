//@flow

import React from "react";
import ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

const root = document.getElementById("root");

if(root instanceof Element) {
    ReactDOM.render(
        <Hello name="World" />,
        root
    );
}


