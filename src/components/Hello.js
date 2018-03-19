//@flow
import React, { Component } from "react";

type HelloProps = {
    name: string
}

export class Hello extends Component<HelloProps> {
    render() {
        return <h1>Hello {this.props.name}!</h1>;
    }
}