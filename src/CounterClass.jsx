import React from "react";

export class CounterClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }
  render() {
    const handleclick = () => {
      this.setState((currentstate) => {
        return { counter: currentstate.counter + 1 };
      });
    };

    return <h1 onClick={handleclick}> Click me {this.state.counter}</h1>;
  }
}
