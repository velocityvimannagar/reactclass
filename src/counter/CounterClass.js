import React from "react";

export class CounterClass extends React.Component {
  constructor() {
    super();
    console.log("Constructor called");
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("componentDidMount() ");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps called");
    return null;
  }
  componentDidUpdate(){
    console.log("componentDidUpdate() ");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate()')
    return true;
  }
  onIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  onDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    console.log("render() called");
    return (
      <div>
        <div>Count: {this.state.count}</div>
        <br></br>
        <div className="button-list">
          <button onClick={this.onIncrement}>Increment</button>
          <button onClick={this.onDecrement}>Decrement</button>
        </div>
      </div>
    );
  }
}
