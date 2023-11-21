import React from "react";
export class TodolistClass extends React.Component{
    render(){
        return <label>
            <div></div>
            <input type="checkbox" defaultChecked={this.props. isComplete}/>
            {this.props.children}
        </label>
    }
}