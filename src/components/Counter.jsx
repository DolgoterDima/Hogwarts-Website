import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      inputValue: "default",
    };

    //bind context
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment = () => {
    this.setState((state) => ({
      likes: state.likes + 1,
    }));
  };
  decrement = () => {
    this.setState((state) => ({
      likes: state.likes - 1,
    }));
  };

  render() {
    return (
      <div>
        likes {this.state.likes}
        <button onClick={this.increment}>+</button> <br />
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}
export default Counter;
