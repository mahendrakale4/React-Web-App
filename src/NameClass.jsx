import React from "react";

export class NameClass extends React.Component {
    render(){
        return <h1 >{this.props.name} and {this.props.children}</h1>
    }

}